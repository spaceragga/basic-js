const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let data = {};
    data.turns =  Math.pow(2, disksNumber) - 1;
    data.seconds = Math.floor((Math.pow(2, disksNumber) - 1) / turnsSpeed * 3600);
    return data;
};
