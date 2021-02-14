const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      return arr.reduce((count, current) => {
      if (Array.isArray(current)) {
        let currentDepth = this.calculateDepth(current);
        return (currentDepth > count) ? currentDepth : count;
      } else return count;
    }, 0) + 1;
  }
};