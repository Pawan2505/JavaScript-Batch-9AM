function calculateSubtract(){
    let num1 = parseInt(document.getElementById('input-num1').value);
    let num2 = parseInt(document.getElementById('input-num2').value);

    let result = num1 - num2;

    document.getElementById('answer').innerHTML = `<i>Result : ${result}</i>`;
}