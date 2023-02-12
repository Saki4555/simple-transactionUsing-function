function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    if(isNaN(inputFieldValue)){
        alert('please provide a valid number');
        return;
    }
    inputField.value = '';
    return inputFieldValue;
}


function getElementValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);

    return value;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue;
}
