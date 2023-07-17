let head = document.getElementById("Jesus");
let i = 0;
let myArray = ['40px' , '43px' , '45px' ];

function increaseFontSize () {
   head.style.fontSize = myArray[i++];
}

let theBtn = document.getElementById("increase");
theBtn.addEventListener("click", increaseFontSize)

let m = 0
let theArray = ['17px', '13px' , '10px'];
function decreaseFontSize () {
    head.style.fontSize = theArray[m++]
}
let myBtn = document.getElementById("decrease");
myBtn.addEventListener("click", decreaseFontSize)

