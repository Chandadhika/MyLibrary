//form ယူထားသည် (submit)ကို ဖမ်း
var formEl = $('#skills-form');
//user input တန်းဖိုးကို သိမ်းထား
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
//နေရာ အလွတ်
var skillsListEl = $('#skills-list');

//list- အသစ်တည်ဆောက်ခြင်းနှင့် အချက်အလက်ကို listတွင် ထည့်သွင်းခြင်း
var printSkills = function(name, date) {
  //li elementကို တည်ဆောက် (document.createElement('li'))
  var listEl = $('<li>');
  //နာမည်နဲ့ ရက် ပေါင်းစပ်ထားခြင်း
  var listDetail = name.concat(' on ', date);
  //addclass 'list group item'
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  //reload ကို တားခြင်း
  event.preventDefault();
// user ထည့်လိုက်တဲ့ နာမည် ရက် တန်ဖိုး
  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    //နာမည် ရက် ကို မထည့်ပဲ အတည်ပြုရင် ပြရန်
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);
//reset name and date form
  nameInputEl.val('');
  dateInputEl.val('');
};

//.on-addeventLestenerကို အတိုးချုံးထားသည်
formEl.on('submit', handleFormSubmit);

// TODO: Add comments to describe the functionality of this jQuery UI interaction
//function()ကိုစား $
$(function() {
  var skillNames = [
    //စာလုံးတလုံးရိုက်ရုံနဲ့ ဆက်စပ်ရာကို ပြပေးဖို့အတွက် 
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby'
  ];
  //auto ပြဖိုအတွက် .autocompleteကို သုံးထားသည်
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
$(function() {
  $('#datepicker').datepicker({
    //လ နှစ်ကို ချိန်းလို့ ပြောင်းလဲလို့ ရပါသည် falseဆို မရပါ
    changeMonth: true,
    changeYear: true
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
$(function() {
  //အထက်အောက်အစီစဥ် လုပ်ထားလို့ ရပါသည်
  $('#skills-list').sortable({
    //မောက်နဲ့ ဖိထားချိန်မှာ အစက်ပြောက်လေးနဲ့ ဟိုက်လိုက်ကို  ပြပေးထားသည်
    placeholder: 'ui-state-highlight'
  });
  //Selectလုပ်လို့မရအောင် ပိတ်ထားသည်
  $('#skills-list').disableSelection();
});
