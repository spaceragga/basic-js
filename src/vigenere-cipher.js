const CustomError = require("../extensions/custom-error");

let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
  
    constructor(reverse) {
      console.log(reverse);
      if (reverse === false) this.reverse = false;
      else this.reverse = true;
    }
  
    encrypt(string, key) {
      if (typeof string === 'undefined' || typeof key === 'undefined') throw new Error();
      else {
        string = string.toUpperCase();
        key = key.toUpperCase();
        while (key.length < string.length) {
          key += key;
        }
        let result = '';
        for (let i = 0, j = 0; i < string.length; i++, j++) {
          if (alp.includes(string.charAt(i))) {
            result += alp.charAt((alp.indexOf(string.charAt(i)) + alp.indexOf(key.charAt(j))) % alp.length);
          } else {
            result += string.charAt(i);
            j--;
          }
        }
        if (this.reverse === false) result = result.split('').reverse().join('');
        return result;
      }
    }
  
    decrypt(string, key) {
      if (typeof string === 'undefined' || typeof key === 'undefined') throw new Error();
      else {
        string = string.toUpperCase();
        key = key.toUpperCase();
        while (key.length < string.length) {
          key += key;
        }
        let result = '';
        for (let i = 0, j = 0; i < string.length; i++, j++) {
          if (alp.includes(string.charAt(i))) {
            result += alp.charAt((alp.indexOf(string.charAt(i)) - alp.indexOf(key.charAt(j)) + alp.length) % alp.length);
          } else {
            result += string.charAt(i);
            j--;
          }
        }
        if (this.reverse === false) result = result.split('').reverse().join('');
        return result;
      }
    }
  }


module.exports = VigenereCipheringMachine;
