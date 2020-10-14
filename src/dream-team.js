const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let dreamTeam = members.map(el => {
    if(typeof el !== 'string') return undefined;
    for(let i = 0; i<= el.length;) {
      if(el.charAt(i) == ' ') i++;
      else if(typeof el.charAt(i) === 'string') return el = el.charAt(i).toUpperCase();
    }
    });

    return dreamTeam.sort().join('');
};