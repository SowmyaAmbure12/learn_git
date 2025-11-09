//OBJECT

/*let person= {
    firstNmae:"sowmya",
    SecondMane:'Ambure' 
};
console.log(person.firstNmae);//DOT NOTATION
console.log(person['SecondMane']);//ARRAYNOTATION*/
/*let person= {
    'first Nmae':"sowmya",
    SecondMane:'Ambure' 
};
console.log(person['first Nmae']);
console.log(person['SecondMane']);
console.log(person);*/
/*let person={
    firstname:"Virat",
    secondname:"Kohli"
};
person.firstname="vit";
person.age=34;
console.log(person.firstname);
console.log(person. age);
delete person.secondname;
console.log(person);
console.log('height' in person);
//iterating over properities of object
for(let key in person){
    console.log(key+" "+person[key]);
}
*/
/*let person={
    firstname:'Sowmya',
    secondname:'ambure'
}
person.sayhlo=function(){
    console.log("hello");
}
person.sayhlo();//1st method
let greet=function(){
    console.log("hii");
}
person.sayh=greet;
person.sayh();
greet();//2
*/
/*let person={
    fn:"sowmya",
    sn:"ambure",
    sayhlo:function(){
        console.log("anonymous haha");
    }

} 
person.sayhlo();  */
/*let person={
    fn:"sowmya",
    sn:"ambure",
    sayhlo(){
        console.log("hlo i have"+car.brand+"car");
    }
}
let car={
    brand:'TATA',
    model:'SAFARI',
}


person.sayhlo();  
*/
let person={
    fn:"sowmya",
    sn:"ambure",
    sayhlo(){
        console.log("hlo I am "+this.fni+"I have"+car.brand+"car");
    }
}
let car={
    brand:'TATA',
    model:'PUNCH',
}


person.sayhlo();  