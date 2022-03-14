
let CommandDansLeLocalStorage = JSON.parse(localStorage.getItem("CommandEnregistre"));//JSON.parse pour convertir JSON en JAVASCIPT


console.log(CommandDansLeLocalStorage);
console.log(CommandDansLeLocalStorage[2].idCommand);

orderId.textContent = (CommandDansLeLocalStorage[2].idCommand)