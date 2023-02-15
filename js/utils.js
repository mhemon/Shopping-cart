function getElementByIdInput (element){
    const inputField = document.getElementById(element);
    const inputString = inputField.value;
    const previousinput = parseInt(inputString);
    return previousinput;
}

function getElementByIdText (element){
    const inputField = document.getElementById(element);
    const inputString = inputField.innerText;
    const previousinput = parseInt(inputString);
    return previousinput;
}

function setElementById (element,value){
    const inputField = document.getElementById(element);
    inputField.value = value;
}

function setElementByIdText (element,value){
    const inputField = document.getElementById(element);
    inputField.innerText = value;

    // tax calculation
    let taxCount = parseFloat((value * 0.1).toFixed(2));
    const taxField = document.getElementById('tax');
    taxField.innerText = taxCount;

    //total update
    const totalField = document.getElementById('total');
    let total = value + taxCount;
    totalField.innerText = total;
}

function updatePrice(price,element,newIphone){
    const updatePrice = newIphone * price;
    const priceField = document.getElementById(element);
    priceField.innerText = updatePrice;
}

function updateTotal(iphonePriceField,casePriceField){
    const iphonePrice = getElementByIdText(iphonePriceField);
    const casePrice = getElementByIdText(casePriceField);
    const totalPrice = iphonePrice + casePrice;
    setElementByIdText('subtotal',totalPrice);
}