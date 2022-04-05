
//recuperation id
var str = window.location.href
console.log(str);
var url = new URL(str);
var id = url.searchParams.get("id")
console.log(id);

if (id == null) {
  console.log("pas d'id");
  window.location.href = "http://127.0.0.1:5500/front/html/index.html";//----A MODIFIER

} else {
  console.log("une id a été trouvé");
}


fetch("http://localhost:3000/api/products/" + id)
  .then(function (response) {
    return response.json();
  })
  .then(function (reponceAPI) {
    console.log(reponceAPI);

    //--------------création lien img
    const kanapImg = document.createElement("img");
    kanapImg.src = (reponceAPI.imageUrl);
    kanapImg.alt = (reponceAPI.altTxt);
    kanapImg.classList.add("item__img");
    const articleIMG = document.querySelector(".item__img")
    articleIMG.appendChild(kanapImg)
    console.log(articleIMG);

    //--------------création title & price & description
    title.textContent = (reponceAPI.name);
    price.textContent = (reponceAPI.price);
    description.textContent = (reponceAPI.description);

    //-----------------------------color

    reponceAPI.colors.unshift("valeurDefaut"); // rajout d'une ligne au debut du tableau pour avoir une valeur

    var color = 1//On commence a 1 pour ne pas avoir la valeurDefaut
    while (color < reponceAPI.colors.length) {
      var colorOption = document.createElement("option");//création d'option
      colorOption.value = color;//ajout de la valeur sur l'option
      colorOption.text = (reponceAPI.colors[color]);  //ajout du texte dans l'option
      console.log(reponceAPI.colors[color]);
      colors.appendChild(colorOption);//On ajoute option dans le HTML;
      color++;
    }
    //-----------------------------quantity
    var inputQuantity = document.getElementById("quantity")
    inputQuantity.value = 0

    //-------------------------La gestion du panier

    //selectionner le btn dans le dom
    const envoyerPanier = document.querySelector("#addToCart")
    console.log(addToCart);

    //écouter le btn et envoyer dans le panier
    envoyerPanier.addEventListener("click", (event) => {
      event.preventDefault();

      //-------------------------couleur choisit En Dessous de click event
      var colorSelect = (reponceAPI.colors[colors.value])//color corespond a la select
      console.log(colorSelect);

      //-------------------------quantité voulut // en desous de color
      var quantity = Number(document.getElementById("quantity").value)//rajout Number
      console.log(quantity);

      //-------------------------condition de validation panier
      if (quantity > 100 || quantity <= 0 || colorSelect === "valeurDefaut") {
        alert("Veuillez indiquer une coloris" + "\n" + "Ou" + "\n" + "Veuillez indiquer le nombre de produit souhaité compris \"1\"  et \"100\"")
      } else {


        //-------------------------recuperation des valeur

        const panier = {//optionsProduit
          "colors": colorSelect,
          "_id": reponceAPI._id,
          "name": reponceAPI.name,
          //"price": reponceAPI.price,
          "imageUrl": reponceAPI.imageUrl,
          "altTxt": (reponceAPI.altTxt),
          "quantity": quantity,
        };
        console.log(panier);//panier enregistre

        //-------------------------local storage

        let produitEnregistrerDansLeLocalStorage = JSON.parse(localStorage.getItem("key"));//JSON.parse pour convertir JSON en JAVASCIPT

        if (produitEnregistrerDansLeLocalStorage) {//si y a des produit dans le local storage on rajoute un objet 

          let modif = false
          produitEnregistrerDansLeLocalStorage.forEach(produit => {
            if (produit._id == panier._id && produit.colors == panier.colors) {
              if (produit.quantity + panier.quantity <= 100) {
                produit.quantity += panier.quantity
              }else{
                produit.quantity = 100 //limite max
              }

              modif = true
            }
          });

          if (modif == false) {
            produitEnregistrerDansLeLocalStorage.push(panier);

          }
          console.log(produitEnregistrerDansLeLocalStorage);
          localStorage.setItem("key", JSON.stringify(produitEnregistrerDansLeLocalStorage));
          //JSON.stringify convertit le JAVASCRIPT en JSON

        }
        else {
          produitEnregistrerDansLeLocalStorage = [];//sinon on creer  la clef
          produitEnregistrerDansLeLocalStorage.push(panier)
          localStorage.setItem("key", JSON.stringify(produitEnregistrerDansLeLocalStorage));
        }
      }//conditon
    })//evenement click bt

  });//fetch