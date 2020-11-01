const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray : new Array(),

  getLength() {
    return this.chainArray.length;
  },

  addLink(value) {
    this.chainArray.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.getLength()) {
      this.chainArray.splice(position - 1, 1);
    } else {
      this.chainArray = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.chainArray.reverse();
    return this;
  },

  finishChain() {
    let result = this.chainArray.join('~~');
    this.chainArray = [];
    return result;
  }
};

module.exports = chainMaker;