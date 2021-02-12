const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear');
const removeMark = document.querySelector('.remove');




submitButton.addEventListener('click', function() {


    const itemContainer = document.getElementById('item-container');
    let itemText = document.getElementById('item-text');
    
    //This is the content of whatever is typed into the input field
    let item = itemText.value;

    //When submit button is clicked, this function will create a new div element. And it will attach itself to the div with the id of "item-container"
    let div = document.createElement('div');
    itemContainer.append(div);

    //Here we add the class of "show" to the new div to make it appear on the screen
    div.classList.add('show');

    //Whatever was typed into the input field will be the text of the new div
    div.innerText = item;

    //After the submit button is clicked, the input field becomes empty again.
    itemText.value = ' ';




    //This event listener will put a strike through style into each div element when clicked on
    div.addEventListener('click', function () {

        div.style.textDecoration = "line-through";

    })

    //Added an event listener that hovers over each created div with a pointer
    div.addEventListener('mouseover', function () {

        div.style.cursor = "pointer";

    })


})


//When I click the clear button I want it to remove the added div elements and clear the content inside the input field 
clearButton.addEventListener('click', function () {

    const itemContainer = document.getElementById('item-container');

    //This will help me clear all of the content inside of the item container. This loop says, as long as there are child nodes in the "itemContainer", remove the childnodes by using ".removeChild" from the "itemContainer." 
    while (itemContainer.hasChildNodes()){

        itemContainer.removeChild(itemContainer.firstChild);

    }


})





