const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return (typeof sampleActivity !== "string"  || isNaN(parseFloat(sampleActivity)) || sampleActivity <= 0 || sampleActivity > 15) ? false :
  Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693)
} 