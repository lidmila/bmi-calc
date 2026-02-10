/* ============================
   Cookie Consent – Ideální BMI
   ============================ */

(function () {
    'use strict';

    var STORAGE_KEY = 'cookie_consent';

    function getConsent() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function saveConsent(analytics, ads) {
        var data = {
            analytics: !!analytics,
            ads: !!ads,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    /* ---------- Apply consent to gtag + load AdSense ---------- */

    function applyConsent(analytics, ads) {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': analytics ? 'granted' : 'denied',
                'ad_storage': ads ? 'granted' : 'denied'
            });
        }

        if (ads) {
            loadAdSense();
        }
    }

    var adSenseLoaded = false;

    function loadAdSense() {
        if (adSenseLoaded) return;
        adSenseLoaded = true;

        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1770515539594674';
        s.crossOrigin = 'anonymous';
        s.onload = function () {
            var ads = document.querySelectorAll('ins.adsbygoogle');
            for (var i = 0; i < ads.length; i++) {
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {}
            }
        };
        document.head.appendChild(s);
    }

    /* ---------- UI helpers ---------- */

    function showBanner() {
        var banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.add('visible');
    }

    function hideBanner() {
        var banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.remove('visible');
    }

    function showSettings() {
        var panel = document.getElementById('cookie-settings');
        if (panel) panel.classList.add('visible');
    }

    function hideSettings() {
        var panel = document.getElementById('cookie-settings');
        if (panel) panel.classList.remove('visible');
    }

    /* ---------- Button handlers ---------- */

    function acceptAll() {
        saveConsent(true, true);
        applyConsent(true, true);
        hideBanner();
        hideSettings();
    }

    function rejectOptional() {
        saveConsent(false, false);
        applyConsent(false, false);
        hideBanner();
        hideSettings();
    }

    function saveSettings() {
        var analyticsToggle = document.getElementById('cookie-analytics');
        var adsToggle = document.getElementById('cookie-ads');
        var analytics = analyticsToggle ? analyticsToggle.checked : false;
        var ads = adsToggle ? adsToggle.checked : false;

        saveConsent(analytics, ads);
        applyConsent(analytics, ads);
        hideBanner();
        hideSettings();
    }

    /* ---------- Init ---------- */

    function init() {
        var consent = getConsent();

        if (consent) {
            applyConsent(consent.analytics, consent.ads);
            return;
        }

        showBanner();
    }

    /* ---------- Bind events on DOMContentLoaded ---------- */

    function bindEvents() {
        var btnAccept = document.getElementById('cookie-accept-all');
        var btnReject = document.getElementById('cookie-reject');
        var btnOpenSettings = document.getElementById('cookie-open-settings');
        var btnSaveSettings = document.getElementById('cookie-save-settings');
        var btnCloseSettings = document.getElementById('cookie-close-settings');

        if (btnAccept) btnAccept.addEventListener('click', acceptAll);
        if (btnReject) btnReject.addEventListener('click', rejectOptional);
        if (btnOpenSettings) btnOpenSettings.addEventListener('click', function () {
            showSettings();
        });
        if (btnSaveSettings) btnSaveSettings.addEventListener('click', saveSettings);
        if (btnCloseSettings) btnCloseSettings.addEventListener('click', function () {
            hideSettings();
        });

        var btnSettingsAccept = document.getElementById('cookie-settings-accept-all');
        var btnSettingsReject = document.getElementById('cookie-settings-reject');
        if (btnSettingsAccept) btnSettingsAccept.addEventListener('click', acceptAll);
        if (btnSettingsReject) btnSettingsReject.addEventListener('click', rejectOptional);

        var btnReopen = document.getElementById('cookie-reopen');
        if (btnReopen) btnReopen.addEventListener('click', function (e) {
            e.preventDefault();
            var consent = getConsent();
            if (consent) {
                var analyticsToggle = document.getElementById('cookie-analytics');
                var adsToggle = document.getElementById('cookie-ads');
                if (analyticsToggle) analyticsToggle.checked = consent.analytics;
                if (adsToggle) adsToggle.checked = consent.ads;
            }
            showSettings();
        });

        init();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindEvents);
    } else {
        bindEvents();
    }
})();
