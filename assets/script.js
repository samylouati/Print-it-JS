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

console.log(slides); // pour voir le nombre d'element dans mon tableau "slides"

// element du DOM à recupérer :

let arrow_left = document.querySelector('.arrow_left'); // fleche de gauche > la class
console.log(arrow_left);
let arrow_right = document.querySelector('.arrow_right'); // fleche de droite > la class
console.log(arrow_right);
const bannerImg = document.querySelector('.banner-img'); // l'image active > la class
console.log()
const bannertagLine = document.querySelector('#banner p'); // le p, slogan de l'image active > le p dans l'id 

// evenements fleches : 

arrow_left.addEventListener('click', function(){ //devrait gerer l'evenement click de la fleche de gauche
    console.log('click à gauche');
});

arrow_right.addEventListener('click', function(){ //devrait gerer l'evenement click de la fleche de droite
    console.log('click a droite');
});

let index = 0; // je definis un index
console.log(index);

function display(index) { // je definis une fonction qui montre l'image active 
	console.log('index active :' +index);
	console.log('Image ' +slides[index].image); // je vais chercher l'image dans le tableau slides
	console.log('tagLine ' + slides[index].tagLine); // je vais chercher le TagLine dans le tableau
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // sert à indiquer le chemins des images 
	bannertagLine.innerHTML = slides[index].tagLine; // change le texte selon la Tagline
	
}

arrow_left.addEventListener('click', function() { // evenement au click de la fleche gauche
    index--; // on incremente de -1 dans le tableau
	display(index); // on appel test en lui passant le nouvel index (l'ancien -1)
});

arrow_right.addEventListener('click', function(){ 
    index++; // on incrémente index (+1)
    display(index); // on appel test en lui passant le nouvel index (l'ancien +1)
    }
);

