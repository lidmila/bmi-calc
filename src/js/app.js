/* ============================
   Ideální BMI – UI app (Tailwind redesign)
   ============================ */
(function () {
  'use strict';

  // ---- Theme toggle ----
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var isDark = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
    });
  }

  // ---- Mobile menu ----
  var menuBtn = document.getElementById('mobile-menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      var open = menu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  // ---- Tab pills (BMI calculator) ----
  var tabs = document.querySelectorAll('[data-tab-pill]');
  var panels = document.querySelectorAll('[data-tab-panel]');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      var key = t.getAttribute('data-tab-pill');
      tabs.forEach(function (x) { x.setAttribute('aria-selected', 'false'); });
      t.setAttribute('aria-selected', 'true');
      panels.forEach(function (p) {
        p.classList.toggle('hidden', p.getAttribute('data-tab-panel') !== key);
      });
      hideResult();
    });
  });

  // ---- Result rendering ----
  var resultBox = document.getElementById('calc-result');
  var resultValue = document.getElementById('result-value');
  var resultCategory = document.getElementById('result-category');
  var resultDetails = document.getElementById('result-details');
  var gaugeNeedle = document.getElementById('gauge-needle');
  var gaugeValueText = document.getElementById('gauge-value-text');
  var goalBox = document.getElementById('goal-box');
  var shareBtn = document.getElementById('share-result');

  function hideResult() {
    if (resultBox) resultBox.classList.add('hidden');
  }

  // SVG semicircle gauge: BMI 12 -> -90deg, BMI 45 -> 90deg
  function setGaugeAngle(bmi) {
    if (!gaugeNeedle) return;
    var pos = (bmi - 12) / (45 - 12); // 0..1
    pos = Math.max(0, Math.min(1, pos));
    var angle = -90 + pos * 180;
    gaugeNeedle.style.transform = 'rotate(' + angle.toFixed(1) + 'deg)';
  }

  var categoryStyles = {
    'severe-underweight': 'bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-100',
    'underweight':        'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
    'mild-underweight':   'bg-cyan-50 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200',
    'normal':             'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100',
    'overweight':         'bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100',
    'obese1':             'bg-orange-100 text-orange-900 dark:bg-orange-900/40 dark:text-orange-100',
    'obese2':             'bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-100',
    'obese3':             'bg-red-200 text-red-950 dark:bg-red-950/60 dark:text-red-100',
    'child-underweight':  'bg-blue-50 text-blue-800',
    'child-normal':       'bg-emerald-100 text-emerald-900',
    'child-overweight':   'bg-amber-100 text-amber-900',
    'child-obese':        'bg-red-100 text-red-900'
  };

  function renderResult(opts) {
    if (!resultBox) return;
    resultBox.classList.remove('hidden');
    if (resultValue) resultValue.textContent = opts.bmi.toFixed(1).replace('.', ',');
    if (gaugeValueText) gaugeValueText.textContent = opts.bmi.toFixed(1).replace('.', ',');
    setGaugeAngle(opts.bmi);

    if (resultCategory) {
      resultCategory.textContent = opts.categoryLabel;
      resultCategory.className = 'badge ' + (categoryStyles[opts.categoryKey] || 'bg-slate-100 text-slate-800');
    }

    if (resultDetails) resultDetails.innerHTML = opts.detailsHtml || '';
    if (goalBox) goalBox.innerHTML = opts.goalHtml || '';
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ---- Form: Basic ----
  var basic = document.getElementById('form-basic');
  if (basic) {
    function recalcBasic() {
      var h = parseFloat(document.getElementById('basic-height').value);
      var w = parseFloat(document.getElementById('basic-weight').value);
      if (!h || !w || h < 100 || h > 250 || w < 20 || w > 300) return;
      var bmi = BMICalculator.calculateBMI(w, h);
      var cat = BMICalculator.getCategory(bmi);
      var ideal = BMICalculator.getIdealWeightRange(h);
      var diff = w - ((ideal.min + ideal.max) / 2);
      var goal = '';
      if (cat.key !== 'normal') {
        var direction = diff > 0 ? 'ubrat' : 'přibrat';
        var weeks = Math.ceil(Math.abs(diff) / 0.5);
        goal = '<div class="rounded-2xl bg-brand-50 border border-brand-100 p-5 dark:bg-brand-900/20 dark:border-brand-800">' +
          '<p class="text-sm font-semibold text-brand-800 dark:text-brand-200 mb-1">Cesta do zdravé zóny</p>' +
          '<p class="text-slate-700 dark:text-slate-200">Pro střed normální váhy by stačilo ' + direction + ' přibližně <strong>' + Math.abs(diff).toFixed(1).replace('.', ',') + ' kg</strong>. Zdravým tempem 0,5 kg týdně to zvládnete za <strong>' + weeks + ' týdnů</strong>.</p>' +
          '<p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Ideální rozsah pro vaši výšku: ' + ideal.min.toFixed(1) + '–' + ideal.max.toFixed(1) + ' kg.</p>' +
        '</div>';
      } else {
        goal = '<div class="rounded-2xl bg-emerald-50 border border-emerald-100 p-5 dark:bg-emerald-900/20 dark:border-emerald-800">' +
          '<p class="text-sm font-semibold text-emerald-800 dark:text-emerald-200">Skvělé – jste v ideálním rozsahu</p>' +
          '<p class="text-slate-700 dark:text-slate-200 mt-1">Vaše hmotnost odpovídá zdravému BMI. Udržujte aktivitu a pestrou stravu.</p>' +
        '</div>';
      }

      renderResult({
        bmi: bmi,
        categoryKey: cat.key,
        categoryLabel: cat.label,
        detailsHtml:
          '<p class="text-slate-700 dark:text-slate-300">Vaše hmotnost je ' + w.toFixed(1).replace('.', ',') + ' kg při výšce ' + h + ' cm. ' +
          'Doporučená hmotnost pro vaši výšku je <strong>' + ideal.min.toFixed(1) + '–' + ideal.max.toFixed(1) + ' kg</strong>.</p>',
        goalHtml: goal
      });
    }
    basic.addEventListener('submit', function (e) { e.preventDefault(); recalcBasic(); });
    ['basic-height', 'basic-weight'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', debounce(recalcBasic, 300));
    });
  }

  // ---- Form: Advanced ----
  var advanced = document.getElementById('form-advanced');
  if (advanced) {
    advanced.addEventListener('submit', function (e) {
      e.preventDefault();
      var h = parseFloat(document.getElementById('adv-height').value);
      var w = parseFloat(document.getElementById('adv-weight').value);
      var g = document.getElementById('adv-gender').value;
      var a = parseInt(document.getElementById('adv-age').value, 10);
      var waist = parseFloat(document.getElementById('adv-waist').value);
      if (!h || !w || !g || !a) return;
      var bmi = BMICalculator.calculateBMI(w, h);
      var cat = BMICalculator.getCategory(bmi);
      var ageRange = BMICalculator.getAgeRange(a);
      var ideal = BMICalculator.getIdealWeightRange(h);

      var details = '<p class="text-slate-700 dark:text-slate-300">' + BMICalculator.getGenderContext(bmi, g) + '</p>';
      if (ageRange) {
        details += '<p class="text-slate-700 dark:text-slate-300 mt-2">Pro váš věk (' + a + ' let) je optimální BMI <strong>' + ageRange.low + '–' + ageRange.high + '</strong>.</p>';
      }
      if (!isNaN(waist) && waist > 0) {
        var risk = BMICalculator.evaluateWaist(waist, g);
        var riskColor = risk.level === 'low' ? 'emerald' : risk.level === 'elevated' ? 'amber' : 'red';
        details += '<div class="mt-3 rounded-xl border border-' + riskColor + '-200 bg-' + riskColor + '-50 p-3 text-sm text-' + riskColor + '-900 dark:bg-' + riskColor + '-900/20 dark:text-' + riskColor + '-200">' +
          '<strong>' + risk.label + ':</strong> ' + risk.description + '</div>';
      }
      details += '<p class="text-slate-500 dark:text-slate-400 text-sm mt-3">Ideální hmotnost pro vaši výšku: ' + ideal.min.toFixed(1) + '–' + ideal.max.toFixed(1) + ' kg.</p>';

      renderResult({
        bmi: bmi,
        categoryKey: cat.key,
        categoryLabel: cat.label,
        detailsHtml: details
      });
    });
  }

  // ---- Form: Children ----
  var children = document.getElementById('form-children');
  if (children) {
    children.addEventListener('submit', function (e) {
      e.preventDefault();
      var g = document.getElementById('child-gender').value;
      var y = parseInt(document.getElementById('child-age-years').value, 10);
      var m = parseInt(document.getElementById('child-age-months').value, 10) || 0;
      var h = parseFloat(document.getElementById('child-height').value);
      var w = parseFloat(document.getElementById('child-weight').value);
      if (!g || !y || !h || !w) return;
      var res = BMICalculator.calculateChildBMI(w, h, y, m, g);
      if (!res) return;
      var details = '<p class="text-slate-700 dark:text-slate-300">Percentil: <strong>' + res.percentile + '.</strong> z 100. To znamená, že ' + res.percentile + ' % dětí stejného věku a pohlaví má nižší BMI.</p>' +
        '<p class="text-slate-500 dark:text-slate-400 text-sm mt-2">Mediánové BMI pro tento věk: ' + res.medianBMI + '. Doporučujeme konzultaci s pediatrem.</p>';
      renderResult({
        bmi: res.bmi,
        categoryKey: res.category.key,
        categoryLabel: res.category.label,
        detailsHtml: details
      });
    });
  }

  // ---- Share ----
  if (shareBtn) {
    shareBtn.addEventListener('click', async function () {
      var bmi = resultValue ? resultValue.textContent : '';
      var cat = resultCategory ? resultCategory.textContent : '';
      var text = 'Moje BMI je ' + bmi + ' (' + cat + '). Spočítej si i ty na idealnibmi.com';
      if (navigator.share) {
        try { await navigator.share({ title: 'Moje BMI', text: text, url: 'https://idealnibmi.com/' }); } catch (e) {}
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text + ' https://idealnibmi.com/');
        shareBtn.textContent = 'Zkopírováno ✓';
        setTimeout(function () { shareBtn.innerHTML = '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" stroke-linecap="round" stroke-linejoin="round"/></svg> Sdílet'; }, 2000);
      }
    });
  }

  // ---- Utility: debounce ----
  function debounce(fn, ms) {
    var t;
    return function () {
      var ctx = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, ms);
    };
  }

  // ---- Blog filters ----
  var filterBtns = document.querySelectorAll('[data-blog-filter]');
  filterBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-blog-filter');
      filterBtns.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      document.querySelectorAll('[data-blog-card]').forEach(function (card) {
        var match = f === 'all' || card.getAttribute('data-blog-card') === f;
        card.classList.toggle('hidden', !match);
      });
    });
  });

})();
