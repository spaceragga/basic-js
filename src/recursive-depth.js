const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
    let sumDepth = 1;
    arr.forEach(el => {
        let number = 1;
        if (Array.isArray(el)) number += this.calculateDepth(el);
        sumDepth = (sumDepth >= number) ? sumDepth : number;
        });
        return sumDepth;
      }
};