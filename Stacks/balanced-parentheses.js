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




function checkParentheses(str) {
	var stack = new Stack();
	var isBalanced = true;

	for (var i = 0; i < str.length; i++) {
		if (str[i] == '(') {
			stack.push(str[i]);
		} else if (str[i] == ')') {
			if (stack.length() > 0) {
				stack.pop();
			} else {
				isBalanced = false;
			}
		}
	}

	if (stack.length() > 0) {
		isBalanced = false;
	}

	return 'Are the parentheses balanced : ' + isBalanced;
}

checkParentheses('(5+6)∗(7+8)/(4+3)');
