const phone = document.getElementById("phone");
const btnHome = document.getElementById("btn-home");
const appCalc = document.getElementById("app-calc");

const hourHome = document.getElementById("hour-home");
const hourCalc = document.getElementById("hour-calc");
function currentTime() {
  hourHome.innerHTML = new Date().toLocaleTimeString();
  hourCalc.innerHTML = new Date().toLocaleTimeString();
}
setInterval(currentTime, 1000); 

appCalc.addEventListener('click', switchVisible);
btnHome.addEventListener('click', switchVisible);

function switchVisible() {
  phone.classList.toggle('switched');
}