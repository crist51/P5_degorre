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
  kanapImg.src =(reponceAPI.imageUrl);
  kanapImg.alt = (reponceAPI.altTxt);
  kanapImg.classList.add("item__img");
  item__img.appendChild(kanapImg);

  //--------------création title & price & description
  title.textContent = (reponceAPI.name);
  price.textContent = (reponceAPI.price)/10;
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

var r = document.querySelector("#colors");
console.log(r);
//selection id du form
const idForm = document.querySelector("#colors")

//metre le choix du formulaire var
var choixForm = idForm.value

//////////////////////////////////////////
//Probleme arrive pas a recup la saisie//
////////////////////////////////////////

//-------------------------quantity
var quantity = document.getElementById("quantity").value;
console.log(quantity);


//-------------------------La gestion du panier


//selectionner le btn dans el dom
const envoyerPanier = document.querySelector("#addToCart")
console.log(addToCart);
//écouter le btn et envoyer dans le panier
envoyerPanier.addEventListener("click",(event)=>{
  event.preventDefault();
})

//-------------------------recuperation des valeur
  const panier = {//optionsProduit
    "color" : choixForm,
    "nom" : reponceAPI.name,
    "price" : reponceAPI.price/10,
    "_id" : reponceAPI._id,
    "quanity" : quantity,
    };
  console.log(panier);
});
