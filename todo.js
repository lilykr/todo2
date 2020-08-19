// select and store the new text input 

function createNewElement() {
    let getText = document.getElementById("text-input").value; //get the value of the input

    let textInput = document.createTextNode(getText); // create the new text 

    let newItem = document.createElement("li"); // Create a new li
    myTodo.appendChild(newItem);

    newItem.appendChild(textInput);  // attach the new text to the li
}

// appeler fonction click sur Add

function onClickAdd() {
    createNewElement();
}