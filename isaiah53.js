let head = document.getElementById("Jesus");
let i = 0;
let myArray = ['40px' , '43px' , '45px' ];

function increaseFontSize () {
   head.style.fontSize = myArray[i++];
}

let theBtn = document.getElementById("increase");
theBtn.addEventListener("click", increaseFontSize)


