/* ============================================================
   Tarık Gülezgin — portfolio interactions
   Vanilla JS, no dependencies.
   ============================================================ */
(() => {
  'use strict';

  // marks the document as script-driven so CSS can hide-then-reveal safely
  document.documentElement.classList.add('js');

  /* ---------- config ---------- */
  const CONFIG = {
    // used by the contact form (mailto); not shown anywhere on the page
    email: 'tarikgulezgin@gmail.com',
    // the rotating titles from the old site, in the same order
    roles: [
      'Software Engineer',
      'Artificial Intelligence Engineer',
      'Mid.Python Developer',
      'Jr.Java Developer',
      'Mid.Web Developer',
      'Jr.Machine Learning Engineer',
      'Jr.Embedded Systems Developer',
      'Mid. Data Scientist / Data Engineer / Web Scraper'
    ]
  };
  /* ---------- projects: titles, images and links exactly as on the old site ----------
     c = category, used only by the filter buttons                                      */
  const PROJECTS = [
    { t: "Remote-access-trojan", c: 'security', i: 'images/rat.jpeg', u: 'https://github.com/gulezgin/Remote-access-trojan', a: "RAT" },
    { t: "Face Recognition", c: 'ai', i: 'images/frec.jpeg', u: 'https://github.com/gulezgin/facial-recognition', a: "Face recognition" },
    { t: "Freeleance Scrape", c: 'data', i: 'images/fresc.jpeg', u: 'https://github.com/gulezgin/freeleance-scraper', a: "Web Crawling" },
    { t: "Earthquake Notification Telegram Bot", c: 'tools', i: 'images/deptgbot.jpeg', u: 'https://github.com/gulezgin/earthquake-notification-telegram-bot', a: "Earthquake Notification Telegram Bot" },
    { t: "Chaotic Pendulum", c: 'data', i: 'images/chpe.jpg', u: 'https://github.com/gulezgin/Chaotic-Pendulum', a: "Chaotic Pendulum" },
    { t: "Netflix Data Analysis", c: 'data', i: 'images/netflix.png', u: 'https://github.com/gulezgin/Netflix-Data-Analysis', a: "Netflix Data Analysis" },
    { t: "Eye Fatigue Analysis Detection", c: 'ai', i: 'images/eye.jpeg', u: 'https://github.com/gulezgin/eye-fatigue-analysis-Detection', a: "Eye Fatigue Analysis Detection" },
    { t: "Tensorflow Object Detection", c: 'ai', i: 'images/tensorflowpng.png', u: 'https://github.com/gulezgin/tensorflow-objectDetection', a: "Tensorflow Object Detection" },
    { t: "Voice Chatbot GCP-OPENAI", c: 'ai', i: 'images/gptvoice.png', u: 'https://github.com/gulezgin/voice-chatbot-GCP-OPENAI', a: "Voice Chatbot GCP-OPENAI" },
    { t: "WEBSITE", c: 'web', i: 'images/websitea.png', u: 'https://www.yusufgulezgin.av.tr/', a: "WEBSITE" },
    { t: "pdfQuestion", c: 'ai', i: 'images/PDF-LangChain.jpg', u: 'https://github.com/gulezgin/pdfQuestion-langchain', a: "pdfQuestion" },
    { t: "Otto Robot", c: 'embedded', i: 'images/otto-robot.png', u: 'https://github.com/gulezgin/otto-robot', a: "otto-robot" },
    { t: "TR Super League", c: 'data', i: 'images/trsuperlig.jpg', u: 'https://github.com/gulezgin/super_league', a: "TRsuperlig" },
    { t: "Api- Spotify Transfer Soundcloud", c: 'tools', i: 'images/SSC.png', u: 'https://github.com/gulezgin/API-spotify-transfer-soundcloud-', a: "api-spotify-transfer-soundcloud" },
    { t: "Vanna AI", c: 'ai', i: 'images/vannaai.png', u: 'https://github.com/gulezgin/vannaAI', a: "vannaai" },
    { t: "Face Tracking Shoter", c: 'ai', i: 'images/facetrackingshot.png', u: 'https://github.com/gulezgin/Face-Tracking-shoter', a: "Face-Tracking-shoter" },
    { t: "WEBSITE", c: 'web', i: 'images/iyk.png', u: 'https://www.iykinsaat.com/', a: "WEBSITE" },
    { t: "Neuro Linguistic Programming", c: 'ai', i: 'images/nlp.png', u: 'https://github.com/gulezgin/-nlp-project-alfa', a: "NLP" },
    { t: "FaceAuth-Vision", c: 'ai', i: 'images/faceauth.jpg', u: 'https://github.com/gulezgin/FaceAuth-Vision---Akilli-Yuz-Tanima-ve-Kimlik-Dogrulama-Sistemi', a: "faceauth" },
    { t: "CrewAI", c: 'ai', i: 'images/crewai.png', u: 'https://github.com/gulezgin/simple-crewai-improvements', a: "crewai" },
    { t: "PDF-MASTER", c: 'web', i: 'images/pdfmaster.png', u: 'https://github.com/gulezgin/online-PDFMaster', a: "pdfmaster" },
    { t: "Sentiment Analysis", c: 'ai', i: 'images/sentimentanalysis.jpg', u: 'https://github.com/gulezgin/Sentiment-Analysis-exercise', a: "Sentiment-Analysis" },
    { t: "YouTube Downloader", c: 'tools', i: 'images/utub.png', u: 'https://github.com/gulezgin/youtube-downloader-v0.1', a: "youtube-downloader-v0.1" },
    { t: "Speech-to-Text", c: 'ai', i: 'images/stotxt.png', u: 'https://github.com/gulezgin/speech-to-text_v0.1', a: "speech-to-text_v0.1" },
    { t: "Hukuk Asistanı Themis - Proof of Concept-r", c: 'ai', i: 'images/themis.png', u: 'https://github.com/gulezgin/Hukuk-Asistan-Themis-Proof-of-Concept-', a: "Hukuk-Asistan-Themis-Proof-of-Concept-" },
    { t: "WordPool TR-EN", c: 'tools', i: 'images/eng-tr.png', u: 'https://github.com/gulezgin/WordPool-TR-EN', a: "WordPool-TR-EN" },
    { t: "WEBSITE", c: 'web', i: 'images/rentacar.png', u: 'https://puturgerentacar.com.tr/', a: "WEBSITE" }
  ];

  const CAT_LABEL = {
    ai: 'AI / ML', web: 'Web', data: 'Data',
    tools: 'Automation', security: 'Security', embedded: 'Embedded'
  };

  const FILTERS = [
    { key: 'all',      label: 'All' },
    { key: 'ai',       label: 'AI / ML' },
    { key: 'web',      label: 'Web' },
    { key: 'data',     label: 'Data' },
    { key: 'tools',    label: 'Automation' },
    { key: 'security', label: 'Security' },
    { key: 'embedded', label: 'Embedded' }
  ];

  /* ---------- helpers ---------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  let toastTimer;
  function toast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-open');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-open'), 2600);
  }

  /* ---------- preloader ---------- */
  function initPreloader() {
    const box = $('#preloader');
    const fill = $('#preloader-fill');
    const num = $('#preloader-num');
    if (!box) { startHeroSequence(); return; }

    let value = 0;
    let loaded = false;
    let finished = false;
    window.addEventListener('load', () => { loaded = true; });

    const finish = () => {
      if (finished) return;
      finished = true;
      if (fill) fill.style.width = '100%';
      if (num) num.textContent = '100%';
      box.classList.add('is-done');
      document.body.classList.remove('is-locked');
      setTimeout(() => box.remove(), 900);
      startHeroSequence();
    };

    const tick = () => {
      if (finished) return;
      const target = loaded ? 100 : 92;
      value = Math.min(value + Math.max((target - value) * 0.08, loaded ? 1.5 : 0.35), 100);
      if (fill) fill.style.width = value + '%';
      if (num) num.textContent = Math.round(value) + '%';
      if (value >= 99.5) { finish(); return; }
      requestAnimationFrame(tick);
    };

    document.body.classList.add('is-locked');
    requestAnimationFrame(tick);

    // timers keep running when requestAnimationFrame is paused (background tab),
    // so the page can never stay stuck behind the loader
    setTimeout(() => { loaded = true; }, 3000);
    setTimeout(finish, 5000);
  }

  function startHeroSequence() {
    $$('#home [data-reveal], #home [data-split]').forEach(el => el.classList.add('is-in'));
    initTypewriter();
  }

  /* ---------- theme ---------- */
  function initTheme() {
    const root = document.documentElement;
    const btn = $('#theme-toggle');
    const stored = localStorage.getItem('tg-theme');
    if (stored) root.setAttribute('data-theme', stored);

    btn?.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('tg-theme', next);
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#07080c' : '#f4f5f9');
      toast(next === 'dark' ? 'Dark mode' : 'Light mode');
    });
  }

  /* ---------- split text ---------- */
  function splitText(el) {
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          if (!child.textContent.trim()) return;
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
            const word = document.createElement('span');
            word.className = 'word';
            const inner = document.createElement('span');
            inner.textContent = part;
            word.appendChild(inner);
            frag.appendChild(word);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE && !child.classList.contains('word')) {
          walk(child);
        }
      });
    };
    walk(el);
    $$('.word > span', el).forEach((s, i) => s.style.setProperty('--i', i));
  }

  /* ---------- reveal on scroll ---------- */
  let revealObserver;
  function initReveal() {
    $$('[data-split]').forEach(splitText);

    if (REDUCED || !('IntersectionObserver' in window)) {
      $$('[data-reveal], [data-split], .skill').forEach(el => el.classList.add('is-in'));
      $$('.counter').forEach(el => el.textContent = el.dataset.count + (el.dataset.suffix || ''));
      return;
    }

    revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        if (entry.target.classList.contains('counter')) countUp(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    observeAll();
  }

  function observeAll() {
    if (!revealObserver) {
      $$('[data-reveal], [data-split], .skill').forEach(el => el.classList.add('is-in'));
      return;
    }
    $$('[data-reveal]:not(.is-in), [data-split]:not(.is-in), .skill:not(.is-in), .counter:not(.is-in)')
      .forEach(el => revealObserver.observe(el));
  }

  function countUp(el) {
    const target = parseFloat(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();
    const step = now => {
      const p = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- typewriter ---------- */
  function initTypewriter() {
    const el = $('#typewriter');
    if (!el || el.dataset.started) return;
    el.dataset.started = '1';

    if (REDUCED) { el.textContent = CONFIG.roles[0]; return; }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const loop = () => {
      const word = CONFIG.roles[wordIndex];
      charIndex += deleting ? -1 : 1;
      el.textContent = word.slice(0, charIndex);

      let delay = deleting ? 45 : 85;
      if (!deleting && charIndex === word.length) { delay = 1600; deleting = true; }
      else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % CONFIG.roles.length;
        delay = 320;
      }
      setTimeout(loop, delay);
    };
    loop();
  }

  /* ---------- custom cursor ---------- */
  function initCursor() {
    if (!FINE_POINTER || REDUCED) return;
    const cursor = $('#cursor');
    if (!cursor) return;
    const dot = $('.cursor__dot', cursor);
    const ring = $('.cursor__ring', cursor);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }, { passive: true });

    const render = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    const hoverables = 'a, button, .project, .card, input, textarea, .stat, .tab, .filter';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverables)) cursor.classList.add('is-hover');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverables)) cursor.classList.remove('is-hover');
    });
  }

  /* ---------- particle network ---------- */
  function initNetwork() {
    const canvas = $('#net');
    if (!canvas || REDUCED) { canvas?.remove(); return; }
    const ctx = canvas.getContext('2d');

    const GLYPHS = ['{ }', '</>', '( )', '=>', '[ ]', ';', '01', '10', 'def', 'if', '#', 'AI', '&&', '::', '...', 'fn'];

    let w = 0, h = 0, dpr = 1, particles = [], glyphs = [], raf = null;
    let prevScroll = window.scrollY;
    const pointer = { x: -9999, y: -9999 };

    const accent = () => getComputedStyle(document.documentElement)
      .getPropertyValue('--accent').trim() || '#ff7a18';

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = clamp(Math.round((w * h) / 20000), 30, 100);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.6,
        depth: 0.4 + Math.random() * 0.9
      }));

      const gCount = clamp(Math.round((w * h) / 46000), 10, 34);
      glyphs = Array.from({ length: gCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: 0.12 + Math.random() * 0.3,
        size: 11 + Math.random() * 13,
        depth: 0.5 + Math.random() * 1.5,
        alpha: 0.06 + Math.random() * 0.14,
        char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const color = accent();

      // scrolling drags the whole field, so the background keeps moving with the page
      const sy = window.scrollY;
      const drag = clamp((sy - prevScroll) * 0.35, -60, 60);
      prevScroll = sy;

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy - drag * 0.04 * p.depth;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - pointer.x, dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130 && dist > 0.1) {
          p.x += (dx / dist) * 0.8;
          p.y += (dy / dist) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 140) continue;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = color;
          ctx.globalAlpha = (1 - d / 140) * 0.18;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      // drifting code fragments — the same field, one layer further back
      for (const g of glyphs) {
        g.y += g.vy - drag * 0.06 * g.depth;
        if (g.y > h + 30) { g.y = -30; g.x = Math.random() * w; }
        if (g.y < -30) { g.y = h + 30; g.x = Math.random() * w; }

        ctx.font = `500 ${g.size}px "JetBrains Mono", ui-monospace, monospace`;
        ctx.fillStyle = color;
        ctx.globalAlpha = g.alpha;
        ctx.fillText(g.char, g.x, g.y);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };

    resize();
    start();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 180);
    });
    window.addEventListener('mousemove', e => { pointer.x = e.clientX; pointer.y = e.clientY; }, { passive: true });
    window.addEventListener('mouseout', () => { pointer.x = pointer.y = -9999; });
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  }

  /* ---------- header, progress, spy, to-top ---------- */
  function initScrollUI() {
    const header = $('#header');
    const bar = $('#scroll-progress');
    const toTop = $('#to-top');
    const links = $$('.nav__link');
    const sections = links
      .map(l => document.querySelector(l.getAttribute('href')))
      .filter(Boolean);

    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      header?.classList.toggle('is-stuck', y > 24);
      if (bar) bar.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
      toTop?.classList.toggle('is-visible', y > 600);

      let current = sections[0];
      for (const sec of sections) {
        if (sec.offsetTop - window.innerHeight * 0.35 <= y) current = sec;
      }
      if (current) {
        links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + current.id));
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();

    toTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
    });
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    const burger = $('#burger');
    const nav = $('#nav');
    if (!burger || !nav) return;

    const close = () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
    };

    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('is-locked', open);
    });

    nav.addEventListener('click', e => { if (e.target.closest('.nav__link')) close(); });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1080) close(); });
  }

  /* ---------- magnetic buttons ---------- */
  function initMagnetic() {
    if (!FINE_POINTER || REDUCED) return;
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.28;
        const y = (e.clientY - r.top - r.height / 2) * 0.4;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- 3D tilt ---------- */
  function initTilt() {
    if (!FINE_POINTER || REDUCED) return;
    $$('[data-tilt]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${px * 11}deg) rotateX(${-py * 11}deg)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
      });
    });
  }

  /* ---------- spotlight cards ---------- */
  function initSpotlight() {
    if (!FINE_POINTER) return;
    document.addEventListener('mousemove', e => {
      const card = e.target.closest('[data-spotlight]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------- projects ---------- */
  function initProjects() {
    const grid = $('#project-grid');
    const filterBar = $('#filters');
    if (!grid) return;

    const counts = PROJECTS.reduce((acc, p) => {
      acc[p.c] = (acc[p.c] || 0) + 1;
      return acc;
    }, {});

    filterBar.innerHTML = FILTERS
      .filter(f => f.key === 'all' || counts[f.key])
      .map((f, idx) => `
        <button class="filter${idx === 0 ? ' is-active' : ''}" type="button" data-filter="${f.key}">
          ${f.label}<small>${f.key === 'all' ? PROJECTS.length : counts[f.key]}</small>
        </button>`).join('');

    grid.innerHTML = PROJECTS.map((p, idx) => `
      <article class="project" data-cat="${p.c}" data-reveal style="--d:${(idx % 3) * 0.08}s">
        <div class="project__media">
          <span class="project__cat">${CAT_LABEL[p.c] || p.c}</span>
          <img src="${p.i}" alt="${p.a}" loading="lazy" decoding="async">
        </div>
        <div class="project__body">
          <h3>${p.t}</h3>
          <a class="project__link" href="${p.u}" target="_blank" rel="noopener" aria-label="${p.t}">
            <svg class="ico"><use href="#i-external"></use></svg>
          </a>
        </div>
      </article>`).join('');

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      const key = btn.dataset.filter;

      $$('.filter', filterBar).forEach(f => f.classList.toggle('is-active', f === btn));
      $$('.project', grid).forEach(card => {
        const show = key === 'all' || card.dataset.cat === key;
        card.classList.toggle('is-hidden', !show);
        card.classList.remove('is-entering');
        if (show && !REDUCED) {
          void card.offsetWidth;           // restart the entrance animation
          card.classList.add('is-entering');
        }
      });
    });

    observeAll();
  }

  /* ---------- contact ---------- */
  function initContact() {
    const form = $('#contact-form');
    form?.addEventListener('submit', ev => {
      ev.preventDefault();
      const required = $$('input[required], textarea[required]', form);
      let valid = true;

      required.forEach(field => {
        const ok = field.checkValidity() && field.value.trim() !== '';
        field.parentElement.classList.toggle('has-error', !ok);
        if (!ok && valid) { field.focus(); valid = false; }
      });

      if (!valid) { toast('Please fill in every field correctly'); return; }

      const name = $('#f-name').value.trim();
      const mail = $('#f-mail').value.trim();
      const phone = $('#f-phone').value.trim();
      const subject = $('#f-subject').value.trim();
      const message = $('#f-msg').value.trim();
      const body = message + '\n\n---\n' + name + '\n' + mail + (phone ? '\n' + phone : '');

      window.location.href =
        'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      toast('Opening your mail app…');
    });

    $$('#contact-form input, #contact-form textarea').forEach(field => {
      field.addEventListener('input', () => field.parentElement.classList.remove('has-error'));
    });
  }

  /* ---------- background music ---------- */
  function initSound() {
    const audio = $('#bg-music');
    const btn = $('#sound-toggle');
    if (!audio || !btn) return;

    audio.volume = 0.35;
    btn.addEventListener('click', async () => {
      if (audio.paused) {
        try {
          await audio.play();
          btn.setAttribute('aria-pressed', 'true');
          toast('Music on');
        } catch {
          toast('Your browser blocked audio playback');
        }
      } else {
        audio.pause();
        btn.setAttribute('aria-pressed', 'false');
        toast('Music off');
      }
    });
  }

  /* ---------- counters, straight from the content ---------- */
  function initStats() {
    const set = (sel, n) => { const el = $(sel); if (el) el.dataset.count = n; };
    set('#stat-projects', PROJECTS.length);
    set('#stat-experience', $$('#experience .tl').length);
    set('#stat-services', $$('#services .card').length);
    set('#stat-education', $$('#education .tl').length);
  }

  /* ---------- misc ---------- */
  function initMisc() {
    // smooth anchor scrolling with header offset
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: REDUCED ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initStats();
    initPreloader();
    initReveal();
    initProjects();
    initCursor();
    initNetwork();
    initScrollUI();
    initMenu();
    initMagnetic();
    initTilt();
    initSpotlight();
    initContact();
    initSound();
    initMisc();
  });
})();
