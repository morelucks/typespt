"use strict";
let user = {
    id: 4, name: 'john'
};
console.log(user);
function loggs(message) {
    console.log(message);
}
// loggs("this looks good");
// enum
var items;
(function (items) {
    items["fruits"] = "mango";
    items["cars"] = "benz";
    items["phone"] = "ted";
})(items || (items = {}));
console.log(items);
// // type assertion : changing type from the initial Declaration
// let cid:any=1;
// // let customerId=<number>cid;
// // console.log(cid);
// let customerId=cid as number;
// function addN(x:number, y:number):number{
//     return x + y
// }
// console.log(addN(4,21));
// tuple 
// let person:[number, string, boolean]=[ 2, 'brad', true];
// // tupple Array
// let employee:[number, string][];
// employee=[
//     [1, "lucky"],
//     [2, "me"],
//     [3, "i"]
// ]
// // union
// let pid:string|number= 484;
// let ppid:string|number="number four";
// ppid=45;
// console.log(ppid);
// basic types
// let id:number = 5;
// let company:string='morelucks';
// let isblack:boolean=true;
// let x:any=true;
// let y:any=89;
// let z:any='name';
// let ids:number[]= [2,2,3,0];
// ids.push(39);
// ids.pop();
// ids.pop();
// ids.pop();
// let arr:any[]=[3, 4, " this is new", true, ]
// console.log(ids);
// let nam="lucky";
// let naem=9; 
// console.log(nam);
// console.log(naem); 
