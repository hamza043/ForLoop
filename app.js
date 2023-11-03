// let num = 10;

// console.log(num++);
// console.log(++num);

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
// const myTable = +prompt("Enter Number for table");
// for (let i=1; i<=10; i++) {
//     // console.log(myTable + " x " + i + " = " + myTable * i);
//     document.querySelector("#table").innerHTML +=myTable + " x " + i + " = " + myTable * i + "<br>"
// }    

let input = document.querySelector("#value");

function showVal(){
    console.log(input.value);
    input.value = "";
}