  /*function myfu(){
    for(let i=0;i<10;i++){
        document.write(`2 x ${i}= ${2*i}`);
        document.write('<br>');
    }
    
  }
  myfu();
  */
  /*function myfu(num){
    for(let i=1;i<=10;i++){
        document.write(`${num} x ${i}= ${num*i}`);
        document.write('<br>');
    }
    
  }
  myfu(90);
  */
/* function add(i,j){
    document.write(`${i+j} is sum`);
 }
 add(3,4);
 */
//*******FUNCTIONS */
/*function add(){
    if(arguments.length==0){
        document.write("No parameters passed");
    }
    else{
        let sum=0;
        for(let i=0;i<arguments.length;i++){
            sum+=arguments[i];
        }
        document.write(sum);
        document.write('<br>');
    }
}
add(8,9);
add();
add(8,1,2);
add(7,1,2,3,4,5);
*/
/*function add(a,b){
    let d=[2,3,4];
    return d;
}
let c=add(5,6);
document.write(c);
*/
/*function compare(a,b){
    if(a>b){
        return 1;
    }
    else if(a<b){
        return -1;
    }
    else
        return 0;
}
let c=compare(6,6);
document.write(c);
*/
//*****GLOBAL ND LOCALVARIABLES */
/*let car="altroz";
function add(){
    let result=33;
    let car="audi";
    console.log(car);
}
add();
console.log(car);
*/
//*********ANONYMOUS FUNCTION */
/*let show=function(){
    console.log("HELLO WORLD");
};
show(); 
setTimeout(show,5000);//for 5 milliseconds
*/
//****IMMEDIATELY INVOKED FUNCTIONS */
(function(){
    console.log("Helloworld");
    alert("helloworld..!");
})();