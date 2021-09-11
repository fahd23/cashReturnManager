const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashInputBlock = document.querySelector(".cash-input");
const cashTable =document.querySelector(".cashtable");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

cashTable.style.display ="none";

checkButton.addEventListener("click", cashamountvalidate);

function cashamountvalidate() {
    message.style.display = "none";
    const billAmountValue = Number(billAmount.value);
    const cashGivenValue = Number(cashGiven.value);
    if (billAmountValue > 0) {
        if (cashGivenValue >= billAmountValue) {
            const moneyToBeReturn = cashGivenValue - billAmountValue;
            calculateChange(moneyToBeReturn);
            cashTable.style.display ="block";
        } else {
            showMessage("The Cash given should be greater than bill amount");
            cashTable.style.display ="none";
        }
    } else {
        showMessage("Invalid Bill Amount");
        cashTable.style.display ="none";
    }
}

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