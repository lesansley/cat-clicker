$(function() {
	var model = {
		init: function() {

		},

		select: function() {

		},

		getAllPets: function() {

		},

		'cats': [
			{
				name: 'Bella',
				url: 'images/bella.jpg',
				alt: 'Bella cat',
				counter: '0'
			},
			{
				name: 'Minnie',
				url: 'images/minnie.jpg',
				alt: 'Minnie cat',
				counter: '0'
			},
			{
				name: 'Poppy',
				url: 'images/poppy.jpg',
				alt: 'Poppy cat',
				counter: '0'
			},
			{
				name: 'William',
				url: 'images/william.jpg',
				alt: 'William cat',
				counter: '0'
			},
			{
				name: 'Sevi',
				url: 'images/sevi.jpg',
				alt: 'Sevi cat',
				counter: '0'
			}
		]
	};

	var octopus = {
		selectPet: function() {

		},
		clickPet: function() {

		},
		getPets: function() {

		},
		init: function() {

		}
	};

	var listView = {
		init: function() {

		},
		render: function() {

		}
	};

	var imageView = {
		render: function() {

		}
	};
});

var pets = {
	'cats': [
		{
			name: 'Bella',
			url: 'images/bella.jpg',
			alt: 'Bella cat',
			counter: '0'
		},
		{
			name: 'Minnie',
			url: 'images/minnie.jpg',
			alt: 'Minnie cat',
			counter: '0'
		},
		{
			name: 'Poppy',
			url: 'images/poppy.jpg',
			alt: 'Poppy cat',
			counter: '0'
		},
		{
			name: 'William',
			url: 'images/william.jpg',
			alt: 'William cat',
			counter: '0'
		},
		{
			name: 'Sevi',
			url: 'images/sevi.jpg',
			alt: 'Sevi cat',
			counter: '0'
		}
	]
};

var catIndex;

function loadCat(index) {
	var name = document.getElementById('cat-name');
	var image = document.getElementById('cat-image');
	var counter = document.getElementById('cat-counter');
	var container = document.getElementById('image-container');

	catIndex = index;

	console.log('index: ' + index);
	console.log('catIndex: ' + catIndex);

	name.innerHTML = pets.cats[index].name;
	image.src = pets.cats[index].url;
	image.alt = 'Picture of ' + pets.cats[index].name;
	counter.innerHTML = pets.cats[index].counter;
}

document.getElementById('cat-image').addEventListener('click', function() {
        imageClick(catIndex);
    });

function imageClick(index) {
	console.log(index);
	var counter = document.getElementById('cat-counter');
	pets.cats[index].counter++;
	counter.innerHTML = pets.cats[index].counter;	
}

function loadList() {
	var HTMLlistOfCats = '<li class="cat-item" onClick="loadCat(%param%)">%name%</li>';
	var allCats = '';
	var list = document.getElementById('cat-list');
	for(cat in pets.cats) {
		var catItem = HTMLlistOfCats.replace('%name%', pets.cats[cat].name);
		catItem = catItem.replace('%param%', cat);
		allCats += catItem;
	}
	list.innerHTML = allCats;
}

document.body.onload = function() {
	loadList ();
};

