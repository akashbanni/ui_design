// const tiffin = {
//     idly:25,
//     dosa:30,
//     masalaDosa:35,
//     vada : 25,
//     samberVada : 30,
//     samberIdly : 30
// }

// //console.log(tiffin)

// console.log(tiffin.vada)
// console.log(tiffin["masalaDosa"]) //same as above

// let key;
// for (key in tiffin){
//    console.log(`${key}: ${tiffin[key]}`);
// }

// if("idly" in tiffin){
//     console.log("Tiffin has Idly");
// }
// else console.log("No Idly")

var a = 100
var b

function f1(){

    console.log(a)  // undefined
    var a = 60
    console.log(b)   // undefined
    b= 70
    console.log(a) // 60
    a =50

}
f1()
console.log(a)    // 100
console.log(b)   // 70