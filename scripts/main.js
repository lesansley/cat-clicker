$(function() {
	var model = {
		init: function() {

		},

		select: function(index) {
			return model.cats[index];
		},

		getAllPets: function() {
			return model.cats;
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
		selectPet: function(index) {
			var currentPet = model.select(index);
			imageView.init(currentPet);
		},
		clickPet: function() {

			imageView.init();
		},
		getAll: function() {//needs to return a JSON array of cats
			return model.getAllPets();
		},
		init: function() {
			model.init();
			listView.init();
		}
	};

	var listView = {
		init: function() {
			listView.render();
		},
		render: function() {
			var catList = $('#cat-list');
			var htmlListOfCats = '';
			var petIndex = 0;
			console.log(octopus.getAll());
			octopus.getAll().forEach(function(cat) {
				var catSelect = document.createElement('button');
				catSelect.textContent = cat.name;
				catSelect.addEventListener('click', (function(petIndex) {
			        return function() {
			            alert(petIndex);
			        };
			    })(petIndex));
			    petIndex++;
				console.log(catList);
				catList.append(catSelect);
			});
		}
	};

	var imageView = {
		init: function(pet) {
			this.container = $('#image-container');
			this.catContainer = $('#cat-container');
			this.catCounter = $('#cat-counter');
			this.catName = 	$('#cat-name');
			imageView.render(pet);
		},
		render: function(pet) {

		}
	};
	console.log(model.cats);
	octopus.init();
});

/*
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

*/