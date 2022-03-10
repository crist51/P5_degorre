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
/*var color= 1
while (color < reponceAPI.colors.length) {
    var colorOption = document.createElement("option");//création d'option
    colorOption.value = color;//ajout de la valeur sur l'option
    colorOption.text = (reponceAPI.colors[color]);  //ajout du texte dans l'option
    console.log(reponceAPI.colors[color]);
    colors.appendChild(colorOption);//On ajoute option dans le HTML;
    color++;
    console.log(colorOption.value)
  }
  */
  var color= 1
while (color < reponceAPI.colors.length) {
    var colorOption = document.createElement("option");//création d'option
    colorOption.value = color;//ajout de la valeur sur l'option
    colorOption.text = (reponceAPI.colors[color]);  //ajout du texte dans l'option
    console.log(reponceAPI.colors[color]);
    colors.appendChild(colorOption);//On ajoute option dans le HTML;
    color++;
}

//select id 
var selecId = document.getElementById("colors");
console.log(selecId);
//valleur de l'option selectionne
console.log(selecId[3]);//choisit la ligne option
var a = 0;//valeur entre crocher
console.log(selecId[a]);
var selectOption = selecId.value


/* faudrais que je recup le => []*/

/*
var selectOption = selecId.value;
console.log(selectOption);
var e = colors.select
console.log(e);
// non de la couleur
var selectColor = reponceAPI.colors[selectOption];//definit la couleur
console.log(selectColor); //nomme la couleur
*/

const ab = selectOption ;//racoucis panoer
/*
  const idForm = document.querySelector("#colors")
  console.log(reponceAPI.colors);
  const select = document.getElementById(idForm)
*/
////////////////////////////////////////////////////
//    Probleme arrive pas a recup la saisie      //
//////////////////////////////////////////////////


/*
function Recup_select_info(obj,choix_rech){
  var idx = obj.selectedIndex;
  if((choix_rech) && (choix_rech == 'valeur')){ return obj.options[idx].value;} // récupère valeur du select
  else if((choix_rech) && (choix_rech == 'texte')){ return obj.options[idx].innerHTML;} // récupère le contenu html du select
  else{ return idx;} // récupère l'index de position dans le tableau select
}
*/
/*
function remplissageAuto(obj) {
  var valeur_alias = Recup_select_info(obj);
  valeur_alias += '\n\n'+Recup_select_info(obj,'valeur');
  valeur_alias += '\n\n'+Recup_select_info(obj,'texte');
  alert(valeur_alias);
}
*/

/*
function Recup_select_info(obj,choix_rech){
  var idx = obj.selectedIndex;
  if((choix_rech) && (choix_rech == 'valeur')){ return obj.options[idx].value;} // récupère valeur du select
  else if((choix_rech) && (choix_rech == 'texte')){ return obj.options[idx].innerHTML;} // récupère le contenu html du select
  else{ return idx;} // récupère l'index de position dans le tableau select
}
console.log(Recup_select_info);

function remplissageAuto(obj) {
  var valeur_alias = Recup_select_info(obj);
  valeur_alias += '\n\n'+Recup_select_info(obj,'valeur');
  valeur_alias += '\n\n'+Recup_select_info(obj,'texte');
  alert(valeur_alias);
}
console.log(remplissageAuto);
*/






//-------------------------quantity
//var quantity = document.getElementById("quantity").value;
console.log(quantity);
var inputQuantity = document.getElementById("quantity");

//-------------------------La gestion du panier

//selectionner le btn dans le dom
const envoyerPanier = document.querySelector("#addToCart")
console.log(addToCart);
//écouter le btn et envoyer dans le panier
envoyerPanier.addEventListener("click",(event)=>{
  event.preventDefault();
  //id formulaire

  
  //-------------------------recuperation des valeur
  const panier = {//optionsProduit
    "color" : ab,
    "nom" : reponceAPI.name,
    "price" : reponceAPI.price/10,
    "_id" : reponceAPI._id,
    "quanity" : (inputQuantity.value),
    };
  console.log(panier);
})

});
