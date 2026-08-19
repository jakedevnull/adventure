/* Illumination spike renderer — SPE-32.
 *
 * Implements the DESIGN.md §6.2 constraint as a tiny engine:
 *   - a cell grid, max 64 × 24, aligned to the terminal's character grid
 *   - one glyph per cell, drawn from a curated set (the Foundry stand-in)
 *   - a fixed palette of 16 inks per theme
 *   - per-cell animation loops of up to 8 frames at one fixed slow tick
 *   - hotspots: rectangles of cells mapped to a command, composed into the prompt
 *   - layers that show/hide with game state
 *
 * An illumination is declarative data (see the example pages); nothing in the
 * data executes. This file is the spike's one piece of "engine".
 */

(function () {
  'use strict';

  var TICK_MS = 500;      // the fixed slow tick
  var MAX_COLS = 64, MAX_ROWS = 24, MAX_FRAMES = 8;

  /* ---------------------------------------------------------------- inks */

  var PALETTES = {
    /* Gold Leaf — illuminated-manuscript inks on night vellum. */
    goldleaf: { bg: '#151109', fg: '#d8cdb4', dim: '#6f6552', inks: [
      '#151109', '#f2d772', '#d4a93c', '#a67c1e', '#6e5313',
      '#efe6cf', '#bfb49a', '#7d745f', '#403a2c',
      '#2b5e8f', '#5c8fc0', '#8f1f2e', '#c74b57',
      '#2f6b3a', '#6fa877', '#e7d9bd' ] },

    /* Phosphor — one green, sixteen brightnesses. The purist's palette. */
    phosphor: { bg: '#050a05', fg: '#7dd87d', dim: '#2e5c2e', inks: [
      '#050a05', '#0a140a', '#12220f', '#1a3315', '#22451c',
      '#2a5723', '#33692a', '#3c7c32', '#46903a',
      '#50a443', '#5bb84d', '#67cc58', '#74e065',
      '#84ef74', '#9cf78c', '#c2ffb2' ] },

    /* Sanguine — red chalk and iron-gall on old paper. For the folio. */
    sanguine: { bg: '#171210', fg: '#cdb99f', dim: '#6b5c4c', inks: [
      '#171210', '#e8d8bc', '#cdb99f', '#a8937a', '#7d6b58',
      '#54473a', '#b4593c', '#c9714f', '#daa07a',
      '#8a3c2a', '#5e2d20', '#3d5c66', '#6a8f99',
      '#2c2420', '#9c8468', '#f0e6d2' ] },

    /* Loom — dyed wool: madder, weld, woad. For the gallery. */
    loom: { bg: '#14120e', fg: '#cfc4ab', dim: '#635c4c', inks: [
      '#14120e', '#d9cdb0', '#a89c80', '#6f6753', '#3d382c',
      '#8f4b3a', '#b56b50', '#c99a4a', '#8f7530',
      '#4a6b52', '#6f8f6a', '#3b5a72', '#5f80a0',
      '#7a4a66', '#a06e8a', '#efe6d0' ] },

    /* Hearth — inn windows at dusk. */
    hearth: { bg: '#100d12', fg: '#d8c8a8', dim: '#5f5548', inks: [
      '#100d12', '#1c1826', '#2c2438', '#4a3c50', '#6e5a60',
      '#3d3226', '#5c4a34', '#8a6a3c', '#b58a48',
      '#e0ac58', '#f5cf7a', '#fce9a8', '#c46a3a',
      '#8c4a2e', '#66b0c4', '#efe2c8' ] },

    /* Riverlight — water over a weir, wet stone, moss. */
    riverlight: { bg: '#0a1012', fg: '#bcd0cc', dim: '#4c625f', inks: [
      '#0a1012', '#12252a', '#1b3a42', '#255460', '#2f6e7e',
      '#3f8fa0', '#5cb0be', '#84cdd6', '#b8e6e8',
      '#3d4a3a', '#5a6e4c', '#7d945e', '#a3b478',
      '#6b5a44', '#93826a', '#e6efe8' ] },

    /* Seasons — an era-neutral ground with green and gold to grow things in. */
    seasons: { bg: '#0f110c', fg: '#c8c8ae', dim: '#5c5f4c', inks: [
      '#0f110c', '#232818', '#3a4423', '#52632f', '#6b843c',
      '#87a44c', '#a8c266', '#cbdd8a', '#6e5a35',
      '#8f7845', '#b09858', '#d1bc79', '#8a4a30',
      '#b8703f', '#7a8fa0', '#eeeedd' ] },

    /* Moonwash — the Hush sky. Silver on deep blue, one warning ember. */
    moonwash: { bg: '#070a14', fg: '#aebad0', dim: '#3d4660', inks: [
      '#070a14', '#0d1322', '#151d33', '#1f2a47', '#2b395e',
      '#3d4f7a', '#566b96', '#7488b0', '#95a8c8',
      '#b8c8de', '#dce6f2', '#f2f6fc', '#8f96b8',
      '#c9a24a', '#e8c86a', '#c4553a' ] },

    /* Verdigris — weathered bronze and slate. For carved stone. */
    verdigris: { bg: '#0e1210', fg: '#b8c4b4', dim: '#4f5c50', inks: [
      '#0e1210', '#1d2620', '#2e3c32', '#425445', '#586c58',
      '#70866e', '#8ca287', '#aebfa6', '#d0dcc8',
      '#4a7a6e', '#66a08e', '#8ec4ae', '#6b5c3a',
      '#96824c', '#c4aa60', '#e8e2ce' ] },

    /* Lettered — museum light: plate glass, brass, label-card grey. */
    lettered: { bg: '#101214', fg: '#c6cad0', dim: '#585e66', inks: [
      '#101214', '#1a1e23', '#262c33', '#353d46', '#48525c',
      '#5e6a75', '#77848f', '#93a0aa', '#b2bec6',
      '#d3dde2', '#eef3f5', '#6f90a8', '#9cc0d4',
      '#a08340', '#c9a85c', '#ecd98e' ] }
  };

  /* ------------------------------------------------------------- helpers */

  function el(tag, cls, parent) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (parent) parent.appendChild(n);
    return n;
  }

  function resolveLegendEntry(ch, entry) {
    // Entry forms:  7  |  {ink:7}  |  {ink:7, glyph:'*'}
    //            |  {frames:'~≈-', ink:4}            (glyph cycle, one ink)
    //            |  {frames:['*','✦'], inks:[1,2]}   (glyph+ink cycle)
    //            |  ...plus optional phase:n or stagger:'diag'|'grid'
    if (typeof entry === 'number') entry = { ink: entry };
    var frames = entry.frames;
    if (typeof frames === 'string') frames = frames.split('');
    if (!frames) frames = [entry.glyph !== undefined ? entry.glyph : ch];
    if (frames.length > MAX_FRAMES) frames = frames.slice(0, MAX_FRAMES);
    var inks = entry.inks || null;
    return {
      frames: frames,
      inks: inks,
      ink: entry.ink || 0,
      phase: entry.phase || 0,
      stagger: entry.stagger || null
    };
  }

  /* --------------------------------------------------------- Illumination */

  function Illumination(spec) {
    this.spec = spec;
    this.cols = Math.min(spec.cols, MAX_COLS);
    this.rows = Math.min(spec.rows, MAX_ROWS);
    this.layerState = {};
    (spec.layers || []).forEach(function (L) {
      this.layerState[L.name] = L.visible !== false;
    }, this);
    this.tick = 0;
    this.cells = null;    // composited: rows × cols of {frames, inks, ink, phase} | null
    this.spans = null;
    this.animated = [];
    this.root = null;
    this.revealed = false;
  }

  Illumination.prototype.setLayer = function (name, visible) {
    this.layerState[name] = visible;
    this.composite();
    this.paintAll();
  };

  Illumination.prototype.composite = function () {
    var g = [], r, c;
    for (r = 0; r < this.rows; r++) { g.push(new Array(this.cols).fill(null)); }
    (this.spec.layers || []).forEach(function (L) {
      if (!this.layerState[L.name]) return;
      for (r = 0; r < Math.min(L.rows.length, this.rows); r++) {
        var line = L.rows[r];
        for (c = 0; c < Math.min(line.length, this.cols); c++) {
          var ch = line[c];
          if (ch === ' ') continue;                  // space = transparent
          var entry = L.legend ? L.legend[ch] : undefined;
          if (entry === undefined) {
            if (L.ink == null) continue;             // layer default ink, for text
            entry = { ink: L.ink };
          }
          var cell = resolveLegendEntry(ch, entry);
          if (cell.stagger === 'diag') cell.phase = (r + c) % cell.frames.length;
          else if (cell.stagger === 'grid') cell.phase = (c * 3 + r * 7) % cell.frames.length;
          g[r][c] = cell;
        }
      }
    }, this);
    this.cells = g;
    this.animated = [];
    for (r = 0; r < this.rows; r++) for (c = 0; c < this.cols; c++) {
      var cc = g[r][c];
      if (cc && (cc.frames.length > 1 || cc.inks)) this.animated.push([r, c]);
    }
  };

  Illumination.prototype.mount = function (parent) {
    this.composite();
    var root = el('div', 'illum', parent);
    root.style.setProperty('--cols', this.cols);
    var grid = el('div', 'illum-grid', root);
    this.spans = [];
    for (var r = 0; r < this.rows; r++) {
      var rowEl = el('div', 'illum-row illum-row-hidden', grid);
      var rowSpans = [];
      for (var c = 0; c < this.cols; c++) rowSpans.push(el('span', 'illum-cell', rowEl));
      this.spans.push(rowSpans);
    }
    this.paintAll();
    this.mountHotspots(root);
    this.root = root;
    var self = this;
    this.timer = setInterval(function () { self.tick++; self.paintAnimated(); }, TICK_MS);
    return root;
  };

  Illumination.prototype.paintCell = function (r, c) {
    var span = this.spans[r][c], cell = this.cells[r][c];
    if (!cell) { span.textContent = ' '; span.style.color = ''; return; }
    var i = (this.tick + cell.phase) % cell.frames.length;
    span.textContent = cell.frames[i] === ' ' ? ' ' : cell.frames[i];
    var inkIndex = cell.inks ? cell.inks[i % cell.inks.length] : cell.ink;
    span.style.color = this.palette.inks[inkIndex] || this.palette.fg;
  };

  Illumination.prototype.paintAll = function () {
    this.palette = PALETTES[this.spec.palette] || PALETTES.goldleaf;
    for (var r = 0; r < this.rows; r++)
      for (var c = 0; c < this.cols; c++) this.paintCell(r, c);
  };

  Illumination.prototype.paintAnimated = function () {
    for (var i = 0; i < this.animated.length; i++)
      this.paintCell(this.animated[i][0], this.animated[i][1]);
  };

  /* Reveal rows top to bottom, as if the terminal were printing the image. */
  Illumination.prototype.reveal = function (done) {
    var rows = this.root.querySelectorAll('.illum-row'), i = 0, self = this;
    (function next() {
      if (i >= rows.length) { self.revealed = true; if (done) done(); return; }
      rows[i].classList.remove('illum-row-hidden');
      i++; setTimeout(next, 55);
    })();
  };

  Illumination.prototype.mountHotspots = function (root) {
    var self = this;
    (this.spec.hotspots || []).forEach(function (h) {
      var d = el('div', 'hotspot', root);
      d.style.left = 'calc(' + h.x + ' * var(--cw))';
      d.style.top = 'calc(' + h.y + ' * var(--ch))';
      d.style.width = 'calc(' + h.w + ' * var(--cw))';
      d.style.height = 'calc(' + h.h + ' * var(--ch))';
      d.title = h.command;
      d.addEventListener('click', function () {
        if (Term.instance) Term.instance.compose(h.command);
      });
    });
    // Held 'h' shows where the hotspots are (a spike affordance, not a feature).
    document.addEventListener('keydown', function (e) {
      if (e.key === 'h' && document.activeElement.tagName !== 'INPUT')
        root.classList.add('show-hotspots');
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === 'h') root.classList.remove('show-hotspots');
    });
  };

  /* ----------------------------------------------------------------- Term
   * A miniature transcript: typed output, a prompt, a command handler.
   * Just enough terminal for the spike to feel like the game.
   */

  function Term(container, opts) {
    opts = opts || {};
    this.container = container;
    this.out = el('div', 'term-out', container);
    var pr = el('div', 'term-prompt', container);
    el('span', 'term-caret', pr).textContent = '>';
    this.input = el('input', 'term-input', pr);
    this.input.setAttribute('spellcheck', 'false');
    this.input.setAttribute('autocomplete', 'off');
    this.input.setAttribute('aria-label', 'command');
    this.handler = opts.onCommand || function () { return null; };
    this.queue = [];
    this.busy = false;
    var self = this;
    this.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && self.input.value.trim()) {
        var cmd = self.input.value.trim();
        self.input.value = '';
        self.echo(cmd);
        var reply = self.handler(cmd.toUpperCase().replace(/\s+/g, ' '));
        if (typeof reply === 'string') self.print(reply);
      }
    });
    container.addEventListener('click', function (e) {
      if (e.target.closest('.hotspot') || window.getSelection().toString()) return;
      self.input.focus();
    });
    Term.instance = this;
  }

  /* Print with the typewriter cadence: fast, per-line. */
  Term.prototype.print = function (text, cls) {
    var self = this;
    this.queue.push(function (done) {
      var lines = String(text).split('\n');
      var li = 0;
      (function nextLine() {
        if (li >= lines.length) { done(); return; }
        var line = lines[li++];
        var p = el('div', 'term-line' + (cls ? ' ' + cls : ''), self.out);
        var i = 0;
        (function type() {
          if (i >= line.length) {
            if (!line.length) p.innerHTML = '&nbsp;';
            setTimeout(nextLine, 60);
            return;
          }
          i += 3;                                 // 3 chars per frame ≈ fast
          p.textContent = line.slice(0, i);
          self.scroll();
          setTimeout(type, 12);
        })();
      })();
    });
    this.drain();
  };

  Term.prototype.echo = function (cmd) {
    var self = this;
    this.queue.push(function (done) {
      var p = el('div', 'term-line term-echo', self.out);
      p.textContent = '> ' + cmd;
      self.scroll(); done();
    });
    this.drain();
  };

  /* Mount an illumination into the transcript flow and scroll it in. */
  Term.prototype.illuminate = function (illum) {
    var self = this;
    this.queue.push(function (done) {
      illum.mount(self.out);
      self.scroll();
      illum.reveal(function () { self.scroll(); done(); });
    });
    this.drain();
    return illum;
  };

  Term.prototype.pause = function (ms) {
    this.queue.push(function (done) { setTimeout(done, ms); });
    this.drain();
  };

  Term.prototype.drain = function () {
    if (this.busy) return;
    var self = this;
    (function step() {
      var job = self.queue.shift();
      if (!job) { self.busy = false; return; }
      self.busy = true;
      job(function () { setTimeout(step, 30); });
    })();
  };

  Term.prototype.scroll = function () {
    window.scrollTo(0, document.body.scrollHeight);
  };

  /* Compose (not execute): the tap writes the command; the player sends it. */
  Term.prototype.compose = function (command) {
    var self = this;
    this.input.focus();
    var i = 0;
    (function type() {
      if (i >= command.length) return;
      i++;
      self.input.value = command.slice(0, i);
      setTimeout(type, 24);
    })();
  };

  /* Apply the page's palette to the document chrome. */
  function theme(paletteName) {
    var p = PALETTES[paletteName] || PALETTES.goldleaf;
    var s = document.documentElement.style;
    s.setProperty('--bg', p.bg);
    s.setProperty('--fg', p.fg);
    s.setProperty('--dim', p.dim);
  }

  /* Spike page chrome: back link, palette swatches, experiment notes. */
  function chrome(paletteName, notes) {
    theme(paletteName);
    var head = el('header', 'spike-head');
    var back = el('span', null, head);
    back.innerHTML = '<a href="index.html">&larr; illuminations</a>';
    var mid = el('span', null, head);
    mid.appendChild(document.createTextNode('palette: ' + paletteName + ' '));
    var sw = el('span', 'swatches', mid);
    (PALETTES[paletteName] || PALETTES.goldleaf).inks.forEach(function (c) {
      el('i', null, sw).style.background = c;
    });
    el('span', null, head).textContent = notes || '';
    document.body.insertBefore(head, document.body.firstChild);
  }

  window.Illum = {
    PALETTES: PALETTES,
    Illumination: Illumination,
    Term: Term,
    theme: theme,
    chrome: chrome
  };
})();
