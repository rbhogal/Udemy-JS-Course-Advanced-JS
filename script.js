// Function constructor

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


