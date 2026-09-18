// //Variables
// console.log("===== Variables =====");
// var name="Anivaran";
// var surname="Dubey";
// console.log(name);
// console.log(surname)
// function abes(){
//     console.log("Welcome Students");
//     console.log("Welcome to Node.js");
// }
// abes();
// console.log("Function with Parameter");
// function greet(fname,lname){
//     console.log("Hello",fname,lname);
// }
// greet("Anivaran","Dubey");
// greet("Waseem","jafar");
// console.log("\----Function return----");
// function add(x,y){
//     return x+y;
// }
// var result=add(20,40);
// console.log("Sum of two number:",result);
// console.log("\n----Default Arguments----");
// function fullName(fname="ABES", lname="Engineering College"){
//     return fname+" "+lname;
// }
// console.log(fullName());
// console.log(fullName("Anivaran","Dubey"));
// console.log("\n----Percentage----");

// function totalMarks(math, english, science) {
//     return math + english + science;
// }

// function percentage(total) {
//     return (total / 300) * 100;
// }

// var total = totalMarks(80, 56, 78);

// console.log("Total marks =", total);
// console.log("Percentage =", percentage(total));
// console.log("====String object====");
// let name="Anivaran";
// console.log(name);
// console.log("=====String Methods=====");
// let str="Welcome Anivaran";
// // 1.toUpperCase
// console.log("UpperCase =",str.toUpperCase());
// // 2.toLowerCase
// console.log("LowerCase =",str.toLowerCase());
// // 3.Character
// console.log("Character at index 3 =",str.charAt(3));
// // 4.indexOf()
// console.log("Index of Java =",str.indexOf("Java"));
// // 5.lastIndexOf
// let message = "Javascript is easy. Javascript is powerful";
// console.log("Last index =", message.lastIndexOf("Javascript"));
// // 6.slice()
// console.log("Slice =", str.slice(0,7));
// // 7.split()
// let data = "HTML,CSS , JavaScript";
// let res = data.split(",");
// console.log("Split =", result);
// // 8.replace()
// let text = "I love Java";
// console.log(text.replace("Java","JavaScript"));
// // 9.concat()
// let first = "Anivaran";
// let last ="Dubey";
// console.log(first.concat(" ",last));
// console.log("====Includes====");
// let course = "Java";
// console.log(course.includes("Script"));
// var a = "Anivaran Dubey";
// console.log(a.includes("Aniv"));
// console.log(a.includes("aran"));
// console.log("=====Array Object====");
// let num=[10,20,50,56];
// console.log(num);
// console.log("------Array Method------");
// num.pop();
// console.log(num);
// console.log(num[0]);
// console.log(num[3]);
// let math = [12,34,56];
// console.log("Round =", Math.round(5.6));
//Object with method
// const a={
//     id:101,
//     name:"Anivaran",
//     sal:function(){
//         console.log("My id is ")
//     }
// }
// //Object with multi functions
// let c={
//     age:20,
//     job:"Teacher",
//     details:function(){
//         console.log("My age is:"+this.age);
//         console.log("My job is:"+this.job);
//     },
// }
// const a={
//     name:"Arush",
//     salary:210,
//     display:function(){
//         console.log("This is my name:"+this.name);
//         console.log("This is my salary:"+this.salary);
//     },
//     incsalary:function(){
//         this.salary=this.salary+5000
//     }
// };
// a.display();
// a.incsalary();
// function show(){
//     console.log("My add:"+this.add);
//     console.log("My city:"+this.city);
// }
// e={ add:"Abes",
//     city:"Ghaziabad",
//     show:show
// };
// d={
//     add:"Crossing",
//     city:"Noida",
//     show:show
// };
// e.show();
// d.show();
// function college(){
//     console.log("Name : "+this.name);
//     console.log("Roll : "+this.roll);
//     console.log("Branch : "+this.branch);
//     console.log("Section : "+this.sec);
// }
// dep={
//     name: "Anivaran Dubey",
//     roll : 27,
//     college:college
// };
// clas={
//     branch:"AIML",
//     sec:"A",
//     college:college
// };
// dep.college();
// clas.college();

// class Student {
//     constructor(name, marks, grade) {
//         this.name = name;
//         this.marks = marks;
//         this.grade = grade;
//     }

//     updateGrade() {
//         this.grade = "A+";
//     }

//     display() {
//         console.log("Name:", this.name);
//         console.log("Marks:", this.marks);
//         console.log("Grade:", this.grade);
//     }
// }

