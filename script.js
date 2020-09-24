// Function constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function() {
        console.log(2016-this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';



var john = new Person('John', 1990, 'teacher');


var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


var Team = function(city, name, championships) {
    this.city = city;
    this.name = name;
    this.championships = championships; 
}

var lakers = new Team('Los Angeles', 'Lakers', 16);
var clippers = new Team('Los Angeles', 'Clippers', 0);
console.log(lakers);
console.log(clippers);

Team.prototype.headCoach = this.headCoach; 

console.log(lakers);

lakers.headCoach = "Frank Vogel";
*/


/*
// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane'},
        yearOfBirth: { value: 1969 },
        job: {value: 'designer'}
    });

*/

// Priitives vs objects

/*
// Primatives
var a = 23;
var b = a;
a = 46;
console.log(a,b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/
/////////////////////////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >=18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/


/////////////////////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {    // Anonymous function
            console.log(name + ', can you please explain UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    } 
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');


function playerQuestion(position) {
    if (position === 'point guard') {
        return function(name) {
            console.log(name + ' plays point guard.');
        }
    } else {
        return function(name) {
            console.log('Plays something else');
        }
    }
};

var playerPointGuard = playerQuestion('point guard');

playerPointGuard('Rondo');


*/


////////////////////////////////////////
// Lecture: IIFE - immedieatly invoked function expression 

/*
// First Way
function game() {
    var score = Math.random() *10;
    console.log(score >= 5);
}

game();
*/

/*
// Data Private Way
(function () {
    var score = Math.random() *10;
    console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
    var score = Math.random() *10;
    console.log(score >= 5 - goodLuck);
})(5);

*/

////////////////////////////////////
// Lectures: Closures
/*
function retirement(retirementAge){
    var a = ' years left until retirment.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUSA = retirement(66);
retirementUSA(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUSA(1990);
retirementIceland(1990);

*/

//retirement(66)(1990);

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {    // Anonymous function
            console.log(name + ', can you please explain UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    } 
}
*/

/*

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/


//////////////////////////////////////////////////
// Lecture: Bind, Call and Apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};



john.presentation('formal', 'morning'); 

// call method - allows you to set "this" variable to emily
john.presentation.call(emily, 'friendly', 'afternoon');

// apply method - similar to call but difference is it accepts arguments as an array
//john.presentation.apply(emily, ['friendly'], ['afternoon'])

// bind method - similar to call. allows us to set this" variable, but bind doesn't immediately call the function but instead it generates a copy to store somewhere.
// Useful to create functions with preset arguments 

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');




var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); // the same as ages but difference is we use bind to preset a parameter in the full age function (to 20)
console.log(ages);
console.log(fullJapan);
*/

////////////////////////////////////////
// Coding Challenge 7

// 1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adwquate data structure here, array, object, etc.)
// c) correct answer (I would use a number for this)

/*
var Question = function(question, a, b, c, correct) {
    this.question = question;
    this.answers = [a, b, c];
    this.correct = correct;
}

var championships = new Question('How many championships have the Los Angeles Lakers won?', 15, 16, 17, '1');
var headCoach = new Question('Who is the Los Angeles Lakers\' head coach?', 'Frank Vogel', 'Nick Nurse', 'Doc Rivers', '0');
var bestPlayer = new Question('Who is the best player on the Los Angeles Lakers?', 'Anthony Davis', 'Kwahi Leonard', 'LeBron James', '2');

questions = [championships, headCoach, bestPlayer]; 

Question.prototype.askQuestion = function() {
    console.log(this.question)
    for ( i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }

    answer = window.prompt('Select the correct answer (type in number)');

    this.checkAnswer();
    
}

Question.prototype.checkAnswer = function() {
    if (answer === this.correct) {
        console.log('Correct!');
    } else {
        console.log('Incorrect');
    }    
}

var questionNumber = Math.floor(Math.random() * Math.floor(3));
(questions[questionNumber].askQuestion)();
*/

////////////////////////////////////////
// Coding Challenge 7: Expert Level 


// Question Constructor
var Question = function(question, a, b, c, correct) {
    this.question = question;
    this.answers = [a, b, c];
    this.correct = correct;
}

// Ask Question
Question.prototype.askQuestion = function() {
    console.log(this.question)
    for ( i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }

    answer = window.prompt('Select the correct answer (type in number)');

    this.checkAnswer();
    
}

// Check correct answer
Question.prototype.checkAnswer = function() {
   
    if (answer === 'exit') {
        gamePlaying = false;
    } else if (answer === this.correct) {
        console.log('Correct!');
    } else {
        console.log('Incorrect');
    }    
    nextQuestion();
}

// Questions
var championships = new Question('How many championships have the Los Angeles Lakers won?', 15, 16, 17, '1');
var headCoach = new Question('Who is the Los Angeles Lakers\' head coach?', 'Frank Vogel', 'Nick Nurse', 'Doc Rivers', '0');
var bestPlayer = new Question('Who is the best player on the Los Angeles Lakers?', 'Anthony Davis', 'Kwahi Leonard', 'LeBron James', '2');
var questions = [championships, headCoach, bestPlayer]; 
var gamePlaying; 

init();

function init() {
    gamePlaying = true; 
    var questionNumber = Math.floor(Math.random() * Math.floor(3));
        (questions[questionNumber].askQuestion)();
}

function nextQuestion() {
    if (gamePlaying) {
        var questionNumber = Math.floor(Math.random() * Math.floor(3));
        questions[questionNumber].askQuestion();
    }
}


