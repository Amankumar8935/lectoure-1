//Ecma Script to make rule for JavaScript 

// operater 
// Arithmetic Operator 


console.log(2+5); // Addition Operator
console.log(2-5); // Subtraticon Operator
console.log(2*5); // Multiplication Operator 
console.log(6/2); // Divided Operator
console.log(5%2);  // Modulo Operator he store Reminder
console.log(5**3); // ** squaring i.e 5 ka qube or Exponentiation
let a=5;
console.log(++a); // Increment Operator
let b=6;
console.log(--b); // Decrement Operator


//  assigment Operator 

let x= 20;
let y=10;
// x= x+y;
//x=x-y;
// x=x*y;
 x=x/y;
console.log(x);
//Assignment
let x1 = 10;
x1 += 5;
console.log(x1);
// Operator	Example	Same As
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
 // *=	x *= y	x = x * y
// /=	x /= y	x = x / y
 // %=	x %= y	x = x % y
 // **=	x **= y	x = x ** y

 /*   JavaScript Comparison Operators
Comparison operators are used to compare two values.

Comparison operators always return true or false.

Example
*/
let x2 = 5;
let result = x2 > 8; 
console.log(result);
/*
Operator	Description	Example
==	equal to	x == 5
===	equal value and equal type	x === 5
!=	not equal	x != 5
!==	not equal value or not equal type	x !== 5
>	greater than	x > 5
<	less than	x < 5
>=	greater than or equal to	x >= 5
<=	less than or equal to	x <= 5
All the comparison operators above can also be used on strings: */

/*  
Operator	Name	                     Checks Data Type?       	Checks Value?
==	        Equality Operator	         ❌ No	                  ✅ Yes (after type conversion)
===	        Strict Equality Operator	 ✅ Yes	                  ✅ Yes
*/
console.log(5 == "5");
console.log(5 === "5");

// conversion 
let z1="1220";
let ab= Number(z1);

console.log(ab);

// NaN : Not a number(Type Of It is number)
let re="121as";
let bg= Number(re);
console.log( typeof bg); 

let a4= 10;
let  bv=String(a4);

console.log(typeof  bv);


console.log(Number(true));
console.log(Number(false));
console.log(Number(null)); // null convert in 0
console.log(Number(undefined)); // undefined converrt in NaN

// Boolean Convert 

console.log(Boolean(10));// True
console.log(Boolean(-10));//True
console.log(Boolean(0));  // Flase
console.log(Boolean("Hello World"));// True
console.log(Boolean(""));// Flase 
console.log(Boolean(undefined)); // Flase
console.log(Boolean(NaN)); // false 
console.log(Boolean(null)); // false

//  Computer Science Challenge

let a1=0.1;
let a2=0.2;
let c3=a1+a2;
// console.log(c3==0.3);// he provied flase
console.log(c3);
