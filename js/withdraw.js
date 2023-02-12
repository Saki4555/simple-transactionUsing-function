
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');

    
    
    const previousWtihdrawTotal = getElementValueById('withdraw-total');
   
    const newWithdrawTotal = newWithdrawAmount + previousWtihdrawTotal;

    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    if(newWithdrawAmount>previousBalanceTotal){
        alert('You cant withdraw more than your current balance')
        return;
    }

    setTextElementValueById('balance-total', newBalanceTotal);
})