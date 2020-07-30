// Chose a random color

// Creating queries 
const button = document.querySelector('button');
const body   = document.querySelector('body');
const h1     = document.querySelector('h1');

// Add an event to handle the 'changeBackgroundColor'
// when it is clicked
button.addEventListener('click', changeBackgroundColor);

// defining the function that is going to be called
// once the button is clicked
function changeBackgroundColor() {
    let hexArray = ['#']; // initial hexArray
    const hexValues = [
        '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9', 'A', 'B',
        'C', 'D', 'E', 'F'                       
    ]; // array with all hex values
    // loop to append 6 characters into the 'hexArray'
    for (let i=1; i < 7; i++) {
        // defining a random number within the range
        // of hexValues
        const randIndex = Math.floor(Math.random()*hexValues.length);
        // select the 'hexValue' at the 'randIndex'
        const hexRandom = hexValues[randIndex];
        // append the 'hexRandom' to the 'hexArray'
        hexArray[i] = hexRandom;
    }

    // create the the final hex color string
    const hexFinal = hexArray.join('');
    // change the background color of body
    body.style.backgroundColor = hexFinal;
    // change the text color of body
    // chose this because h1 will inherit
    // this property
    body.style.color = hexFinal;
    // change the text within the h1 tag
    h1.innerHTML = `HEX COLOR: ${hexFinal}`;
    // change the color of text within button tag
    // button.style.color = hexFinal; // didn't like this effect
}