const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
if(!options.repeatTimes) return str + options.addition;
if(!options.separator) options.separator = '+';
if(!options.additionSeparator) options.additionSeparator = '|';

  let ss = (options.addition + '#').repeat(options.additionRepeatTimes).split('#');
  ss.pop();
  ss = ss.join(options.additionSeparator);

  let newStr = (str + ('#' + options.separator)).repeat(options.repeatTimes).split('#');
  newStr.pop();
  
  return newStr.join(ss) + ss;
};