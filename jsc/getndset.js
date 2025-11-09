/*var person={
    name:"sowmya",
    age:18,
   /* getname:function(){
        return this.name.toUpperCase();
    },
    
    get getname(){
        return this.name.toUpperCase();
    },
    set setname(n){
        this.name=n.toUpperCase();
    } 
}
console.log(person.getname);
person.setname="ajith";
*/
/////CONSTRUCTOR OBJECT/////////////////////
////////////////////////////////////////////
/*function Student(fn,ln,age){
    this.fn=fn,
    this.ln=ln,
    this.age=age;

}
var stu1=new Student("ajith","kumar",21);
console.log(stu1);
 stu1.designation="student";
 console.log(stu1);
 stu1.name=function(){
    return this.fn+" "+this.ln;
 }
 console.log(stu1.name());  
 */
 /*function Student(fn,ln,age){
    this.fn=fn,
    this.ln=ln,
    this.age=age;

}
var stu1=new Student("ajith","kumar",21);
console.log(stu1);
 Student.prototype.designation="student";
 console.log(stu1);
 Student.prototype.name=function(){
    return this.fn+" "+this.ln;
 }
 console.log(stu1.name());
 */
////////NESTEDOBJECT
/*let user={
    id:101,
    email:"joey@gmail.com",
    personalinfo:{
        name:"joey",
        address:{
            home:"H.NO:10-20-1\A",
            city:"Hyderabad",
            country:"INDIA"
        }
    }
};
//console.log(user);
console.log(user.personalinfo.address.city );
*/
//HOISTING-LIFT/PULL
/*hello();
function hello(){
    console.log("hello world");
}*/
/*var x;
console.log(x);
x=7;*/

/*console.log(x);
 var x=7;
 */
 /*console.log(x);
 let x=8;*/
 ///STRICTMODE
 /*x=4
 console.log(x);*/
 "use strict"
 x=4;
 console.log(x); 