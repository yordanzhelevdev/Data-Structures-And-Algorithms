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


var names = new List();

names.append('yest');
names.append('DS');

//Looping through the dataStore elements
for(var i = 0; i < names.dataStore.length; i++) {
  console.log(names.dataStore[i]);
} 

//Looping through the dataStore elements backwards
for(var i = names.dataStore.length - 1; i >= 0; i--){
	console.log(names.dataStore[i]);
}
