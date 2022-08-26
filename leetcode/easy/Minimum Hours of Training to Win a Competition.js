// You are entering a competition, and are given two positive integers initialEnergy and initialExperience denoting your initial energy and initial experience respectively.
// You are also given two 0-indexed integer arrays energy and experience, both of length n.
// You will face n opponents in order. The energy and experience of the ith opponent is denoted by energy[i] and experience[i] respectively.
// When you face an opponent, you need to have both strictly greater experience and energy to defeat them and move to the next opponent if available.
// Defeating the ith opponent increases your experience by experience[i], but decreases your energy by energy[i].
// Before starting the competition, you can train for some number of hours.
// After each hour of training, you can either choose to increase your initial experience by one, or increase your initial energy by one.
// Return the minimum number of training hours required to defeat all n opponents.

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
    let cur = {
        en: initialEnergy,
        ex: initialExperience
    };
    let hours = 0;
    for (let i = 0; i < energy.length; i++) {
        let opponent = {
            en: energy[i],
            ex: experience[i]
        };
        while (cur.en <= opponent.en) {
            cur.en++;
            hours++;
        }
        while (cur.ex <= opponent.ex) {
            cur.ex++;
            hours++;
        }
        cur.en -= opponent.en;
        cur.ex += opponent.ex;
    }
    return hours;
};