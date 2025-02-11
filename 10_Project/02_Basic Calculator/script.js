
function calculate(exp){

    let num1 = parseInt(document.getElementById('input-num1').value);
    let num2 = parseInt(document.getElementById('input-num2').value);

    let result = document.getElementById('answer');;
    result.style.fontSize = "40px";

    // result.classList.add('box'); // padhna
    // result.classList.remove('box'); // padhna

    if(isNaN(num1) || isNaN(num2)){
        result.innerHTML = `<i> Please enter number! </i>`
    }else{

        switch(exp){
            case 'add':
                result.innerHTML = `Sum : ${num1+num2}`;
                break;
            case 'sub':
                result.innerHTML = `Subtract : ${num1-num2}`;
                break;
            case 'mul':
                result.innerHTML = `Multiply : ${num1*num2}`;
                break;
            case 'divide':
                result.innerHTML = `Divide : ${num1/num2}`;
                break;
            default :
            result.innerHTML = `Invalid`;
        }
    }


}