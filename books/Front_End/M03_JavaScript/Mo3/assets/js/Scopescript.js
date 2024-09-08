// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions

// Function Scope
function justShout() {
  console.log(shout + ', ' + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + ' it all out! ');
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function

// Function and Block Scope
function sayLions() {
  var animal = 'Lions';
  console.log(animal);
  return;
}

function sayTigers() {
  console.log('and ' + animal + ' and ');
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".

// Global, Function and Block Scope
var bears = 'Bears';

function sayBears() {
  var bears = 'Pandas';
  console.log(bears + '! OH MY!');
  return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.

// This is Global Scope
var sing = 'Sing';
// This is Function Scope
function singAlong() {
  console.log(sing + ',');
  // This is Block Scope
  var singASong = function() {
    console.log(sing + ' a Song.');
  };
  singASong();
}

singAlong();
