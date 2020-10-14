const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var number = 0;

  matrix.forEach((el) => {
    el.forEach((mb) => {
      if(mb == '^^') number += 1;
    });
  });
  return number;
};
