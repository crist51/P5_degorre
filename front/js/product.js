//recuperation id
var str = window.location.href
console.log(str);
var url = new URL(str);
var id= url.searchParams.get("id")
console.log(id);


fetch("http://localhost:3000/api/products/"+ id)
.then(function(response){
  return response.json();
})
.then(function(reponceAPI){
  console.log(reponceAPI);


  //--------------création lien img
  var kanapImg = document.createElement("img");
  kanapImg.src = (reponceAPI.imageUrl);
  kanapImg.alt = (reponceAPI.altTxt);
  kanapImg.classList.add("item__img");
  item__img.appendChild(kanapImg);

  //--------------création title & price & description
  title.textContent = (reponceAPI.name);
  price.textContent = (reponceAPI.price);
  description.textContent = (reponceAPI.description);

//-----------------------------color
var color= 0
while (color < reponceAPI.colors.length) {
    var colorOption = document.createElement("option");//création d'option
    colorOption.value = color;//ajout de la valeur sur l'option
    colorOption.text = (reponceAPI.colors[color]);  //ajout du texte dans l'option
    console.log(reponceAPI.colors[color]);
    colors.appendChild(colorOption);//On ajoute option dans le HTML;
    color++;
  }

//-------------------------quantity
var input = document.getElementById("quantity").value;


//-------------------------La gestion du panier

//selectionner le btn dans le dom
const envoyerPanier = document.querySelector("#addToCart")
console.log(addToCart);
//écouter le btn et envoyer dans le panier
envoyerPanier.addEventListener("click",(event)=>{
  event.preventDefault();
    
  //-------------------------couleur chsoisit
  var colorSelect = (reponceAPI.colors[colors.value])//color corespond a la select
  console.log(colorSelect);
  //-------------------------quantité voulut
  var quantity = document.getElementById("quantity").value
  console.log(quantity);
  //-------------------------recuperation des valeur

  const panier = {//optionsProduit
    "color" : colorSelect,
    "nom" : reponceAPI.name,
    "price" : reponceAPI.price,
    "_id" : reponceAPI._id,
    "quanity" : quantity,
    };
  console.log(panier);

  //-------------------------local storage
//stoker les et recup les donné local storage

//declare la var produitEnreistrer
let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));
//JSON.parse pour convertir JSON en JAVASCIPT
console.log(produitEnregistrerDansLeLocalStorage);

//popUP création
const popUp = () =>{
  if(window.confirm('{reponceAPI.name} option:" ${colorSelect} a bien été ajouté au panier consulter le panier OK ou ANNULER afin de continuer vos achat')){
  window.location.href = "http://127.0.0.1:5500/front/html/cart.html";//----A MODIFIER
  }
}
//si y a des produit dans le local storage sinon le creer
if(produitEnregistrerDansLeLocalStorage){
  produitEnregistrerDansLeLocalStorage.push(panier);
  localStorage.setItem("key",JSON.stringify(produitEnregistrerDansLeLocalStorage));
  //JSON.stringify convertit le JAVASCRIPT en JSON
  console.log(produitEnregistrerDansLeLocalStorage);
  popUp();
}
else{
  produitEnregistrerDansLeLocalStorage = [];
  produitEnregistrerDansLeLocalStorage.push(panier)
  localStorage.setItem("key",JSON.stringify(produitEnregistrerDansLeLocalStorage));
  console.log(produitEnregistrerDansLeLocalStorage);
  popUp();
}

});

});
