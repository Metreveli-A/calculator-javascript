

//  კალკულატორი

function calculator(){
let number1 = Number(document.getElementById("number1").value)
let operator = document.getElementById("operator").value
let number2 = Number(document.getElementById("number2").value)


let pasuxi=0;
 if(operator == "+"){
    pasuxi = number1 + number2
 }else if(operator == "-"){
     pasuxi = number1 - number2
 }else if(operator == "*"){
    pasuxi =number1 * number2
 }else if(operator == "/"){
   pasuxi = number1 / number2
 }else if(operator == "%"){
    pasuxi = (number1 * number2)/100
 }else{
    pasuxi = 'invalid operator'
 }

document.getElementById("pasuxi").innerHTML = pasuxi

}

 





// დაიჭირე ბურთი

// const maous = document.getElementById("buton")



// var width = window.innerWidth - window.innerHeight *(15/100)
// var heit = window.innerHeight-110 

// console.log(typeof width)
// function cathme(){
//    const widt = Math.floor(Math.random() * width)
//    const hei = Math.floor(Math.random() * heit)

//    maous.style.left = widt + "px"
//    maous.style.top = hei + "px"

  

  
// }


// ნაძვის ხე

// for(let i=0;i<=8;i++){
//     // space ebis cikli
//     for(let j=i; j<8;j++){
//         document.write(' &nbsp')
//     }
//     // fifqebis cikli

//     for(let m=0; m<(2*i-1);m++){
//      document.write('*')
//     }
//   document.write("<br>")


// }
// for(let i=0;i<=3;i++){
//     // space ebis cikli
//     for(let j=0; j<6;j++){
//         document.write(' &nbsp')
//     }
//     // fifqebis cikli

//     for(let m=0; m<3;m++){
//      document.write('*')
//     }
//   document.write("<br>")

  
// }
