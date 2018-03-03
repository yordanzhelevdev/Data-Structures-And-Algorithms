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


//Function for checking the operator priority
function checkPriority(symbol) {
	switch (symbol) {
		case '*':
		case '/':
			return 3;
		case '+':
		case '-':
			return 2;
		case '(':
			return 1;
	}
}

function infixToPostfix(expr) {
	var postfix = new Stack();
	var operators = new Stack();
	//regex for checking if a num or a letter
	var alphabetAndNums = /[a-zA-Z0-9]/g;

	for (var i = 0; i < expr.length; i++) {

		//If it's number or letter, push it to the postfix
		if (alphabetAndNums.test(expr[i]) && expr[i] != ' ') {
			postfix.push(expr[i])
		}

		//If the symbol is left bracket, then push it in the operartors stack
		else if (expr[i] == '(') {
			operators.push(expr[i])
		}

		//If the symbol is right bracket then pop the last value from operators and assign it in a variable  
		//Then loop if the top operator is different than left bracket
		//if it's different then push it in the postfix stack and assign the last operator in the variable
		else if (expr[i] == ')') {
			var top = operators.pop();
			while (top != '(') {
				postfix.push(top);
				top = operators.pop();
			}
		}
		//if the operators is empty, set it to true then check the priority
		//if the last operator element has bigger or equal priority than the incoming symbol then
		// then the last operator in the postfix stack
		// if not then I check if the current symbol is different than empty string and if true then push it into the operators stack
		else {
			while (!operators.isEmpty() && checkPriority(operators.peek()) >= checkPriority(expr[i])) {
				postfix.push(operators.pop());
			}

			if (expr[i] != ' ') {
				operators.push(expr[i]);
			}

		}
	}

	//there I push the last values from the operators into the postfix stack
	while (!operators.isEmpty()) {
		postfix.push(operators.pop());
	}

	return postfix.dataStore.join(' ');
}

console.log(infixToPostfix('A + B * C'));