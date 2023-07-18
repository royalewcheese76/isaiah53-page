let head = document.getElementById("Jesus");
let i = 0;
let myArray = ['43px' , '47px' , '50px' ];

function increaseFontSize () {
   if ( i <= 2) {
   head.style.fontSize = myArray[i++];}
   m = 0
}

let theBtn = document.getElementById("increase");
theBtn.addEventListener("click", increaseFontSize)

let m = 0
let theArray = ['37px', '33px' , '29px'];
function decreaseFontSize () {
    if ( m <= 2) {
    i = 0
    head.style.fontSize = theArray[m++] }
}
let myBtn = document.getElementById("decrease");
myBtn.addEventListener("click", decreaseFontSize)



