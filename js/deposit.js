

document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');

    
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);


    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
})