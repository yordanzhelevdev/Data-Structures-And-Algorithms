function Stack() {
	this.dataStore = [];
	this.push = push; // push new element into the stack
	this.pop = pop; // remove and return the top element
	this.peek = peek; // only return the top element 
	this.length = length; // returns how many elements I have in the stack
	this.clear = clear; // clear the stack
	this.isEmpty = isEmpty; //check if the dataStore is empty
}

function push(element) {
	this.dataStore.push(element);
}

function pop() {
	return this.dataStore.pop();
}

function peek() {
	return this.dataStore[this.dataStore.length - 1];
}

function isEmpty() {
	return this.dataStore.length == 0;
}

function length() {
	return this.dataStore.length;
}

function clear() {
	this.dataStore = [];
}


var pezDispencer = new Stack();

pezDispencer.push('yellow');
pezDispencer.push('blue');
pezDispencer.push('white');
pezDispencer.push('yellow');
pezDispencer.push('yellow');
pezDispencer.push('pink');


function removePezElement(element) {
	var filteredPezDispencer = new Stack();
	
	while(!pezDispencer.isEmpty()) {
		if(pezDispencer.peek() == element) {
			pezDispencer.pop();
		}
		else{
			filteredPezDispencer.push(pezDispencer.pop());
		}
	}
    
    while(!filteredPezDispencer.isEmpty()){
      pezDispencer.push(filteredPezDispencer.pop());
    }
	return pezDispencer;
}



