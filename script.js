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

