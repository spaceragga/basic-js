const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0,
    number = parseFloat(sampleActivity),
   sample = 0.693/HALF_LIFE_PERIOD;

   if(number > 0 && number < MODERN_ACTIVITY && !isNaN(number) && typeof number === 'string') {
     result = Math.log2(MODERN_ACTIVITY/sampleActivity) / sample;
   }

  return result;
};