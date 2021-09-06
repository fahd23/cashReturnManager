const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashInputBlock = document.querySelector(".cash-input");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function cashamountvalidate() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const moneyToBeReturn = cashGiven.value - billAmount.value; 
            calculateChange(moneyToBeReturn);
        } else {
            showMessage("The Cash given should be greater than bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});


function calculateChange(moneyToBeReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numOfNotes = Math.trunc(moneyToBeReturn / availableNotes[i]);
        moneyToBeReturn = moneyToBeReturn % availableNotes[i];
        noOfNotes[i].innerText = numOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}