


function calculate(){
    let amount = parseInt(document.getElementById('amount-input').value);

    // console.log(`Amount : ${amount}`);

    let discount = parseInt(document.getElementById('discount-input').value);

    let total = 0;

    if(isNaN(amount) || isNaN(discount) || amount<0|| discount<0){
        document.getElementById('answer').innerHTML = `Invalid data!`;
    }else{
        total = amount - (amount*discount/100);

        document.getElementById('answer').innerHTML = `Total Bill : ${total}`;
    }
}