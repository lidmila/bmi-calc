/* ============================
   BMI Calculator – Pure Logic
   ============================ */

var BMICalculator = (function () {
    'use strict';

    // WHO BMI categories (8 levels)
    var categories = [
        { key: 'severe-underweight', label: 'Těžká podváha',        min: 0,    max: 16.0  },
        { key: 'underweight',        label: 'Podváha',              min: 16.0, max: 17.0  },
        { key: 'mild-underweight',   label: 'Mírná podváha',        min: 17.0, max: 18.5  },
        { key: 'normal',             label: 'Normální váha',        min: 18.5, max: 25.0  },
        { key: 'overweight',         label: 'Nadváha',              min: 25.0, max: 30.0  },
        { key: 'obese1',             label: 'Obezita I. stupně',    min: 30.0, max: 35.0  },
        { key: 'obese2',             label: 'Obezita II. stupně',   min: 35.0, max: 40.0  },
        { key: 'obese3',             label: 'Obezita III. stupně',  min: 40.0, max: Infinity }
    ];

    // Age-adjusted recommended BMI ranges
    var ageRanges = [
        { minAge: 18, maxAge: 24, low: 19, high: 24 },
        { minAge: 25, maxAge: 34, low: 20, high: 25 },
        { minAge: 35, maxAge: 44, low: 21, high: 26 },
        { minAge: 45, maxAge: 54, low: 22, high: 27 },
        { minAge: 55, maxAge: 64, low: 23, high: 28 },
        { minAge: 65, maxAge: 999, low: 24, high: 29 }
    ];

    /**
     * Calculate basic BMI
     * @param {number} weightKg
     * @param {number} heightCm
     * @returns {number} BMI rounded to 1 decimal
     */
    function calculateBMI(weightKg, heightCm) {
        var heightM = heightCm / 100;
        return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
    }

    /**
     * Get WHO category for a given BMI
     * @param {number} bmi
     * @returns {{ key: string, label: string }}
     */
    function getCategory(bmi) {
        for (var i = 0; i < categories.length; i++) {
            if (bmi < categories[i].max) {
                return categories[i];
            }
        }
        return categories[categories.length - 1];
    }

    /**
     * Get age-adjusted recommendation
     * @param {number} age
     * @returns {{ low: number, high: number } | null}
     */
    function getAgeRange(age) {
        for (var i = 0; i < ageRanges.length; i++) {
            if (age >= ageRanges[i].minAge && age <= ageRanges[i].maxAge) {
                return { low: ageRanges[i].low, high: ageRanges[i].high };
            }
        }
        return null;
    }

    /**
     * Evaluate waist circumference risk (WHO European thresholds)
     * @param {number} waistCm
     * @param {'male'|'female'} gender
     * @returns {{ level: string, label: string, description: string }}
     */
    function evaluateWaist(waistCm, gender) {
        if (gender === 'male') {
            if (waistCm < 94) {
                return { level: 'low', label: 'Nízké riziko', description: 'Obvod pasu je v normě (pod 94 cm).' };
            } else if (waistCm <= 102) {
                return { level: 'elevated', label: 'Zvýšené riziko', description: 'Obvod pasu 94–102 cm značí zvýšené zdravotní riziko.' };
            } else {
                return { level: 'high', label: 'Vysoké riziko', description: 'Obvod pasu nad 102 cm značí výrazně zvýšené zdravotní riziko.' };
            }
        } else {
            if (waistCm < 80) {
                return { level: 'low', label: 'Nízké riziko', description: 'Obvod pasu je v normě (pod 80 cm).' };
            } else if (waistCm <= 88) {
                return { level: 'elevated', label: 'Zvýšené riziko', description: 'Obvod pasu 80–88 cm značí zvýšené zdravotní riziko.' };
            } else {
                return { level: 'high', label: 'Vysoké riziko', description: 'Obvod pasu nad 88 cm značí výrazně zvýšené zdravotní riziko.' };
            }
        }
    }

    /**
     * Get gender-specific context text
     * @param {number} bmi
     * @param {'male'|'female'} gender
     * @returns {string}
     */
    function getGenderContext(bmi, gender) {
        if (gender === 'female') {
            if (bmi >= 20 && bmi <= 22) {
                return 'Vaše BMI je v optimálním rozmezí pro ženy (20–22).';
            } else if (bmi >= 18.5 && bmi < 20) {
                return 'Vaše BMI je v normě, pro ženy je optimum kolem 20–22.';
            } else if (bmi > 22 && bmi < 25) {
                return 'Vaše BMI je v normě. Optimální hodnota pro ženy bývá uváděna kolem 20–22.';
            }
        } else if (gender === 'male') {
            if (bmi >= 22 && bmi <= 25) {
                return 'Vaše BMI je v optimálním rozmezí pro muže (22–25).';
            } else if (bmi >= 18.5 && bmi < 22) {
                return 'Vaše BMI je v normě, pro muže je optimum kolem 22–25.';
            } else if (bmi > 25 && bmi < 27) {
                return 'Vaše BMI mírně přesahuje optimum pro muže (22–25).';
            }
        }
        return '';
    }

    /**
     * Get age-adjusted interpretation text
     * @param {number} bmi
     * @param {number} age
     * @returns {string}
     */
    function getAgeInterpretation(bmi, age) {
        var range = getAgeRange(age);
        if (!range) return '';

        if (bmi >= range.low && bmi <= range.high) {
            return 'Pro váš věk (' + age + ' let) je vaše BMI v doporučeném rozmezí ' + range.low + '–' + range.high + '.';
        } else if (bmi < range.low) {
            return 'Pro váš věk (' + age + ' let) je doporučené BMI ' + range.low + '–' + range.high + '. Vaše hodnota je pod tímto rozmezím.';
        } else {
            return 'Pro váš věk (' + age + ' let) je doporučené BMI ' + range.low + '–' + range.high + '. Vaše hodnota je nad tímto rozmezím.';
        }
    }

    // ---- Children (CDC LMS method) ----

    /**
     * Interpolate LMS parameters for a given age in months
     * @param {Array} lmsData - Array of { ageMonths, L, M, S }
     * @param {number} ageMonths
     * @returns {{ L: number, M: number, S: number } | null}
     */
    function interpolateLMS(lmsData, ageMonths) {
        // Clamp to data range
        if (ageMonths <= lmsData[0].ageMonths) {
            return { L: lmsData[0].L, M: lmsData[0].M, S: lmsData[0].S };
        }
        if (ageMonths >= lmsData[lmsData.length - 1].ageMonths) {
            return { L: lmsData[lmsData.length - 1].L, M: lmsData[lmsData.length - 1].M, S: lmsData[lmsData.length - 1].S };
        }

        // Find surrounding data points
        for (var i = 0; i < lmsData.length - 1; i++) {
            if (ageMonths >= lmsData[i].ageMonths && ageMonths < lmsData[i + 1].ageMonths) {
                var t = (ageMonths - lmsData[i].ageMonths) / (lmsData[i + 1].ageMonths - lmsData[i].ageMonths);
                return {
                    L: lmsData[i].L + t * (lmsData[i + 1].L - lmsData[i].L),
                    M: lmsData[i].M + t * (lmsData[i + 1].M - lmsData[i].M),
                    S: lmsData[i].S + t * (lmsData[i + 1].S - lmsData[i].S)
                };
            }
        }
        return null;
    }

    /**
     * Calculate Z-score from BMI using LMS parameters
     * @param {number} bmi
     * @param {{ L: number, M: number, S: number }} lms
     * @returns {number}
     */
    function calculateZScore(bmi, lms) {
        if (lms.L === 0) {
            return Math.log(bmi / lms.M) / lms.S;
        }
        return (Math.pow(bmi / lms.M, lms.L) - 1) / (lms.L * lms.S);
    }

    /**
     * Convert Z-score to percentile using standard normal CDF approximation
     * @param {number} z
     * @returns {number} Percentile (0-100)
     */
    function zToPercentile(z) {
        // Abramowitz & Stegun approximation
        if (z < -6) return 0;
        if (z > 6) return 100;

        var sign = z < 0 ? -1 : 1;
        z = Math.abs(z);

        var t = 1 / (1 + 0.2316419 * z);
        var d = 0.3989422804014327; // 1 / sqrt(2*PI)
        var prob = d * Math.exp(-z * z / 2) *
            (t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.8212560 + t * 1.3302744)))));

        if (sign === 1) {
            prob = 1 - prob;
        }

        return Math.round(prob * 1000) / 10; // 1 decimal
    }

    /**
     * Get child BMI category based on percentile (CDC)
     * @param {number} percentile
     * @returns {{ key: string, label: string }}
     */
    function getChildCategory(percentile) {
        if (percentile < 5) {
            return { key: 'child-underweight', label: 'Podváha' };
        } else if (percentile < 85) {
            return { key: 'child-normal', label: 'Normální váha' };
        } else if (percentile < 95) {
            return { key: 'child-overweight', label: 'Nadváha' };
        } else {
            return { key: 'child-obese', label: 'Obezita' };
        }
    }

    /**
     * Full child BMI calculation
     * @param {number} weightKg
     * @param {number} heightCm
     * @param {'male'|'female'} gender
     * @param {number} ageYears
     * @param {number} ageMonths (additional months, 0-11)
     * @returns {{ bmi: number, zScore: number, percentile: number, category: { key: string, label: string } } | null}
     */
    function calculateChildBMI(weightKg, heightCm, gender, ageYears, ageMonths) {
        var totalMonths = ageYears * 12 + (ageMonths || 0);

        // Validate age range (24-240 months = 2-20 years)
        if (totalMonths < 24 || totalMonths > 240) {
            return null;
        }

        var bmi = calculateBMI(weightKg, heightCm);

        // Get LMS data based on gender
        var lmsData = gender === 'male' ? window.LMS_BOYS : window.LMS_GIRLS;
        if (!lmsData) return null;

        var lms = interpolateLMS(lmsData, totalMonths);
        if (!lms) return null;

        var zScore = calculateZScore(bmi, lms);
        var percentile = zToPercentile(zScore);
        var category = getChildCategory(percentile);

        var medianBMI = Math.round(lms.M * 10) / 10;
        var heightM = heightCm / 100;
        var idealWeight = Math.round(lms.M * heightM * heightM * 10) / 10;

        return {
            bmi: bmi,
            zScore: Math.round(zScore * 100) / 100,
            percentile: percentile,
            category: category,
            medianBMI: medianBMI,
            idealWeight: idealWeight
        };
    }

    /**
     * Calculate gauge position (percentage 0-100)
     * Maps BMI range 12-45 to 0-100%
     * @param {number} bmi
     * @returns {number}
     */
    function getGaugePosition(bmi) {
        var minBMI = 12;
        var maxBMI = 45;
        var pos = ((bmi - minBMI) / (maxBMI - minBMI)) * 100;
        return Math.max(0, Math.min(100, pos));
    }

    function getIdealWeightRange(heightCm) {
        var heightM = heightCm / 100;
        var hSq = heightM * heightM;
        return {
            min: Math.round(18.5 * hSq * 10) / 10,
            max: Math.round(24.9 * hSq * 10) / 10
        };
    }

    // Public API
    return {
        calculateBMI: calculateBMI,
        getCategory: getCategory,
        getAgeRange: getAgeRange,
        evaluateWaist: evaluateWaist,
        getGenderContext: getGenderContext,
        getAgeInterpretation: getAgeInterpretation,
        calculateChildBMI: calculateChildBMI,
        getGaugePosition: getGaugePosition,
        getIdealWeightRange: getIdealWeightRange
    };
})();
