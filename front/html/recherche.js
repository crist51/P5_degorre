
//retrouver un element grase a son id 
//retrouver un element grase a sa classe
//fonction pour cercher les parent et les enfant d'un element

document.getElementById(KanapDescrition);
// chercher un element précis ex: pour html <p id="my-anchor">My content</p>

// document.getElementsByClassName();
// chercher un element dans les class ex: pour html <p class="rouge-test">My content</p>
document.getElementsByClassName('rouge test')


// document.getElementsByTagName();
// chercher un element dans les element ex "a"
// getElementsByTagName("a");

// var elt = document.getElementById();
//recherche les enfant ex :les enfant de main
var elt = document.getElementById("main");


// document.querySelector("#myId p.article > a")
//complexe element classe miId et ayant pour classe article dans le but de réupérer les lien a en enfant directe
const a = document.querySelector("#myId p.article > a");


//element ayent pour id main-content
console.log("#main-content", document.getElementById("main-content"));
//class important
console.log(".important", document.getElementsByClassName("important"));
//element article
console.log("article", document.getElementsByTagName("article"));
//element li dans un ul  class important dans un article
const liItem = document.querySelector("article ul.important > li");
console.log("article ul.important > li", liItem);




/* recherche creation element + img sur le net*/


function afficher(monForm)
		{	
			var i=0;
			var long=monForm["nomImg"].value.length;
			for (i=0; i<long; i++)
			{	var conteneur = document.getElementById('imgAInserer');//La div qui va accueillir les images
				var monImg = document.createElement('img');//Création d'une image vide
				var regelText = /^[a-zA-Z]$/;
				if (regelText.test(monForm["nomImg"].value.charAt(i)))//On test la valeur de l'input
				{	monImg.src = "test" +".jpeg";//On définit la source de l'image
					conteneur.appendChild(monImg);
				}
				else {
				monImg.src = "image/image_default.gif";//On définit la source de l'image
				conteneur.appendChild(monImg);//On ajoute l'image dans le conteneur
				}
			}
		}
