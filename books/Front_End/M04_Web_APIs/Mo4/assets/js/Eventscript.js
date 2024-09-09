// var count = 0;

// // TODO: Add a comment describing the functionality of the following document.querySelector() methods:
// var incrementEl = document.querySelector('#increment');
// var decrementEl = document.querySelector('#decrement');
// var countEl = document.querySelector('#count');

// // TODO: Add a comment describing the functionality of the following code:
// function setCounterText() {
//   countEl.textContent = count;
// }
// // TODO: Add a comment describing the functionality of the following event listener:
// incrementEl.addEventListener('click', function() {
//   count++;
//   setCounterText();
// });

// // TODO: Add a comment describing the functionality of the following event listener:
// decrementEl.addEventListener('click', function() {
//   // Action will fire if count is greater than  0
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });

var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

var count = 0;

function setCounterText(){
  countEl.textContent = count;
}

incrementEl.addEventListener('click', function(){
  count++;
  setCounterText();
});

decrementEl.addEventListener('click', function(){
  if(count > 0){
    count--;
    setCounterText();
  }
});
