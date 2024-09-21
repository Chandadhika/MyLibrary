// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

// var titleCase = function(str) {
//     var result = [''];

//     var words = str.split(' ');//စကားလုံးကို ဖြတ်တောက်ခြင်း ခွဲထားခြင်း

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i].split(''); //စာသားကို တစ်လုံးချင်း ခွဲထားခြင်း

//         word[0] = word[i].toUpperCase();//word[0]ဆိုသည်မှာ ရှေ့ဆုံးစာလုံး, [1]ဒုတိယစာလုံးစသည်ကို ဆိုလိုသည်

//         result.push(word.join(''));// စာသားတွေကို ပြန်ပေါင်းစပ်ခြင်း
//     }
//     return result.join(' ');
// };
// // titleCase("you are welome to yangon");
// str("you are welome to yangon");


// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var result = [];
  
    var words = str.split(' ');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i].split('');
  
      word[0] = word[0].toUpperCase();
  
      result.push(word.join(''));
    }
  
    return result.join(' ');
  };
  