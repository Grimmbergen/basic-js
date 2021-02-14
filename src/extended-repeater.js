const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  (options.addition === false) ? options.addition = 'false' : (options.addition === null) ? options.addition = 'null' : options.addition;
  let additionPart = `${((options.addition || '') + (options.additionSeparator || '')).repeat(options.additionRepeatTimes - 1)}${options.addition || ''}`
  return (`${(str + (additionPart || "") + (options.separator || '+')).repeat(options.repeatTimes - 1)}${str + (additionPart || "")}`)

};
  