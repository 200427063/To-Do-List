let btn = document.getElementById("addButton");


addButton.onclick = addNewtask;
//function to add new task to the list
function addNewtask() {
    let li = document.createElement("li"); // this will create new item
    let textField = document.getElementById("inputtext").value; // this captures the value from input field
    let createli = document.createTextNode(textField);// this adds the new value entered to the list.
    li.appendChild(createli); // ths display typed task in the list
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");// add  checkbox when new item is added.
    checkbox.setAttribute('onclick', 'playSound()');// newEventListener to add sound.
    li.appendChild(checkbox);// checkbox in the list
    document.getElementById("inputtext").value = ""; // this clear the space when user click add button

    if (textField === '') { // this says the message when the value in the field is not entered.
        alert("Please enter a Task");
    } else {
        document.getElementById("schedule").appendChild(li);
    }

    let dlt = document.createElement("dlt"); //

    let deleteBtn = document.createElement("button"); // this add a delete button.
    deleteBtn.innerHTML = "Delete";// this helps to delete the item
  //  dlt.setAttribute('onclick', 'changeColor(e)'); to vhange color
    dlt.className = "remove";// remove item
    dlt.appendChild(deleteBtn);
    li.appendChild(dlt);

    // helps to delete item from the list
    let remove = document.getElementsByClassName("remove");
    let i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}


// function to play beep sound when checkbox is checked
function playSound(){

  let myAudio = new Audio('beep-02.wav');
  myAudio.play();
}
//function to change color
//function changeColor(e){
//  let p = e.target.nextElementSibling;
//  p.style.color = 'red';
//}
