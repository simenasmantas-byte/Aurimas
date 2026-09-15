/* =============================================================================
   AURIMAS PETRIKAS – NT  ·  SĄVEIKA
   Be išorinių bibliotekų. Visas turinys imamas iš assets/js/data.js
   ========================================================================== */

(function () {
  'use strict';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var nf = new Intl.NumberFormat('lt-LT');

  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function money(p) {
    return nf.format(p.price) + ' ' + p.priceUnit;
  }

  function num(v) {
    return nf.format(v);
  }

  function addressOf(p) {
    return [p.district, p.street].filter(Boolean).join(', ') + ' · ' + p.municipality;
  }

  /* Lietuviškas skaitvardžio derinimas: 1 objektas / 5 objektai / 11 objektų */
  function countPhrase(n) {
    var d = n % 10, h = n % 100;
    if (d === 1 && h !== 11) return 'Rodomas ' + n + ' objektas';
    if (d === 0 || (h >= 11 && h <= 19)) return 'Rodoma ' + n + ' objektų';
    return 'Rodomi ' + n + ' objektai';
  }

  var arrow =
    '<svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">' +
    '<path d="M8.5 1L12 4.5L8.5 8M12 4.5H0" stroke="currentColor" stroke-width="1.3"/></svg>';

  /* Portreto kelias. Vieno failo versijoje __ASSETS pateikia įdėtą (base64)
     nuotrauką; įprastoje versijoje naudojamas reliatyvus kelias. */
  var PORTRAIT_SRC = 'assets/img/aurimas-petrikas.png';
  if (typeof __ASSETS !== 'undefined' && __ASSETS[PORTRAIT_SRC]) {
    PORTRAIT_SRC = __ASSETS[PORTRAIT_SRC];
  }

  /* ==========================================================================
     1. KONTAKTAI IR NUORODOS IŠ SITE
     ====================================================================== */

  function fillSite() {
    var tel = 'tel:' + SITE.phoneHref;
    var mail = 'mailto:' + SITE.email;

    var cPhone = $('#cPhone');
    if (cPhone) { cPhone.href = tel; cPhone.textContent = SITE.phone; }

    var cEmail = $('#cEmail');
    if (cEmail) { cEmail.href = mail; cEmail.textContent = SITE.email; }

    var invCall = $('#invCall');
    if (invCall) invCall.href = tel;

    var cLi = $('#cLinkedin');
    if (cLi) {
      if (SITE.linkedin) { cLi.href = SITE.linkedin; }
      else { cLi.replaceWith(document.createTextNode('–')); }
    }

    /* Visos „Objektai“ nuorodos (meniu, hero, footeris) – iš vienos vietos.
       HTML jos jau turi teisingą adresą, todėl veikia ir be JavaScript;
       čia tik sinchronizuojama, jei adresas pakeičiamas data.js faile. */
    var listingsUrl = SITE.allListingsUrl || SITE.profileUrl;
    if (listingsUrl) {
      $$('.js-listings').forEach(function (a) { a.href = listingsUrl; });
    }

    /* Mobilios kontaktų juostos mygtukai – taip pat iš data.js */
    $$('.js-tel').forEach(function (a) { a.href = tel; });
    $$('.js-mail').forEach(function (a) { a.href = mail; });

    var y = $('#year');
    if (y) y.textContent = new Date().getFullYear();

    /* --- Footer kontaktai --- */
    var fc = $('#footerContact');
    if (fc) {
      fc.innerHTML =
        '<li><a href="' + tel + '">' + esc(SITE.phone) + '</a></li>' +
        '<li><a href="' + mail + '">' + esc(SITE.email) + '</a></li>' +
        '<li>' + esc(SITE.address) + '</li>' +
        '<li>' + esc(SITE.region) + '</li>';
    }

    /* --- Socialiniai tinklai: rodomi tik tie, kurie turi tikrą URL --- */
    var social = $('#social');
    if (social) {
      var icons = {
        linkedin: '<path d="M4.98 3.5a2 2 0 11-4 0 2 2 0 014 0zM.5 8h4V21h-4V8zm6.5 0h3.8v1.8h.05c.53-1 1.83-2.05 3.76-2.05C18.7 7.75 20 9.9 20 13.1V21h-4v-7c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.67 1.82-2.67 3.7V21H7V8z"/>',
        instagram: '<path d="M11 2c-2.44 0-2.75.01-3.71.05-.96.05-1.61.2-2.18.42-.6.23-1.1.54-1.6 1.04-.5.5-.81 1-1.04 1.6-.22.57-.37 1.22-.42 2.18C2.01 8.25 2 8.56 2 11s.01 2.75.05 3.71c.05.96.2 1.61.42 2.18.23.6.54 1.1 1.04 1.6.5.5 1 .81 1.6 1.04.57.22 1.22.37 2.18.42.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c.96-.05 1.61-.2 2.18-.42.6-.23 1.1-.54 1.6-1.04.5-.5.81-1 1.04-1.6.22-.57.37-1.22.42-2.18.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.05-.96-.2-1.61-.42-2.18a4.4 4.4 0 00-1.04-1.6 4.4 4.4 0 00-1.6-1.04c-.57-.22-1.22-.37-2.18-.42C13.75 2.01 13.44 2 11 2zm0 1.8c2.4 0 2.68.01 3.63.05.88.04 1.35.19 1.67.31.42.16.72.36 1.03.67.31.31.51.61.67 1.03.12.32.27.79.31 1.67.04.95.05 1.23.05 3.63s-.01 2.68-.05 3.63c-.04.88-.19 1.35-.31 1.67-.16.42-.36.72-.67 1.03-.31.31-.61.51-1.03.67-.32.12-.79.27-1.67.31-.95.04-1.23.05-3.63.05s-2.68-.01-3.63-.05c-.88-.04-1.35-.19-1.67-.31a2.6 2.6 0 01-1.03-.67 2.6 2.6 0 01-.67-1.03c-.12-.32-.27-.79-.31-1.67C3.81 13.68 3.8 13.4 3.8 11s.01-2.68.05-3.63c.04-.88.19-1.35.31-1.67.16-.42.36-.72.67-1.03.31-.31.61-.51 1.03-.67.32-.12.79-.27 1.67-.31C8.32 3.81 8.6 3.8 11 3.8zm0 3.06a4.14 4.14 0 100 8.28 4.14 4.14 0 000-8.28zm0 6.83a2.69 2.69 0 110-5.38 2.69 2.69 0 010 5.38zm5.27-7.01a.97.97 0 11-1.93 0 .97.97 0 011.93 0z"/>',
        facebook: '<path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.29-.04-1.28-.13-2.44-.13-2.41 0-4.06 1.47-4.06 4.18V9.9H7.5V13h2.7v8h3.3z"/>'
      };
      var links = [
        { url: SITE.linkedin,  key: 'linkedin',  label: 'LinkedIn' },
        { url: SITE.instagram, key: 'instagram', label: 'Instagram' },
        { url: SITE.facebook,  key: 'facebook',  label: 'Facebook' }
      ].filter(function (l) { return !!l.url; });

      social.innerHTML = links.map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" ' +
               'aria-label="' + esc(l.label) + '">' +
               '<svg width="17" height="17" viewBox="0 0 22 22" fill="currentColor" ' +
               'aria-hidden="true">' + icons[l.key] + '</svg></a>';
      }).join('');
    }

    /* --- Teisinė informacija ------------------------------------------------
       Neužpildyti laukai (PLACEHOLDER arba tušti) VIEŠAI NERODOMI.
       Įrašius tikrą reikšmę data.js faile, eilutė atsiranda automatiškai. */
    var lg = $('#legalGrid');
    if (lg) {
      var rows = [
        ['Veiklos forma',        SITE.legal.entity],
        ['Kodas',                SITE.legal.code],
        ['Tarpininkavimo įmonė', SITE.legal.brokerage],
        ['Veiklos adresas',      SITE.legal.businessAddress]
      ].filter(function (r) {
        return r[1] && !/PLACEHOLDER/i.test(r[1]);
      });

      lg.innerHTML = rows.map(function (r) {
        return '<div><p class="legal__k">' + esc(r[0]) + '</p>' +
               '<p class="legal__v">' + esc(r[1]) + '</p></div>';
      }).join('');

      var lh = $('#legalHead');
      if (lh) lh.hidden = rows.length === 0;
    }

    var ll = $('#legalLinks');
    if (ll) {
      var docs = [
        ['Privatumo politika',        SITE.legal.privacyUrl],
        ['Naudojimosi sąlygos',       SITE.legal.termsUrl],
        ['Prieinamumo pareiškimas',   SITE.legal.accessibilityUrl],
        ['Tarpininkavimo informacija', SITE.legal.disclosureUrl]
      ];
      /* Rodomos tik tos nuorodos, kurioms yra tikras adresas.
         Neparengti dokumentai viešai nerodomi. */
      ll.innerHTML = docs.filter(function (d) { return !!d[1]; })
        .map(function (d) {
          return '<a href="' + esc(d[1]) + '">' + esc(d[0]) + '</a>';
        }).join('');
    }
  }

  /* ==========================================================================
     2. NAVIGACIJA
     ====================================================================== */

  function initNav() {
    var nav = $('#nav');
    var toggle = $('#navToggle');
    var menu = $('#navMenu');
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle('is-stuck', window.scrollY > 12);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Uždaryti meniu' : 'Atidaryti meniu');
      });
      menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* Aktyvus meniu punktas žymimas HTML atributu aria-current="page"
       kiekviename puslapyje – jokios JS logikos tam nereikia. */
  }

  /* ==========================================================================
     3. SUBTILUS PASIRODYMAS
     ====================================================================== */

  function initReveal() {
    var els = $$('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        obs.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ==========================================================================
     4. OBJEKTAI: FILTRAI, RŪŠIAVIMAS, TINKLELIS
     ====================================================================== */

  var state = { status: 'visi', city: '', type: '', min: '', max: '', rooms: '', area: '', sort: 'naujausi' };

  function cardHTML(p) {
    var tagText = p.status === 'nuomojama' ? 'Nuomojama' : 'Parduodama';
    var tagCls  = p.status === 'nuomojama' ? 'tag tag--rent' : 'tag';

    var specs = [];
    if (p.rooms) specs.push('<span>' + p.rooms + ' <em>kamb.</em></span>');
    if (p.area)  specs.push('<span>' + num(p.area) + ' <em>m²</em></span>');
    if (p.lot)   specs.push('<span>' + esc(p.lot) + ' <em>sklypas</em></span>');
    if (p.purpose) specs.push('<span><em>' + esc(p.purpose) + '</em></span>');

    return '' +
      '<article class="card" data-id="' + esc(p.id) + '">' +
        '<div class="card__media">' +
          '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" ' +
               'loading="lazy" decoding="async" width="820" height="547">' +
          '<span class="' + tagCls + '">' + tagText + '</span>' +
          (p.featured ? '<span class="tag tag--featured">Išskirta</span>' : '') +
        '</div>' +
        '<div class="card__body">' +
          '<p class="card__type">' + esc(p.type) + '</p>' +
          '<h3 class="card__title">' + esc(p.title) + '</h3>' +
          '<p class="card__addr">' + esc(addressOf(p)) + '</p>' +
          '<p class="card__price">' + money(p) + '</p>' +
          '<p class="card__ppu">' + esc(p.pricePerUnit || '') + '</p>' +
          '<div class="card__specs">' + specs.join('') + '</div>' +
          '<button class="card__cta" type="button" ' +
            'aria-label="Peržiūrėti objektą: ' + esc(p.title) + '">' +
            'Peržiūrėti ' + arrow + '</button>' +
        '</div>' +
      '</article>';
  }

  function apply() {
    var list = PROPERTIES.filter(function (p) {
      if (state.status !== 'visi' && p.status !== state.status) return false;
      if (state.city && p.city !== state.city) return false;
      if (state.type && p.type !== state.type) return false;
      if (state.min !== '' && p.price < Number(state.min)) return false;
      if (state.max !== '' && p.price > Number(state.max)) return false;
      if (state.rooms !== '' && (!p.rooms || p.rooms < Number(state.rooms))) return false;
      if (state.area !== '' && (!p.area || p.area < Number(state.area))) return false;
      return true;
    });

    list.sort(function (a, b) {
      if (state.sort === 'pigiausi')   return a.price - b.price;
      if (state.sort === 'brangiausi') return b.price - a.price;
      return a.order - b.order;
    });

    var grid = $('#grid');
    grid.innerHTML = list.length
      ? list.map(cardHTML).join('')
      : '<p class="empty">Pagal pasirinktus kriterijus objektų nerasta.<br>' +
        'Pabandykite išvalyti filtrus arba parašykite, ko ieškote – dalis ' +
        'objektų nėra viešinami.</p>';

    $('#count').textContent =
      countPhrase(list.length) + ' iš ' + PROPERTIES.length;
  }

  function initProps() {
    if (typeof PROPERTIES === 'undefined' || !$('#grid')) return;

    /* Filtrų reikšmės – generuojamos iš duomenų */
    function fill(sel, values) {
      var el = $(sel);
      values.forEach(function (v) {
        var o = document.createElement('option');
        o.value = v; o.textContent = v;
        el.appendChild(o);
      });
    }
    var uniq = function (arr) {
      return arr.filter(function (v, i, a) { return v && a.indexOf(v) === i; }).sort();
    };
    fill('#f-city', uniq(PROPERTIES.map(function (p) { return p.city; })));
    fill('#f-type', uniq(PROPERTIES.map(function (p) { return p.type; })));

    /* Segmentinis jungiklis */
    $$('.seg button').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('.seg button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        state.status = b.dataset.status;
        apply();
      });
    });

    var map = {
      '#f-city': 'city', '#f-type': 'type', '#f-min': 'min',
      '#f-max': 'max', '#f-rooms': 'rooms', '#f-area': 'area', '#f-sort': 'sort'
    };
    Object.keys(map).forEach(function (sel) {
      $(sel).addEventListener('input', function (e) {
        state[map[sel]] = e.target.value;
        apply();
      });
    });

    $('#filters').addEventListener('submit', function (e) {
      e.preventDefault();
      apply();
      $('#grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    $('#reset').addEventListener('click', function () {
      setTimeout(function () {
        state = { status: 'visi', city: '', type: '', min: '', max: '', rooms: '', area: '', sort: 'naujausi' };
        $$('.seg button').forEach(function (x, i) {
          x.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        });
        apply();
      }, 0);
    });

    var note = $('#propsNote');
    if (note) {
      note.innerHTML =
        'Rodomi objektai, kuriuos šiuo metu atstovauja Aurimas Petrikas. ' +
        'Duomenys ir nuotraukos – iš aktyvių skelbimų (' + esc(SITE.listingsSnapshot) +
        '). Kainos ir prieinamumas gali keistis; pilnas ir naujausias sąrašas – ' +
        'paspaudus mygtuką šalia.';
    }

    apply();

    $('#grid').addEventListener('click', function (e) {
      var card = e.target.closest('.card');
      if (card) openModal(card.dataset.id);
    });
  }

  /* ==========================================================================
     5. OBJEKTO MODALAS
     ====================================================================== */

  var lastFocus = null;

  function modalHTML(p) {
    var specs = [];
    if (p.area)  specs.push(['Plotas', num(p.area) + ' m²']);
    if (p.rooms) specs.push(['Kambariai', String(p.rooms)]);
    if (p.lot)   specs.push(['Sklypas', p.lot]);
    if (p.purpose) specs.push(['Paskirtis', p.purpose]);
    if (p.pricePerUnit) specs.push(['Kaina už vnt.', p.pricePerUnit]);
    specs.push(['Objekto nr.', p.listingId]);

    var thumbs = p.images.map(function (src, i) {
      return '<button type="button" data-i="' + i + '" aria-current="' + (i === 0) + '" ' +
             'aria-label="Nuotrauka ' + (i + 1) + '">' +
             '<img src="' + esc(src) + '" alt="" loading="lazy" decoding="async"></button>';
    }).join('');

    return '' +
      '<div class="gal">' +
        '<div class="gal__main"><img id="galMain" src="' + esc(p.images[0]) + '" ' +
          'alt="' + esc(p.title) + '"></div>' +
        (p.images.length > 1 ? '<div class="gal__thumbs" id="galThumbs">' + thumbs + '</div>' : '') +
      '</div>' +

      '<div class="modal__body">' +
        '<div class="modal__head">' +
          '<div>' +
            '<p class="card__type">' + esc(p.type) + ' · ' +
              (p.status === 'nuomojama' ? 'Nuomojama' : 'Parduodama') + '</p>' +
            '<h3 class="h-sub" id="mTitle">' + esc(p.title) + '</h3>' +
            '<p class="card__addr" style="margin:6px 0 0">' + esc(addressOf(p)) + '</p>' +
          '</div>' +
          '<div style="text-align:right">' +
            '<p class="modal__price">' + money(p) + '</p>' +
            '<p class="modal__ppu">' + esc(p.pricePerUnit || '') + '</p>' +
          '</div>' +
        '</div>' +

        '<div class="modal__cols">' +
          '<div>' +
            '<dl class="specs">' + specs.map(function (s) {
              return '<div><dt>' + esc(s[0]) + '</dt><dd>' + esc(s[1]) + '</dd></div>';
            }).join('') + '</dl>' +

            '<h4>Aprašymas</h4>' +
            '<p class="body-text" style="margin-bottom:26px">' + esc(p.description) + '</p>' +

            '<h4>Ypatybės</h4>' +
            '<ul class="feat">' + p.features.map(function (f) {
              return '<li>' + esc(f) + '</li>';
            }).join('') + '</ul>' +

            (p.imageNote ? '<p class="note">' + esc(p.imageNote) + '</p>' : '') +
          '</div>' +

          '<aside class="modal__aside">' +
            '<div class="modal__agent">' +
              '<div class="modal__agent-top">' +
                '<img src="' + PORTRAIT_SRC + '" alt="" width="56" height="56">' +
                '<div>' +
                  '<p class="modal__agent-name">' + esc(SITE.name) + '</p>' +
                  '<p class="modal__agent-role">' + esc(SITE.role) + '</p>' +
                '</div>' +
              '</div>' +
              '<button class="btn" type="button" data-inquire="' + esc(p.id) + '">' +
                'Domina šis objektas</button>' +
              '<a class="btn btn--ghost" href="tel:' + esc(SITE.phoneHref) + '">' +
                esc(SITE.phone) + '</a>' +
              '<a class="btn btn--ghost" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
                'Pilnas skelbimas</a>' +
            '</div>' +
            '<div class="modal__map">Žemėlapis<br>' + esc(addressOf(p)) + '</div>' +
          '</aside>' +
        '</div>' +
      '</div>';
  }

  function openModal(id) {
    var p = PROPERTIES.filter(function (x) { return x.id === id; })[0];
    if (!p) return;

    var modal = $('#modal');
    lastFocus = document.activeElement;
    $('#modalContent').innerHTML = modalHTML(p);
    modal.hidden = false;
    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
    $('.modal__close').focus();

    var thumbs = $('#galThumbs');
    if (thumbs) {
      thumbs.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        $('#galMain').src = p.images[Number(b.dataset.i)];
        $$('button', thumbs).forEach(function (x) {
          x.setAttribute('aria-current', String(x === b));
        });
      });
    }

    var inquire = $('[data-inquire]');
    if (inquire) {
      inquire.addEventListener('click', function () {
        closeModal();
        var topic = p.status === 'nuomojama' ? 'Komercinis NT'
                  : p.category === 'sklypas' ? 'Sklypas'
                  : 'Pirkti';
        var sel = $('#c-topic');
        if (sel) {
          Array.prototype.forEach.call(sel.options, function (o) {
            if (o.value === topic || o.textContent === topic) sel.value = o.value;
          });
        }
        var msg = $('#c-msg');
        if (msg) {
          msg.value = 'Domina objektas: ' + p.title + ' (nr. ' + p.listingId + '), ' +
                      addressOf(p) + ', ' + money(p) + '.\n\n';
        }
        var contact = document.getElementById('kontaktai');
        if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(function () {
          var n = $('#c-name');
          if (n) n.focus({ preventScroll: true });
        }, 550);
      });
    }
  }

  function closeModal() {
    var modal = $('#modal');
    if (!modal || modal.hidden) return;
    modal.classList.remove('is-open');
    modal.hidden = true;
    document.body.classList.remove('no-scroll');
    $('#modalContent').innerHTML = '';
    if (lastFocus) lastFocus.focus();
  }

  function initModal() {
    var modal = $('#modal');
    if (!modal) return;
    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ==========================================================================
     5b. KARJEROS KELIAS IR IŠSILAVINIMAS
     ====================================================================== */

  function initProfile() {
    if (typeof PROFILE === 'undefined') return;

    var cv = $('#cv');
    if (cv && PROFILE.career) {
      cv.innerHTML = PROFILE.career.map(function (j) {
        return '' +
          '<div class="cv__item reveal">' +
            '<p class="cv__years">' +
              (j.current ? '<span class="cv__now" aria-hidden="true"></span>' : '') +
              '<span>' + esc(j.from) + ' – ' + esc(j.to) + '</span>' +
            '</p>' +
            '<div>' +
              '<h4 class="cv__role">' + esc(j.role) + '</h4>' +
              '<p class="cv__org">' + esc(j.org) + '</p>' +
            '</div>' +
            '<ul class="cv__points">' + j.points.map(function (p) {
              return '<li>' + esc(p) + '</li>';
            }).join('') + '</ul>' +
          '</div>';
      }).join('');
    }

    var edu = $('#edu');
    if (edu && PROFILE.education) {
      edu.innerHTML = PROFILE.education.map(function (e) {
        return '' +
          '<div class="edu__item reveal">' +
            '<p class="cv__years"><span>' + esc(e.years) + '</span></p>' +
            '<div>' +
              '<p class="edu__school">' + esc(e.school) + '</p>' +
              (e.degree ? '<p class="edu__meta">' + esc(e.degree) + '</p>' : '') +
              (e.place ? '<p class="edu__place">' + esc(e.place) + '</p>' : '') +
            '</div>' +
          '</div>';
      }).join('');
    }
  }

  /* ==========================================================================
     6. ATSILIEPIMAI
     ====================================================================== */

  function initTestimonials() {
    var box = $('#tm');
    if (!box || typeof TESTIMONIALS === 'undefined' || !TESTIMONIALS.length) return;
    var t = TESTIMONIALS[0];

    box.innerHTML =
      '<p class="eyebrow" style="justify-content:center;margin-bottom:26px">Atsiliepimas</p>' +
      '<blockquote class="tm__quote">&bdquo;' + esc(t.translation) + '&ldquo;</blockquote>' +
      (t.quote ? '<p class="tm__orig">Originalas: &bdquo;' + esc(t.quote) + '&ldquo;</p>' : '') +
      '<p class="tm__by"><span>' + esc(t.author) + '</span>' +
      '<span class="tm__meta">' + esc(t.date) + ' · ' + esc(t.source) + '</span></p>';
  }

  /* ==========================================================================
     7. KONTAKTŲ FORMA
     ====================================================================== */

  function initForm() {
    var form = $('#contactForm');
    if (!form) return;
    var status = $('#formStatus');

    function say(msg) {
      status.hidden = false;
      status.textContent = msg;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = $('#c-name').value.trim();
      var email = $('#c-email').value.trim();
      var phone = $('#c-phone').value.trim();
      var topic = $('#c-topic').value;
      var msg = $('#c-msg').value.trim();

      if (!name || !email) { say('Užpildykite vardą ir el. pašto adresą.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { say('Patikrinkite el. pašto adresą.'); return; }
      if (!$('#c-consent').checked) { say('Pažymėkite sutikimą dėl duomenų naudojimo.'); return; }

      var body =
        'Vardas: ' + name + '\n' +
        'El. paštas: ' + email + '\n' +
        'Telefonas: ' + (phone || '–') + '\n' +
        'Tema: ' + topic + '\n\n' +
        'Žinutė:\n' + (msg || '–');

      if (SITE.formMode === 'endpoint' && SITE.formEndpoint) {
        say('Siunčiama…');
        fetch(SITE.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ vardas: name, elpastas: email, telefonas: phone, tema: topic, zinute: msg })
        }).then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          form.reset();
          say('Ačiū – užklausa išsiųsta. Susisieksiu artimiausiu metu.');
        }).catch(function () {
          say('Nepavyko išsiųsti. Parašykite tiesiogiai: ' + SITE.email);
        });
        return;
      }

      /* mailto – veikia be serverio */
      window.location.href = 'mailto:' + SITE.email +
        '?subject=' + encodeURIComponent('Užklausa iš svetainės – ' + topic) +
        '&body=' + encodeURIComponent(body);
      say('Atidaroma jūsų el. pašto programa. Jei ji neatsidarė, rašykite: ' + SITE.email);
    });
  }

  /* ==========================================================================
     8. START
     ====================================================================== */

  function init() {
    fillSite();
    initNav();
    initProps();
    initModal();
    initProfile();
    initTestimonials();
    initForm();
    initReveal();   /* paskutinis – stebi ir ką tik sugeneruotus elementus */
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
