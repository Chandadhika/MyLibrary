var shoppingFormEl = $('#shopping-form');//ဒီနံင်အူန်းတာ့်ဂျိုး
var shoppingListEl = $('#shopping-list');//ဒီနံင်အူန်းတာ့်စရာင်းဂျိုး

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();//ဇီုဝ်ဂျိိုးပံင်ဇိူဝ့်

  if (!shoppingItem) {//ဆာ်ဘူမေဲ့ ဂျိုးပံင်ဇိူဝ့် ဝိးနှဲ,ဘေဲ,ခီချေဲမ်းနီန်း
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(//ဒီနံင်လေ့ဒေဲ့တိုးဘေဲ, ဇီုဝ်ဂျိုး
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item// ဟပ်ဒီနံင်ဝီးပျာ်,တာ့်စရာင်း ပံင်ဟောည့်ကိက်တိုးဘေဲ,
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page//ဂျိုးတမာည်း ပံင်နံင်ဇိူဝ့် ဝီးဟပ်ဘိုးတံင်စရာင်း
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element//ပျာ်,ဝီုန်စရာင်းပျီမ်း စာနံင်ဝီးဘိူန်းဟပ်စရာင်းတမာည်း
  $('input[name="shopping-input"]').val('');
  

}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
function handleRemoveItem(event) {
  // convert button we pressed (`event.target`) to a jQuery DOM object
  var btnClicked = $(event.target);//နံင်ဘိူန်းလိူည့်တဲက် ဒီဒါ့်တာ့်တဲက်

  // get the parent `<li>` element from the button we pressed and remove it
  btnClicked.parent('li').remove();//ပျာ်,ဝီုန်စရာင်းဂျိုးဇိူဝ့်
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);//တဲက် ပျာ်, ရေဲန့်ဟာဝ်း
shoppingFormEl.on('submit', handleFormSubmit);//ဘည်နံင်လိုတာ့်ရေဲန့်ဟာဝ်း စရာင်းဇိူဝ့် ပံင်တာင်ပျ


//handleRemoveItem-
//handleFormSubmit-ဇီုဝ်ဂျိုးကာည်း ပျာ်,၊ ရေဲန့်ဟာဝ်းဘိုး စရာင်းတမာည်း
