let head = document.getElementsByClassName("Jesus");
let i = 0;
let myArray = ['43px' , '47px' , '50px' ];

function increaseFontSize () {
   head.style.fontSize = myArray[i++];
}

let theBtn = document.getElementById("increase");
theBtn.addEventListener("click", increaseFontSize)

let m = 0
let theArray = ['37px', '33px' , '29px'];
function decreaseFontSize () {
    head.style.fontSize = theArray[m++]
}
let myBtn = document.getElementById("decrease");
myBtn.addEventListener("click", decreaseFontSize)

