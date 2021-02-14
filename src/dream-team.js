const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members.filter(i => typeof i === 'string').filter(i => /^[a-zA-Z\s]*/.test(i)).map(i => i.trim()).map(i => i = i[0].toUpperCase()).sort().join('') : false;
};
