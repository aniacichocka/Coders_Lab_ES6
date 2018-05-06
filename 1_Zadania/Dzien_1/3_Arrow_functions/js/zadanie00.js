var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {
	// this.numberOfLetters = this.names.map(function(e){
	// 	return e.length;
	// })
	this.numberOfLetters = this.names.map(e => e.length);
}
var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.names);
console.log(students.numberOfLetters);
