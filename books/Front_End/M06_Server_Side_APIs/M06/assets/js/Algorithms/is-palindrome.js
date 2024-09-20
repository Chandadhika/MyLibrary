// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    var reversedString = str
    .split('')//ခွဲခြမ်းခြင်း
    .reverse()//ပြောင်းပြန်လုပ်ခြင်း
    .join('')//ပြန်စုစည်းခြင်း

    if (reversedString === str) {
        return true;
    } else {
        return false;
    }
};
isPalindrome('101');//ရှေ့နောက်ဘယ်လို ပြောင်းလဲပြောင်းလဲ ဘယ်လိုဖတ်ဖတ် ဖတ်လို့ရသည့် စကားလုံးမျိုး
//ဥပမာ = 101, radar