// let student = new Student("Ravi", 80, "A");

// student.updateGrade();

// student.display();
// function sum(...nums) {
//     let total = 0;

//     for (let num of nums) {
//         total += num;
//     }

//     console.log("Sum =", total);
//     return total;
// }

// sum(10, 20, 30, 40);

// function sum(nums, ...args) {
//     let total = nums;

//     for (let i of args) {
//         total = total + i;
//     }
//     console.log("hello Faraz");
//     console.log("total =", total);
//     return total;
// 
//  function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     return total;
// }

// let input = prompt("Enter numbers separated by spaces:");
// let numbers = input.split(" ").map(Number);

// console.log("Sum =", sum(...numbers));
//Without Constructor
// class A{
// name;
// name="Anivaran";
// show(){
//     console.log("My name is:"+this.name);
// }
// }
// let obj=new A();
// obj.show();
// //With constructor
// class B{
//     constructor(name){
//         console.log("My name is:"+name);
//     }
// }
// let obj1=new B("Anivaran");
// class hello{
// }
// let h1=new hello("A.D");
// //without constructor
// class hello2{
//     student="Anivaran";
// }
// let h2=new hello2();
// console.log(h2.student);
// //with constructor
// class SectionA {
//     constructor(name, rollNo, address, mobileNo) {
//         this.name = name;
//         this.rollNo = rollNo;
//         this.address = address;
//         this.mobileNo = mobileNo;
//     }
//     display() {
//         console.log("Name:", this.name);
//         console.log("Roll No:", this.rollNo);
//         console.log("Address:", this.address);
//         console.log("Mobile No:", this.mobileNo);
//     }
// }
// const students = [
//     new SectionA("Anivaran", 1, "Ghaziabad", "9876543210"),
//     new SectionA("Arush", 2, "Kanpur", "9876543211"),
//     new SectionA("Faraz", 3, "Lucknow", "9876543212"),
//     new SectionA("Dhruv", 4, "Meerut", "9876543213"),
//     new SectionA("Kanav", 5, "Kathua", "9876543214")
// ];
// students.forEach(student => student.display());

//Static member and function
// class A{
//     static name="This is static member";
//     static display(){
//         console.log(A.name);
//     }
// }
// A.display();
// class hello3{
//     static name="Example of static member";
//     static show(){
//         console.log("Hello class this is " + hello3.name);
//     }
// }
// hello3.show();
// //Static method with instance method without constructor
// class Student {
//     name = "Anivaran";
//     rollNo = 1;
//     static showCollege() {
//         console.log("College: ABES Engineering College");
//     }
//     displayStudent() {
//         console.log("Name:", this.name);
//         console.log("Roll No:", this.rollNo);
//     }
// }
// Student.showCollege();
// const student = new Student();
// student.displayStudent();
// class Student {
//     name = "Anivaran";
//     lastName = "Dubey";

//     static showCollege() {
//         console.log("College: ABES Engineering College");
//     }

//     show() {
//         console.log(`First name: ${this.name}`);
//         console.log(`Last name: ${this.lastName}`);
//     }
// }

// Student.showCollege();
// const student = new Student();
// student.show();
//University Student  Management System
class student {
    static studentCount = 0;
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
        student.studentCount++;
    }
    static displayTotalStudents() {
        console.log("Total students:", student.studentCount);
    }
    displayResult() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Marks:", this.marks);
        console.log("Result:", this.marks >= 40 ? "Passed" : "Failed");
    }
}
const student1 = new student("Anivaran", 1, 78);
const student2 = new student("Utkarsh", 2, 30);
const student3 = new student("Faraz", 3, 80);
student1.displayResult();
student2.displayResult();
student3.displayResult();
student.displayTotalStudents();
//Bank Account Management System
class BankAccount {
    static bankName = "ABES Bank";
    static totalAccounts = 0;
    constructor(accountNo, holderName, balance = 0) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
        BankAccount.totalAccounts++;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= amount;
        console.log("Withdrawn:", amount);
    }
    displayDetails() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance);
    }
    static displayBankDetails() {
        console.log("Bank Name:", BankAccount.bankName);
        console.log("Total Accounts:", BankAccount.totalAccounts);
    }
}
const account1 = new BankAccount("AB001", "Anivaran", 10000);
account1.deposit(2500);
account1.withdraw(1500);
account1.displayDetails();
BankAccount.displayBankDetails();