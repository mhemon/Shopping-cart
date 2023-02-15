document.getElementById('iphone-plus-btn').addEventListener('click',function(){
    const previousIphone = getElementByIdInput('iphoneField');
    const newIphone = previousIphone + 1;
    setElementById('iphoneField',newIphone);
    updatePrice(1219,'iphone-price',newIphone);
    updateTotal('iphone-price','case-price');
})

document.getElementById('iphone-minus-btn').addEventListener('click',function(){
    const previousIphone = getElementByIdInput('iphoneField');
    if(previousIphone <= 1){
        return;
    }
    const newIphone = previousIphone - 1;
    setElementById('iphoneField',newIphone);
    updatePrice(1219,'iphone-price',newIphone);
    updateTotal('iphone-price','case-price');
})

document.getElementById('case-plus-btn').addEventListener('click',function(){
    const previousCase = getElementByIdInput('case-Field');
    const newCase = previousCase + 1;
    setElementById('case-Field',newCase);
    updatePrice(59,'case-price',newCase);
    updateTotal('iphone-price','case-price');
})

document.getElementById('case-minus-btn').addEventListener('click',function(){
    const previousCase = getElementByIdInput('case-Field');
    if(previousCase <= 1){
        return;
    }
    const newCase = previousCase - 1;
    setElementById('case-Field',newCase);
    updatePrice(59,'case-price',newCase);
    updateTotal('iphone-price','case-price');
})