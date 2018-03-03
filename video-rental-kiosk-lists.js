//Require nodejs filesync
var fs  = require("fs");

//Require readline to get the user input from the terminal
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function List() {
	this.listSize = 0; //the number of elements in the list
	this.pos = 0; // current position in list
	this.dataStore = []; // data
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
	this.addLarger = addLarger;
	this.addSmaller = addSmaller;
}

//Append: Adding an Element to a List
function append(element) {
	this.dataStore[this.listSize++] = element;
}

//Find: Finding an Element in a List
function find(element) {
	for (var i = 0; i < this.dataStore.length; i++){
		/*If the element is found, the function returns the position 
		where the element was found.*/
		if(this.dataStore[i] == element) { 
			return i;
		}
	}
	return - 1;
}

//Remove: Removing an Element from a List
function remove(element) {
	var foundAt = this.find(element);
	if(foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

// Length: Determining the Number of Elements in a List
function length() {
	return this.listSize;
}

//toString: Retrieving a List’s Elements
function toString() {
	return this.dataStore;
}

//Insert: Inserting an Element into a List
function insert(element, after) {
	var insertPos = this.find(after);
	if(insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

//Clear: Removing All Elements from a List
function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

//Contains: Determining if a Given Value Is in a List
function contains(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

//Traversing a List
function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	if(this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if (this.pos < this.listSize - 1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

/*1.Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values.*/

function addLarger(element) {
	var larger;
	for(var i = 0; i < this.dataStore.length; i++) {
		if(typeof element == typeof this.dataStore[i]) {
			if(element > this.dataStore[i]) {
				larger = element;
				this.append(element);
				return;
			}
		}
	}
}

/*2. Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list.*/
function addSmaller(element) {
	var smaller;
	for(var i = 0; i < this.dataStore.length; i++) {
		if(typeof element == typeof this.dataStore[i]) {
			if(element < this.dataStore[i]) {
				smaller = element;
				this.append(element);
				return;
			}
		}
	}
}



//Customers and Movie lists
function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}


function checkOut(name, movie, filmList, customerList) {
	if (movieList.contains(movie)) {
		var c = new Customer(name, movie);
		customerList.append(c);
		rentedMovies.append(movie);
		filmList.remove(movie);
	}
	else{
		console.log(movie + ' is not available');
	}
}

// 5. Create a check-in function for the video-rental kiosk program so that a returned
// movies is deleted from the rented movies list and is added back to the available
// movies list.

function returnMovie(movie) {
	for (var i = 0; i < rentedMovies.dataStore.length; i++){
		if(movie == rentedMovies.dataStore[i]) {
			movieList.append(movie);
			rentedMovies.remove(movie);
		}
	}
}

// //Looping through the dataStore elements
function displayList(list) {
	for(var i = 0; i < list.dataStore.length; i++) {
		if(list.dataStore[i] instanceof Customer){
			 console.log(list.dataStore[i].name + ' '+ list.dataStore[i].movie);
		}		
		else{
			console.log(list.dataStore[i]);
		}
	 } 
}

var movies = fs.readFileSync('films.txt').toString().split('\n');
var movieList = new List();
var customers = new List();


/*4. Modify the video-rental kiosk program so that when a movie is checked out it is
added to a list of rented movies. Display this list whenever a customer checks out
a movie.*/
var rentedMovies = new List();


for (var i = 0; i < movies.length; i++) {
	movieList.append(movies[i]);
}

console.log('Available movies: \n');
displayList(movieList);

rl.question('Enter your name: ', (name) => {
	var name; 
	var movie;

	rl.setPrompt('What movie would you like? ');
	rl.prompt();
	
	rl.on('line', (movie) => {
		movie = movie;
		checkOut(name, movie, movieList, customers);
		rl.close();
	});

	 	rl.on('close', () => {
	 	console.log('\n~~~~~~Customer Rentals~~~~~~: \n')
		displayList(customers);
		console.log('\n~~~~~~Movies Now Available~~~~~~\n')
		displayList(movieList);
		console.log('\n~~~~~~Rented Movies~~~~~~: \n')
		displayList(rentedMovies);
		console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~: \n');
		process.exit();
	 })
});
