const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-btn');
const message = document.querySelector('#error-msg');
const number0fNotes = document.querySelectorAll('.no-notes');
const  changeValue  = document.querySelector('#change-val');
const availableNotes= [2000,500,100,50,20,10,5,1];
//console.log(cashGiven.value);
//checkButton.addEventListener("click", () => console.log(cashGiven.value))
checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value >0 ){
        if(Number(billAmount.value) <=  Number(cashGiven.value)){
                    const returnChangeValue = cashGiven.value - billAmount.value;
                    changeValue.innerText = returnChangeValue;
                    calculateChangeValue(returnChangeValue);

        }
        else{
            showMessage("cash given has to be greater or equal to bill amount");
        }

    }
    else{
        showMessage("Invalid value please, enter proper amount");
    }


})

function calculateChangeValue(returnChangeValue){
    for(let i=0;i< availableNotes.length;i++){
        const no0fNotes = Math.trunc(returnChangeValue / availableNotes[i]);
        returnChangeValue %= availableNotes[i];
        number0fNotes[i].innerText= no0fNotes;
    }
}
function hideMessage(){
    message.style.display="none";
}

function showMessage(msg)
{
    console.log("here");
    message.style.display="block";
    message.innerText= msg;
}