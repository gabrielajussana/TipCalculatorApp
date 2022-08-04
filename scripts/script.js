const bill = document.querySelector('#bill');
const numberOfPeople = document.querySelector('#number-of-people');
const custom = document.querySelector('#custom');
const tipAmount = document.querySelector('#tip-amount');
const totalPerPerson = document.querySelector('#total');
const buttons = document.querySelectorAll('.options > label');
const zero = document.querySelector('.cant-be-zero'); 
const form = document.querySelector('form');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let tipvalue = e.target.innerHTML;
        tipvalue = tipvalue.substr(0, tipvalue.length - 1);
        console.log(tipvalue);
        
        if(bill.value === "" ){
          alert("Please First Add Bill");
          return;
        }
        if(numberOfPeople.value === ""){
          numberOfPeople.value = 1;
      }
        
        calculateTip(
            parseFloat(bill.value),
            parseFloat(tipvalue),
            parseInt(numberOfPeople.value)
        );
        
    });
});

custom.addEventListener('input', (e)=>{
    if (bill.value === "") {
        alert("Please First Add Bill");
        return;
      }
      
      if(numberOfPeople.value === ""){
        numberOfPeople.value = 1;
    }
      
      calculateTip(
        parseFloat(bill.value),
        parseFloat(e.target.value),
        parseInt(numberOfPeople.value)
      );
});


function calculateTip(bill, percentage, numberOfPeople ){
    let billTip = (bill * (percentage / 100));
    let tip = billTip / numberOfPeople;
    let total = (bill + billTip) / numberOfPeople;
    tip = tip.toFixed(2);
    total = total.toFixed(2);
  
    console.log(tip);
    console.log(total);

    tipAmount.innerText = tip;
    totalPerPerson.innerText =  total;
}

form.addEventListener('reset', ()=>{
  tipAmount.innerText = `0.00`;
  totalPerPerson.innerText = `0.00`;
})