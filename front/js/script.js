fetch("http://localhost:3000/api/products")
.then(function(response){
  return response.json();
}).then(function(reponceAPI){
  console.log(reponceAPI);

  /*ligneObjetProduct*/

var ligneObjetProduct = 0;//partit de objet concerné
while (ligneObjetProduct < [8]){
//--------------création lien index href
  var lienProduct = document.createElement("a");
  lienProduct.href = "product.html?id="+ reponceAPI[ligneObjetProduct]._id;
  lienProduct.title = "lien vers canape;"
  items.appendChild(lienProduct)

//--------------création article index
  var article = document.createElement("article");
  lienProduct.appendChild(article);

//--------------création image index
   const numberImgKanap = ligneObjetProduct +1;
      var kanapImg = document.createElement("img");
          kanapImg.src = "../../back/images/kanap0" + numberImgKanap +".jpeg";
          kanapImg.alt = (reponceAPI[ligneObjetProduct].altTxt);
      article.appendChild(kanapImg);

//--------------création productName
      var kanapName = document.createElement("h3");
          kanapName.textContent = ((reponceAPI[ligneObjetProduct].name))
          kanapName.classList.add("productName");
      article.appendChild(kanapName);

//--------------création kanapDescription
      var kanapDescription = document.createElement("p");
          kanapDescription.classList.add("productDescription");
          kanapDescription.textContent = ((reponceAPI[ligneObjetProduct].description));
      article.appendChild(kanapDescription);

//--------------changement de ligne du tableau
ligneObjetProduct++;
}
});
