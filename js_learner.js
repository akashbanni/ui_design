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

// var a = 100
// var b

// function f1(){

//     console.log(a)  // undefined
//     var a = 60
//     console.log(b)   // undefined
//     b= 70
//     console.log(a) // 60
//     a =50

// }
// f1()
// console.log(a)    // 100
// console.log(b)   // 70

// var Flipkart_obj = {
//     Brand  :"Dennis Lingo",
//     Title : "Men Slim Fit Solid Spread Collar Casual Shirt",
//     Price : 1849,
//     Discount : "73% off",
//     Discounted_price : 496,
//     Colors : ["Yellow","Black","Pink","Green"],

//     Sizes : {
//         Small : "S",
//         Medium : "M",
//         Large : "L",
//         XLarge :"XL",

//     },

//     Offers : {
//         Flipkart_Bank_offers : ["Get 25 RS off", "5% Cashback on Flipkart Axis Bank Card"],
//         Combo : ["Buy 2 items save 5%; Buy 3 or more save 7%", "Buy 4 save 10%; Buy 5+ save 15%"]
//     }
// }

// console.log(Flipkart_obj.Brand)

function signup(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var male = document.getElementById("genderm").value;
    console.log(male);
    var female = document.getElementById("genderf").value;
    console.log(female);
    var custom = document.getElementById("genderc").value;
    console.log(custom);

    var obj = {
        
        username : {
        fname : fname,
        lname:lname,
        },
        email:email,
        password : password,
        genderm : male,
        genderf:female,
        genderc : custom,

        dateofbirth : {
            date : date,
            month : month,
            year : year,
        }
        
    }
    console.log(obj)
}     

