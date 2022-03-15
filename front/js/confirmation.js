
let CommandDansLeLocalStorage = JSON.parse(localStorage.getItem("CommandEnregistre"));//JSON.parse pour convertir JSON en JAVASCIPT


//-----------------construction de nombre aléatoire
var min = 1;
var max = 99999999999999999;
var random = Math.floor(Math.random() * (max - min)) + min;

console.log(CommandDansLeLocalStorage);

orderId.textContent = (random)