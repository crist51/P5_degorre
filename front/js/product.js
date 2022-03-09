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

//--------------création des option

var color= 0

//-----------------------------ce que j'ai fait---------------------------------
while (color < reponceAPI.colors.length) {
    var colorOption = document.createElement("option");//création d'option
    colorOption.value = color;//ajout de la valeur sur l'option
    colorOption.text = (reponceAPI.colors[color]);  //ajout du texte dans l'option
    console.log(reponceAPI.colors[color]);
    colors.appendChild(colorOption);//On ajoute option dans le HTML;
    color++;
  }

console.log(colors);

// //Selection de l'id du form
// const id_form = document.querySelector ("#option_produit")
// console.log(id_form);
// //metre le choix de l'utilisateur dans une varriable 14.29
// const choixForm = idForm.value
// console.log(choixForm);

// //select le bouton dans le dom
// const envoyerPanier = document.querySelector("#envoyer")
// //ecouter le bouton
// envoyerPanier.addEventListener("click",(event)=> {
//   event.preventDefault();//voir mdm


});