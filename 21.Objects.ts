//  Write a program that creates Objects containing these items.
// Datatype of person object
interface person{
    age : number,
    name : string,
    nationality : string,
    student : boolean,
}
// person object
let person :person = {
     age : 18 ,
    name : 'Saqlain Bhatti' ,
    nationality : 'Pakistani' ,
    student : true
}
// print person
console.log(person);
// Datatypr of car object
 interface car {
    maker : string,
    color : string,
    automatic : Boolean
 }

// car object
let car = {
    maker : 'Toyota',
    color : 'White',
    automatic : true,
}
// print car object
console.log(car);