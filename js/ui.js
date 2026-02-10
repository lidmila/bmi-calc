/* ============================
   BMI Calculator – UI Interactions
   ============================ */

(function () {
    'use strict';

    // ---- DOM Elements ----
    var header = document.getElementById('header');
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var tabs = document.querySelectorAll('.calc-tab');
    var panels = document.querySelectorAll('.calc-panel');
    var resultSection = document.getElementById('calc-result');
    var resultValue = document.getElementById('result-value');
    var resultCategory = document.getElementById('result-category');
    var resultDetails = document.getElementById('result-details');
    var gaugeMarker = document.getElementById('gauge-marker');
    var gaugeMarkerLabel = document.getElementById('gauge-marker-label');
    var faqItems = document.querySelectorAll('.faq-question');

    // ---- Mobile Menu ----
    hamburger.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu on nav link click
    nav.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-link')) {
            nav.classList.remove('open');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // ---- Tab Switching ----
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var target = this.getAttribute('data-tab');

            // Update tabs
            tabs.forEach(function (t) {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // Update panels
            panels.forEach(function (p) { p.classList.remove('active'); });
            document.getElementById('panel-' + target).classList.add('active');

            // Hide result when switching tabs
            hideResult();
        });
    });

    // ---- Form Submissions ----

    // Basic form
    document.getElementById('form-basic').addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors(this);

        var height = getNumVal('basic-height');
        var weight = getNumVal('basic-weight');

        var valid = true;
        if (!height || height < 100 || height > 250) {
            showError('error-basic-height', 'Zadejte výšku mezi 100 a 250 cm.');
            valid = false;
        }
        if (!weight || weight < 20 || weight > 300) {
            showError('error-basic-weight', 'Zadejte hmotnost mezi 20 a 300 kg.');
            valid = false;
        }

        if (!valid) return;

        var bmi = BMICalculator.calculateBMI(weight, height);
        var category = BMICalculator.getCategory(bmi);
        showResult(bmi, category, []);
    });

    // Advanced form
    document.getElementById('form-advanced').addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors(this);

        var height = getNumVal('adv-height');
        var weight = getNumVal('adv-weight');
        var gender = document.getElementById('adv-gender').value;
        var age = getNumVal('adv-age');
        var waist = getNumVal('adv-waist');

        var valid = true;
        if (!height || height < 100 || height > 250) {
            showError('error-adv-height', 'Zadejte výšku mezi 100 a 250 cm.');
            valid = false;
        }
        if (!weight || weight < 20 || weight > 300) {
            showError('error-adv-weight', 'Zadejte hmotnost mezi 20 a 300 kg.');
            valid = false;
        }
        if (!gender) {
            showError('error-adv-gender', 'Vyberte pohlaví.');
            valid = false;
        }
        if (!age || age < 18 || age > 120) {
            showError('error-adv-age', 'Zadejte věk mezi 18 a 120 let.');
            valid = false;
        }
        if (waist && (waist < 40 || waist > 200)) {
            showError('error-adv-waist', 'Zadejte obvod pasu mezi 40 a 200 cm.');
            valid = false;
        }

        if (!valid) return;

        var bmi = BMICalculator.calculateBMI(weight, height);
        var category = BMICalculator.getCategory(bmi);

        // Build additional details
        var details = [];

        // Age interpretation
        var ageText = BMICalculator.getAgeInterpretation(bmi, age);
        if (ageText) {
            details.push({ text: ageText, type: 'info' });
        }

        // Gender context
        var genderText = BMICalculator.getGenderContext(bmi, gender);
        if (genderText) {
            details.push({ text: genderText, type: 'info' });
        }

        // Waist evaluation
        if (waist && gender) {
            var waistResult = BMICalculator.evaluateWaist(waist, gender);
            var waistType = waistResult.level === 'high' ? 'danger' : waistResult.level === 'elevated' ? 'warning' : 'info';
            details.push({
                text: '<strong>Obvod pasu (' + waist + ' cm):</strong> ' + waistResult.description,
                type: waistType
            });
        }

        // Senior note
        if (age >= 65) {
            details.push({
                text: 'U osob nad 65 let je za optimální považováno mírně vyšší BMI (23–30), které je spojeno s nižší úmrtností.',
                type: 'info'
            });
        }

        showResult(bmi, category, details);
    });

    // Children form
    document.getElementById('form-children').addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors(this);

        var gender = document.getElementById('child-gender').value;
        var ageYears = getNumVal('child-age-years');
        var ageMonths = getNumVal('child-age-months') || 0;
        var height = getNumVal('child-height');
        var weight = getNumVal('child-weight');

        var valid = true;
        if (!gender) {
            showError('error-child-gender', 'Vyberte pohlaví.');
            valid = false;
        }
        if (ageYears === null || ageYears < 2 || ageYears > 19) {
            showError('error-child-age-years', 'Zadejte věk mezi 2 a 19 let.');
            valid = false;
        }
        if (ageMonths < 0 || ageMonths > 11) {
            showError('error-child-age-months', 'Zadejte měsíce mezi 0 a 11.');
            valid = false;
        }
        if (!height || height < 50 || height > 200) {
            showError('error-child-height', 'Zadejte výšku mezi 50 a 200 cm.');
            valid = false;
        }
        if (!weight || weight < 5 || weight > 150) {
            showError('error-child-weight', 'Zadejte hmotnost mezi 5 a 150 kg.');
            valid = false;
        }

        if (!valid) return;

        var result = BMICalculator.calculateChildBMI(weight, height, gender, ageYears, ageMonths);
        if (!result) {
            showError('error-child-age-years', 'Nepodařilo se vypočítat BMI. Zkontrolujte zadané údaje.');
            return;
        }

        var details = [
            {
                text: '<strong>Percentil:</strong> ' + result.percentile + '. percentil',
                type: 'info'
            },
            {
                text: '<strong>Z-skóre:</strong> ' + result.zScore,
                type: 'info'
            },
            {
                text: result.percentile + '. percentil znamená, že ' + result.percentile + ' % dětí stejného věku a pohlaví má nižší BMI.',
                type: 'info'
            },
            {
                text: 'Výsledky BMI u dětí jsou pouze orientační. Doporučujeme je konzultovat s pediatrem.',
                type: 'warning'
            }
        ];

        showChildResult(result.bmi, result.category, details);
    });

    // ---- Result Display ----

    function showResult(bmi, category, details) {
        resultValue.textContent = bmi.toFixed(1).replace('.', ',');
        resultCategory.textContent = category.label;
        resultCategory.className = 'result-category cat-' + category.key;

        // Gauge
        var pos = BMICalculator.getGaugePosition(bmi);
        gaugeMarker.style.left = pos + '%';
        gaugeMarkerLabel.textContent = bmi.toFixed(1).replace('.', ',');

        // Details
        renderDetails(details);

        // Show
        resultSection.hidden = false;
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showChildResult(bmi, category, details) {
        resultValue.textContent = bmi.toFixed(1).replace('.', ',');
        resultCategory.textContent = category.label;
        resultCategory.className = 'result-category cat-' + category.key;

        // Gauge
        var pos = BMICalculator.getGaugePosition(bmi);
        gaugeMarker.style.left = pos + '%';
        gaugeMarkerLabel.textContent = bmi.toFixed(1).replace('.', ',');

        // Details
        renderDetails(details);

        // Show
        resultSection.hidden = false;
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function renderDetails(details) {
        if (!details || details.length === 0) {
            resultDetails.innerHTML = '';
            return;
        }
        var html = '';
        for (var i = 0; i < details.length; i++) {
            var cls = 'detail-item';
            if (details[i].type === 'warning') cls += ' warning';
            if (details[i].type === 'danger') cls += ' danger';
            html += '<div class="' + cls + '">' + details[i].text + '</div>';
        }
        resultDetails.innerHTML = html;
    }

    function hideResult() {
        resultSection.hidden = true;
    }

    // ---- Validation Helpers ----

    function getNumVal(id) {
        var el = document.getElementById(id);
        if (!el || el.value === '') return null;
        var val = parseFloat(el.value);
        return isNaN(val) ? null : val;
    }

    function showError(id, msg) {
        var el = document.getElementById(id);
        if (el) el.textContent = msg;
        // Also mark input as invalid
        var input = el ? el.previousElementSibling : null;
        if (input && (input.tagName === 'INPUT' || input.tagName === 'SELECT')) {
            input.classList.add('invalid');
        }
    }

    function clearErrors(form) {
        var errors = form.querySelectorAll('.form-error');
        errors.forEach(function (e) { e.textContent = ''; });
        var inputs = form.querySelectorAll('.invalid');
        inputs.forEach(function (i) { i.classList.remove('invalid'); });
    }

    // ---- FAQ Accordion ----
    faqItems.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var expanded = this.getAttribute('aria-expanded') === 'true';
            var answer = this.nextElementSibling;

            // Close all others
            faqItems.forEach(function (other) {
                if (other !== btn) {
                    other.setAttribute('aria-expanded', 'false');
                    other.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current
            if (expanded) {
                this.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = null;
            } else {
                this.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ---- Smooth Scroll for Nav Links ----
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

})();
