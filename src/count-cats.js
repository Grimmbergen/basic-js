const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(el => el.forEach(i => count = count + ((i == '^^') ? 1 : 0)));
  return count;
};
