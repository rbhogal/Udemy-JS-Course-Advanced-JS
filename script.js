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
// Lecture: IIFE - immedieatly invoked funciotn expression 

/*
function game() {
    var score = Math.random() *10;
    console.log(score >= 5);
}

game();
*/

/*

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

function retirement(retirementAge){
    var a = ' years left until retirment.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUSA = retirement(66);
retirementUSA(1990);

retirement(66)(1990);
