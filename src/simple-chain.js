const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr : [],
  getLength() { 
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(String(value));
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position <= 0 || position > this.chainArr.length) {
      this.chainArr = [];
      throw new Error;
    }
    this.chainArr.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let output = `( ${this.chainArr.join(' )~~( ')} )`;
    this.chainArr = [];
    return output;
  }
};

module.exports = chainMaker;
