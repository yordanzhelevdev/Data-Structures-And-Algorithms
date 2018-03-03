/* Exercises */


/*Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.*/

function Student() {
	this.grades = [];
	this.add = add;
	this.average = average;
};

function add(grade){
	this.grades.push(grade);
};

function average(){
	var total = 0;
	var average = 0.0;

	for(var i = 0; i < this.grades.length; i++){
		total += this.grades[i] 
	}

	average = total / this.grades.length;
	return average.toFixed(2);
};



/*Store a set of words in an array and display the contents both forward and backward.*/

//Array for testing
var strArr = ['My', 'name', 'is', 'Yordan', 'and', 'I', 'am', 'from', 'Bulgaria'];

// Display function
// We take 2 arguments. The first argument is the array and the second is how to display the array

 function arrayToString(arr, display) {
 	if (display == 'forward') {
 		return arr.join(' ');
 	} else if (display == 'backward') {
 		return arr.reverse().join(' ');
 	}
}


/*
Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly aver‐
age, a specific week’s average, and all the weeks’ averages.
*/

function weekTempts(){
	this.weekData = [[40,50,60], [30,20,20], [50,20,44]];
	this.averageMonth = averageMonth;
	this.specificWeek = specificWeek;
	this.allWeeks = allWeeks;
}

function averageMonth(){
	var total = 0;
	var averageMonth = 0.0;
	var days = 0;

	for(var row = 0; row < this.weekData.length; row++){
		for(var col = 0; col < this.weekData[row].length; col++){
			total += this.weekData[row][col];
			days += 1;
		}
	}
	averageMonth = total / days;
	return averageMonth.toFixed(2);
}

function specificWeek(week) {
 	var total = 0;
 	var specWeek = 0.0;

 	for(var i = 0; i < this.weekData[week].length; i++){
 		total += this.weekData[week][i];
 	}
 	specWeek = total / this.weekData[week].length
 	return specWeek.toFixed(2);
}

function allWeeks(){
	var total = 0;
	for(var row = 0; row < this.weekData.length; row++){
		for(var col = 0; col < this.weekData[row].length; col++){
			total += this.weekData[row][col];
		}
		console.log('Week ' + (row + 1) + ' ' + total / this.weekData[row].length);
		total = 0;
	}
}

/*Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word.*/

function Letters() {
	this.letters = ['e', 'x', 'e', 'r', 'c', 'i', 's', 'e'];
	this.fullWord = fullWord;
	this.addLetter = addLetter;
}

function fullWord(){
	return this.letters.join('');
}

function addLetter(letter){
	this.letters.push(letter);
}