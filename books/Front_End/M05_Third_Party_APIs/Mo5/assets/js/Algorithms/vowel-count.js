// Write code to return the the number of vowels in `str`

//var str = ['H', 'e', 'l', 'l', 'o'] ဥပမာအနေနဲ့
// var vowelCount = function(str) {
//     var result = 0; //မူလရလာဒ်
//     var vowels = ["a", "e", "i", "o", "u"];
  
//     for (var i = 0; i < str.length; i++) {
//       var letter = str[i].toLowerCase();//ရလာတဲ့ရလာဒ်ကို စာလုံးအသေးပြောင်း၍ letterထဲ ထည့်ပါ
  
  
//       //!== -1 မရှိဘူး မပါဘူးဆိုရင် (သရမပါဘူး မရှိဘူးဆိုရင်)
//       if (vowels.indexOf(letter) !== -1) {
//         result += 1;
//       }
//     }
  
//     // return [result, vowelCount];

//     return {
//         count: result,
//         vowels: vowelTotal
//     }
//   };
  
  
  // Alternatively, this problem could have been solved without the use of `indexOf`, but by using the logical OR (||) operator to check for each vowel
  
  var vowelCount = function (str) {
    var result = 0;
  
    for (var i = 0; i < str.length; i++) {
      var letter = str[i].toLowerCase();
  
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        result += 1;
      }
    }
  
    return result;
  };
  