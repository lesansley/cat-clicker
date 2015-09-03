$(function() {
	var model = {
		currentCat: null,
		cats: [
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
		getCurrentPet: function() {
			return model.currentCat;
		},
		setCurrentPet: function(cat) {
			model.currentCat = cat;
			imageView.display===false ? imageView.init() : imageView.render();
			imageView.display = true;
		},
		incrementCounter: function() {
			this.getCurrentPet().counter++;
		},
		getPets: function() {//needs to return a JSON array of cats
			return model.cats;
		},
		init: function() {
			listView.init();
		}
	};

	var listView = {
		init: function() {
			listView.render();
		},
		render: function() {
			var cat;
			var cats = octopus.getPets();
			console.log(cats);

			this.catList = $('#cat-list');

			for(var i = 0; i < cats.length; i++) {
				var catSelect = document.createElement('button');
				cat = cats[i];
				catSelect.textContent = cat.name;
				catSelect.addEventListener('click', (function(catCopy) {
			        return function() {
			            octopus.setCurrentPet(catCopy);
			        };
			    })(cat));
				this.catList.append(catSelect);
			};
		}
	};

	var imageView = {
		display: false,

		init: function() {
			this.name = document.getElementById('cat-name');
			this.image = document.getElementById('cat-image');
			this.counter = document.getElementById('cat-counter');
			this.image.addEventListener('click', function() {
				octopus.incrementCounter();
				this.render();
			});
			this.render();
			formView.init();
		},

		render: function() {
			this.pet = octopus.getCurrentPet();
			this.name.innerHTML = this.pet.name;
			this.image.src = this.pet.url;
			this.image.alt = this.pet.alt;
			this.counter.innerHTML = this.pet.counter;
		}
	};

	var formView = {
		status: 'hidden',

		init: function() {
			this.admin = document.getElementById('admin-btn');
			console.log(this.admin);
			this.change = document.getElementById('cat-details');
			this.admin.addEventListener('click', function() {
				formView.render();
			});
			console.log(this.change);
		},

		render: function() {
			var data = new FormData(document.querySelector('form'));
			this.change.style.visibility = 'visible';
			this.change.addEventListener('submit', function(e) {
				console.log(data);
				e.preventDefault();
			});
		}
	}
	octopus.init();
});