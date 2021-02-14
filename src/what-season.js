const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date){
    return ('Unable to determine the time of year!');
 }
 if (Object.prototype.toString.call(date) != '[object Date]')
    throw new Error;   
  let month = date.getMonth();
  switch (Math.floor((month + 1) / 3)) {
    case (1):
      return 'spring';
    case (2):
      return 'summer';
    case (3):
      return 'autumn';
    default:
      return 'winter'
 }
};
