let rd1 = document.getElementById("rd1");
let rd2 = document.getElementById("rd2");
let rd3 = document.getElementById("rd3");
let form = document.getElementById("form");
let inputtext = document.getElementById("per_hr");
let display = document.getElementById("textt");
let expensemonth = document.getElementById("expensemonth");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let xrate = inputtext.value;
  let hrsweek = 40 * xrate;
  let hrsmonth = 4 * hrsweek;
  let hrsyear = 12 * hrsmonth;
  
  let expmonth = expensemonth.value*160;
  let expweek = expmonth/4;
  let expyear = expmonth*12;

  if (rd1.checked == true) {
    display.innerText = "$" + (hrsweek - expweek);
  }
  if (rd2.checked == true) {
    display.innerText = "$" + (hrsmonth - expmonth);
  }
  if (rd3.checked == true) {
    display.innerText = "$" + (hrsyear - expyear);
  }
});

// function fn1(){
//     if(rd1.checked == true){
//         alert("hello1")
//     }
//     if(rd2.checked == true){
//         alert("hello2")
//     }
//     if(rd3.checked == true){
//         alert("hello3")
//     }
// }
