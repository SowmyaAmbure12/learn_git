/*let x="2021-01-25";
let y="Jan-30-2021";
let r=new Date(2020,1,23,12,23,12);
console.log(r);
let d=new Date("October ,2018,13 11:12:33");
console.log(d);
let s=d.getTime();
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getTimezoneOffset());*/
/*let d=new Date("October ,2018,13 11:12:33");
d.setFullYear(2020);
d.setMonth(10);
console.log(d);
*/
let d=new Date();
let x=new Date();
x.setDate(d.getDate()+50);
console.log(d);
console.log(x);
if(x<d){
    console.log('x is past date');
}
else if(x>d){
    console.log('x is future date');
}
else{
    console.log("x is same date");
}
