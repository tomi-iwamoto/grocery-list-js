const itemText = document.getElementById('item-text');
const submitButton = document.getElementById('submit-button');
const listItem = document.querySelectorAll('.item-container');
const clearButton = document.getElementById('clear');
const removeMark = document.querySelector('.remove');

//After I type in an item in the input field, I click the Add button
//Once the Add button is clicked, the item I typed in will show up in the "item-container" (which is the variable "listItem")
//I can remove each item by clicking on the "x" of the same line
//When I click on the clear button, it will clear all items I typed 

submitButton.addEventListener('click', function() {

    var item = itemText.value;

    listItem[0].innerHTML = item;


})

