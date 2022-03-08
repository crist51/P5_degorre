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
while (color < reponceAPI.colors.length) {
    var colorOption = document.createElement("option");
    colorOption.text = (reponceAPI.colors[color]);  
    colors.appendChild(colorOption);//On ajoute option dans l'ID;
    color++;
}
});
