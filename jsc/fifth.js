/*let bk=["mat","phy","Bio"];
console.log(bk);
let h=new Array("mat","phy","Bio");
console.log(h); 
console.log(bk[2]);
bk[1]="english";
console.log(bk);
let o="book";
console.log(Array.isArray(o));
let text="This is Random Text";
let wr=text.split(' ');
console.log(wr);
let er=text.split('s');
console.log(er);
let ry=bk.join(' ');
let bk2=["hindi","cs"];
let nb=bk.concat(bk2,bk);
console.log(ry);
console.log(nb);
*/
let bk=["mat","phy","bio"];
let bwp=[["mat","4656"],
        ["phy","789"],
        ["bio","987"]];
console.log(bwp);
console.log(bwp[1][1]);
for(let i=0;i<bk.length;i++){
    console.log(bk[i]);
    
}
bk.forEach(myfu);
function myfu(val){
    console.log(val);
}