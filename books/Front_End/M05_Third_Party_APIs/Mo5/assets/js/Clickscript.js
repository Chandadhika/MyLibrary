var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';//လက်ခံထည့်သည်နေရာ /၅
  for (
    var i = 0; i < num; i++) {
    password += getPasswordCharacter();//၄
  }
  return password;
}

passwordBtnEl.on('dblclick', function () {
  var newPassword = passwordGenerator(15);//သတ်မှတ်ထားမှု ၁၅ထိသာ
  passwordDisplayEl.text(newPassword);
});
