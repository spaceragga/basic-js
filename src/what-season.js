const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    if (Date.prototype.isPrototypeOf(date) && !isNaN(date)) {
      let month=date.getMonth();
        if(month >= 0 && month < 2||month === 11) return 'winter';
        if(month >= 2 && month < 5) return 'spring';
        if(month >= 5 && month < 8) return 'summer';
        if(month >= 8 && month < 11) return 'autumn';
        else '';
    } else {
        throw new Error('Error');
    }
  } else {
    return 'Unable to determine the time of year!';
  }
};
