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
		},
		changePet: function(name, url, count) {
			if(name!=='') this.getCurrentPet().name = name;
			if(url!=='') this.getCurrentPet().url = url;
			if(count!=='') this.getCurrentPet().counter = count;
			console.log(this.getCurrentPet());
		}
	};

	var listView = {
		init: function() {
			listView.render();
		},
		render: function() {
			var cat;
			var cats = octopus.getPets();

			this.catList = document.getElementById('cat-list');
			while(this.catList.childNodes.length>0) {
				this.catList.removeChild(this.catList.childNodes[0]);
			}


			for(var i = 0; i < cats.length; i++) {
				var catSelect = document.createElement('button');
				cat = cats[i];
				catSelect.textContent = cat.name;
				catSelect.addEventListener('click', (function(catCopy) {
			        return function() {
			            octopus.setCurrentPet(catCopy);
			            formView.status = 'hidden';
			            formView.render();
			        };
			    })(cat));
				this.catList.appendChild(catSelect);
				console.log(this.catList.childNodes[0]);
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
				imageView.render();
				formView.render();
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
			this.name = document.getElementById('cat-form-name');
			this.url = document.getElementById('cat-form-url');
			this.counter = document.getElementById('cat-form-counter');
			this.form = document.getElementById('cat-details');
			this.admin.style.visibility = 'visible';
			this.admin.addEventListener('click', function() {
				formView.status = 'visible';
				console.log(formView.status);
				formView.render();
			});
			this.form.addEventListener('submit', function(e) {
				var newName = document.getElementById('cat-form-name').value;
				var newUrl = document.getElementById('cat-form-url').value;
				var newCount = document.getElementById('cat-form-counter').value;
				octopus.changePet(newName, newUrl, newCount);
				listView.render();
				imageView.render();
				formView.render();
				e.preventDefault();
			});
			this.form.addEventListener('reset', function(e) {
				formView.render();
				e.preventDefault();
			});
		},

		render: function() {
			this.form.style.visibility = formView.status;
			this.name.value = octopus.getCurrentPet().name;
			this.url.value = octopus.getCurrentPet().url;
			this.counter.value = octopus.getCurrentPet().counter;
		}
	}
	octopus.init();
});