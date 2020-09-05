let counter = 0; // initialize the counter variable
let stopNumber = 5; // number to restart the counter

// function to increase the counter
function show() {
  counter++; // increase the counter variable
  let el = <p>{counter}</p>; // create the element to be displayed on the index.html
  // check if the counter reached the stopNumber variable
  if (counter > stopNumber) {
    // redefine the element to be displayed on the index.html
    el = <p id="restart">Let's start again!</p>;
    counter = 0; //reset counter
  };
  // render the elemente on the ReactDOM
  ReactDOM.render(el, document.getElementById('root'));
}

// run the show() function every 1_000ms = 1.0s
setInterval(show, 1000);
