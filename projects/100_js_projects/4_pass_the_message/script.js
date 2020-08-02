// Select the elements to put effects on
const input       = document.getElementById("main-input");
const btnSubmit   = document.getElementById("btn-submit");
const lastMessage = document.getElementById("last-message");

// when click the button, 
// the function `passMessage`
// is going to be called
btnSubmit.addEventListener('click', passMessage);

// defining the function for event `click`
// on `btnSubmit`
function passMessage() {
    // get the text within the input cell
    const inputText = input.value;
    // change the text within the `lastMessage`
    lastMessage.innerHTML = inputText;
    // reset the input cell
    input.value = '';
}
