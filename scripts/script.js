const bill = document.querySelector('#bill');
const numberOfPeople = document.querySelector('#number-of-people');
const custom = document.querySelector('#custom');
const tipAmount = document.querySelector('#tip-amount');
const totalPerPerson = document.querySelector('#total');
const buttons = document.querySelectorAll('.options');
const zero = document.querySelector('.cant-be-zero'); 
const form = document.querySelector('form');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let tipvalue = e.target.innerHTML;
        tipvalue = tipvalue.substr(0, tipvalue.length - 1);
        //console.log(tipvalue);
        
        if(bill.value === "" ) return;
        if(numberOfPeople.value === "" ){
          zero.classList.remove('hide');
      }else{
          zero.classList.add('hide')
      }
        
        calculateTip(
            bill.value,
            tipvalue,
            numberOfPeople.value
        );
        
    });
});

custom.addEventListener('input', (e)=>{
    if (bill.value === "") {
        alert("Please First Add Bill Amount");
        resetEverything();
        return;
      }
      
      if (numberOfPeople.value === "" ){
        numberOfPeople.classList.add('input-red');
        zero.classList.remove('hide');
      } else{
        zero.classList.add('hide');
      }
      
      calculateTip(
        parseFloat(bill.value),
        parseFloat(e.target.value),
        parseInt(numberOfPeople.value)
      );
});


function calculateTip(bill, percentage, numberOfPeople ){
    bill = parseFloat(bill);
    percentage = parseFloat(percentage);
    numberOfPeople = parseInt(numberOfPeople);
    let billTip = (bill * (percentage / 100));
    let tip = billTip / numberOfPeople;
    let total = (bill + billTip) / numberOfPeople;
    tip = tip.toFixed(2);
    total = total.toFixed(2);
  
    console.log(tip);
    console.log(total);

    tipAmount.textContent = tip;
    totalPerPerson.textContent =  total;
}

form.addEventListener('reset', ()=>{
  tipAmount.innerText = `R$ 0.00`;
  totalPerPerson.innerText = `R$ 0.00`;
})