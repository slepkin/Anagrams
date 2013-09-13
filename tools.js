//We interpret the character count as a string of 26 one-digits number.
//This presupposes that no word contains more than 9 instances of any one letter

module.exports = {
  incrementStringAt: function (str,index) {
    var output = str.slice(0,index);
    output += String(parseInt(str[index])+1);
    output += str.slice(index+1);
    return output;
  },
  charCount: function(str) {
    var count = "00000000000000000000000000"
    for(var i=0; i<str.length; i++) {
      count = this.incrementStringAt(count, str.charCodeAt(i)-97);
    }
    return count;
  }
}
