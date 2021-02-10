const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear');
const removeMark = document.querySelector('.remove');


//After I type in an item in the input field, I click the Add button
//Once the Add button is clicked, the item I typed in will show up in the "item-container" (which is the variable "listItem")
//I can remove each item by clicking on the "x" of the same line
//When I click on the clear button, it will clear all items I typed 

submitButton.addEventListener('click', function() {

    const itemContainer = document.getElementById('item-container');
    const itemText = document.getElementById('item-text');

    //When the submit button is clicked, this function will create a new div element. And it will attach itself to the div with the id of "item-container"
    let div = document.createElement('div');
    itemContainer.appendChild(div);
    div.classList.add('show');

    //This is the content of whatever is typed into the input field
    let item = itemText.value;

    //Whatever was typed into the input field will be the text of the new div
    div.innerText = item;

    //After the submit button is clicked, the input field becomes empty again.
    itemText.value = ' ';

})


//When I click the clear button I want it to remove the added div elements and clear the content inside the input field 
clearButton.addEventListener('click', function () {

    const itemContainer = document.getElementById('item-container');
    const itemText = document.getElementById('item-text');

    const divWithShowClass = document.querySelector('.show');

    divWithShowClass.remove();
    

})





