document.addEventListener("DOMContentLoaded", () => {
// Card number formatting
const cardNumInput = document.querySelector('#cardNum');
    
if (cardNumInput) {
    cardNumInput.addEventListener('keyup', () => {
        let cNumber = cardNumInput.value.replace(/\s/g, "");
        if (Number(cNumber)) {
            cNumber = cNumber.match(/.{1,4}/g).join(" ");
            cardNumInput.value = cNumber;
        }
    });
}

document.querySelector("#payA").addEventListener("click", () => {
  document.querySelector("#upi").style.display = "block";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#netbank").style.display = "none";
  document.querySelector("#wallet").style.display = "none";
  document.querySelector("#cash").style.display = "none";
});

document.querySelector("#payB").addEventListener("click", () => {
  document.querySelector("#upi").style.display = "none";
  document.querySelector("#card").style.display = "block";
  document.querySelector("#netbank").style.display = "none";
  document.querySelector("#wallet").style.display = "none";
  document.querySelector("#cash").style.display = "none";
});

document.querySelector("#payC").addEventListener("click", () => {
  document.querySelector("#upi").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#netbank").style.display = "block";
  document.querySelector("#wallet").style.display = "none";
  document.querySelector("#cash").style.display = "none";
});

document.querySelector("#payD").addEventListener("click", () => {
  document.querySelector("#upi").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#netbank").style.display = "none";
  document.querySelector("#wallet").style.display = "block";
  document.querySelector("#cash").style.display = "none";
});

document.querySelector("#payE").addEventListener("click", () => {
  document.querySelector("#upi").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#netbank").style.display = "none";
  document.querySelector("#wallet").style.display = "none";
  document.querySelector("#cash").style.display = "block";
});

});