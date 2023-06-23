"use strict"
const elChick = document.querySelector('#chick');
const elBtn = document.querySelector('#btn');

const elFormGroup = document.querySelector('#form-group');
const elUlList = document.querySelector('#ul-list');
const elPosiTive = document.querySelector(' #positive');
const elNegaTive = document.querySelector('#negative');
const elNeutRal = document.querySelector('#neutral');
let elChanGing = document.querySelector('#text');


elChanGing.style.fontWeight = "500";
elChanGing.style.fontSize = "18px";

elPosiTive.style.textTransform = "uppercase";
elNegaTive.style.textTransform = "uppercase";
elNeutRal.style.textTransform = "uppercase";

elPosiTive.style.color = "#ccc";
elNegaTive.style.color = "#ccc";
elNeutRal.style.color = "#ccc";


   elFormGroup.addEventListener("submit", (e) => {
      e.preventDefault();
      if(elChick.value === "1") {
      elChanGing.textContent = "Positive content";
      elPosiTive.style.fontWeight = "bold";
      elPosiTive.style.color = "#000";
   } else if (elChick.value === "2") {
      elPosiTive.style.fontWeight = "500";
      elPosiTive.style.color = "#ccc";
      elChanGing.textContent = "Negative content";
      elNegaTive.style.fontWeight = "bold";
      elNegaTive.style.color = "#000";
   }  else if (elChick.value === "3") {
      elPosiTive.style.fontWeight = "500";
      elPosiTive.style.color = "#ccc";
      elNegaTive.style.fontWeight = "500";
      elNegaTive.style.color = "#ccc";
      elNeutRal.style.fontWeight = "bold";
      elNeutRal.style.color = "#000";
   }  else {
      elNeutRal.style.fontWeight = "500";
      elNeutRal.style.color = "#ccc";
      alert('index is invalid');
   }
     
      elChick.value = " ";
});


elPosiTive.addEventListener("click", () => {
   elChanGing.textContent = "Positive content";
   elPosiTive.style.fontWeight = "bold";
   elPosiTive.style.color = "#000";
});

elNegaTive.addEventListener("click", () => {
   elChanGing.textContent = "Negative content";
   elNegaTive.style.fontWeight = "bold";
   elNegaTive.style.color = "#000";
});

elNeutRal.addEventListener("click", () => {
   elChanGing.textContent = "Neutral content";
   elNeutRal.style.fontWeight = "bold";
   elNeutRal.style.color = "#000";
});