// https://fi.money/guides/money-matters/what-is-basic-salary-formula-and-calculation

// Basic salary = Gross salary – (DA + HRA + conveyance + other allowances)


document.getElementById('btn-salary').addEventListener('click',function(){
    let grossSalary = parseInt(document.getElementById('input-1').value);
    let da = parseInt(document.getElementById('input-2').value);
    let hra = parseInt(document.getElementById('input-3').value);
    let conveyance = parseInt(document.getElementById('input-4').value);
    let other = parseInt(document.getElementById('input-5').value);

    let result = document.getElementById('answer');

    if(isNaN(grossSalary) || isNaN(da) ||  isNaN(hra) ||  isNaN(conveyance) ||  isNaN(other)){
           result.innerHTML = `<i> Check field! </i>`; 
    }else{
       let basicsalary = grossSalary - (da + hra + conveyance + other);
       
       result.innerHTML = `Basic Salary : ${basicsalary}`;
    }

})