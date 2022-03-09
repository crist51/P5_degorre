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
console.log(colors);

function Recup_select_info(obj,choix_rech){
  var idx = obj.selectedIndex;
  if((choix_rech) && (choix_rech == 'valeur')){ return obj.options[idx].value;} // récupère valeur du select
  else if((choix_rech) && (choix_rech == 'texte')){ return obj.options[idx].innerHTML;} // récupère le contenu html du select
  else{ return idx;} // récupère l'index de position dans le tableau select
}
function remplissageAuto(obj) {
  var valeur_alias = Recup_select_info(obj);
  valeur_alias += Recup_select_info(obj,'valeur');
  valeur_alias += Recup_select_info(obj,'texte');
  console.log(valeur_alias);

}





// //select le bouton dans le dom
// const envoyerPanier = document.querySelector("#envoyer")
// //ecouter le bouton
// envoyerPanier.addEventListener("click",(event)=> {
//   event.preventDefault();//voir mdm
});