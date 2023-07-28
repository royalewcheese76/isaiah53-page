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


 let ver1 = document.getElementById("verse1")
 ver1.addEventListener("click", function(){
alert("John 12:38, Romans 10:16, Isaiah 52:10");

});

let ver2 = document.getElementById("verse2")
ver2.addEventListener("click", function() {
alert("Mark 6:3, Isaiah 11:1")
});

let ver3 = document.getElementById("verse3")
ver3.addEventListener("click", function() {
alert("Jn1:10, Heb12:2, Lk9:22")
});

let ver4 = document.getElementById("verse4")
ver4.addEventListener("click", function() {
alert("Mat8:17, 1Pet2:24, Heb9:28")
});

let ver5 = document.getElementById("verse5")
ver5.addEventListener("click", function() {
alert("Rom4:25 ,Eph5:2, Heb9:28")
});

let ver6 = document.getElementById("verse6")
ver6.addEventListener("click", function() {
alert("Rom3:10,1pet3:18, Jam5:20")
});

let ver7 = document.getElementById("verse7")
ver7.addEventListener("click", function() {
alert("Acts8:32, Mat27:12")
});

let ver8 = document.getElementById("verse8")
ver8.addEventListener("click", function() {
alert("Mat26:65, Acts8:33")
});

let ver9 = document.getElementById("verse9")
ver9.addEventListener("click", function() {
alert("Mat27:57, 1Jn3:5, Heb4:15")
});

let ver10 = document.getElementById("verse10")
ver10.addEventListener("click", function() {
alert("Rom8:32, 2cor5:21")
});

let ver11 = document.getElementById("verse11")
ver11.addEventListener("click", function() {
alert("Rom5:18,1Pet2:24, 1Pet3:18")
});

let ver12 = document.getElementById("verse12")
ver12.addEventListener("click", function() {
alert("	Rom8:34, 1Tim2:5, Heb9:24")
});

