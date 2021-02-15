const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(notReverse = true) {
    this.notReverse = notReverse;
    this.alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error();
    let textArr = [...text.toUpperCase()];
    let keyArr = [...key.toUpperCase()];
    let indKey = 0;
    let res = textArr.map((symb) => {
      if (this.alphabet.includes(symb)) {
        let symbRes = this.alphabet[
          (this.alphabet.indexOf(symb) +
            this.alphabet.indexOf(keyArr[indKey % keyArr.length])) %
            this.alphabet.length
        ];
        indKey++;
        return symbRes;
      } else {
        return symb;
      }
    });
    return this.notReverse ? res.join("") : res.reverse().join("");
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error();
    let textArr = [...text.toUpperCase()];
    let keyArr = [...key.toUpperCase()];
    let indKey = 0;
    let res = textArr.map((symb) => {
      if (this.alphabet.includes(symb)) {
        let symbRes = this.alphabet[
          (this.alphabet.indexOf(symb) -
            this.alphabet.indexOf(keyArr[indKey % keyArr.length]) +
            this.alphabet.length) %
            this.alphabet.length
        ];
        indKey++;
        return symbRes;
      } else {
        return symb;
      }
    });
    return this.notReverse ? res.join("") : res.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
