// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let passwordLength; 
  let includeUpperCase;
  let includeLowerCase;
  let includeNumber;
  let includeSpesialCharacter;

  passwordLength = parseInt(prompt("Password length must be between 8 and 20 characters.")); //stringမှ Numberနံပါတ်သို့ပြောင်း
  includeUpperCase = confirm("UppercaseCheckbox");
  includeLowerCase = confirm("LowercaseCheckbox");
  includeNumber = confirm("NumbersCheckbox");
  includeSpesialCharacter = confirm("SpecialCharsCheckbox");

  //စာသားချည်ပဲ မဟုတ် ဂဏန်းချည်ပဲ မဟုတ်၊ အနည်းဆုံး ၈-လုံး အများဆုံး ၁၂၈-လုံး, စစ်ဆေးခြင်း။ မလိုအပ်သော အပိုအလိုများ သတ်မှတ်မထားသော အရာများတို့ကို စစ်ဆေးခြင်း
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Please select at least one character type.");
    //မထည့်ပြန်ဘူးဆိုရင်/အမှန်မထည့်ဘူးဆိုရင်
    return "";
    // parseInt(prompt("စကားဝှက် ၈-လုံးမှ ၁၂၈-လုံးအတွင်းရွေးပါ"));
  }
//စာလုံးကို စစ်ဆေးခြင်း။ တစ်ခုခု မထည့်မခြင်း စစ်ဆေးခြင်း
if(!includeLowerCase && !includeNumber && !includeSpesialCharacter && !includeUpperCase){
  alert("Please select at least one character type.");
  return "";
}

let availableChar = "";
if(includeUpperCase){
availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if(includeLowerCase){
availableChar += "abcdefghijklmnopqrstuvwxyz";
}
if(includeNumber){
availableChar += "0123456789";
}
if(includeSpesialCharacter){
availableChar += "~!@#$%^&*()_-+=";
}

let password = "";
//ပေါင်းစပ်ရော၍ ဖော်ပြခြင်း
for(let i = 0; i < passwordLength; i++){
  let randomIndex = Math.floor(Math.random() * availableChar.length);
  
  // password = password + availableChar.charAt(randomIndex);
  password =+ availableChar.charAt(randomIndex);
}

return password;
};



