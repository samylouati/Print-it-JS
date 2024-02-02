const slides = [
	{	
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

console.log(slides.length) // pour voir le nombre d'elements dans le tableau "slides" + lenght

// elements du DOM à recupérer 

let arrow_left = document.querySelector('.arrow_left'); // je recupere la fleche de gauche > sa class
let arrow_right = document.querySelector('.arrow_right'); // je recupere la fleche de droite > sa class
const bannerImg = document.querySelector('.banner-img'); // je recupere l'image active > sa class
const bannerTagLine = document.querySelector('#banner p'); // je recupere le p dans l'id #banner

// fonctions

let currentSlideIndex = 0; // je definis un Index pour l'image en cours
console.log(currentSlideIndex); // console pour voir l'image en cours

// fonction : si l'image et 0 (la premiere) alors je vais sur la derniere
//				si l'image est la derniere, alors je vais sur la premiere
function display(Index) {
	if (Index < 0) {
		currentSlideIndex = slides.lenght -1;
	}
	else if (Index > slides.length -1) {
		currentSlideIndex = 0
	}
	console.log(Index) // console pour voir la nouvelle Image en cours
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`; // montre le chemin de l'image
	bannerTagLine.innerHTML = slides[currentSlideIndex].tagLine; // change le texte selon la Tagline
}

// fonction : image suivante
function nextSlide () { // nom de la fonction
	currentSlideIndex++; // j'ajoute +1 à l'image en cours
	display(currentSlideIndex); // je montre l'image en cours
	// mettre à jours le dot_selected
}

//fonction : image precedente
function previousSlide() { // nom de la fonction
	currentSlideIndex--; // je retire -1 à l'image en cours
	display(currentSlideIndex) // je montre l'image en cours
}

// evenement pour les fleches 

arrow_left.addEventListener('click', previousSlide); //au click sur la fleche de gauche, je veux aller sur l'image -1 
arrow_right.addEventListener('click', nextSlide); //au click sur la fleche de droite, je veux aller sur l'image +1

//Pour chaque (forEach) elements du tableau slides
//Je créé un element (createElement) HTML que je glisse en enfant dans la div "dots"

//function updateDots (parametre index) pour gerer le deplacement de la class dot_selected sur mes dot
// On retire à toutes les dots la class dot_selected
// Je prend le dot de l'index en cours et je lui met en class dot_selected
