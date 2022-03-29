
let CommandDansLeLocalStorage = JSON.parse(localStorage.getItem("CommandEnregistre"));//JSON.parse pour convertir JSON en JAVASCIPT


//-----------------construction de nombre aléatoire

//recuperation id
var str = window.location.href
console.log(str);
var url = new URL(str);
var id = url.searchParams.get("orderId")
console.log(id);

if (id == null) {
  console.log("pas d'id");
  window.location.href = "http://127.0.0.1:5500/front/html/index.html";//----A MODIFIER

} else {
  console.log("une id a été trouvé");
  orderId.textContent = id
  localStorage.clear()
}

