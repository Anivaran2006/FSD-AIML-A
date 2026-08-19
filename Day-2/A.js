// //Variables
// console.log("===== Variables =====");
// var name="Anivaran";
// var surname="Dubey";
// console.log(name);
// console.log(surname)
function abes(){
    console.log("Welcome Students");
    console.log("Welcome to Node.js");
}
abes();
console.log("Function with Parameter");
function greet(fname,lname){
    console.log("Hello",fname,lname);
}
greet("Anivaran","Dubey");
greet("Waseem","jafar");
console.log("\----Function return----");
function add(x,y){
    return x+y;
}
var result=add(20,40);
console.log("Sum of two number:",result);
console.log("\n----Default Arguments----");
function fullName(fname="ABES", lname="Engineering College"){
    return fname+" "+lname;
}
console.log(fullName());
console.log(fullName("Anivaran","Dubey"));
console.log("\n----Percentage----");

function totalMarks(math, english, science) {
    return math + english + science;
}

function percentage(total) {
    return (total / 300) * 100;
}

var total = totalMarks(80, 56, 78);

console.log("Total marks =", total);
console.log("Percentage =", percentage(total));
