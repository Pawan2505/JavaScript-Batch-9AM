// ❌ Incorrect Approach (Scope Issue)
// let arr1 = document.getElementById('input-1').value.split(',').map(Number);  
// This creates a scope issue because `arr1` is defined outside the functions. 
// It gets assigned a value only once when the script loads, meaning it won't update 
// when the user enters new input.

// ✅ Corrected Approach
// - Moved `arr` inside each function so it updates every time the function is called.

function findMin() {
    // Get input values, split by commas, and convert them to numbers
    let arr = document.getElementById('input-1').value.split(',').map(Number);

    // Find the minimum number in the array
    let result = Math.min(...arr);

    // Display the result in the HTML element with ID "answer"
    document.querySelector('#answer').innerHTML = `<i>Minimum Number : </i> ${result}`;
}

function findMax() {
    // Get input values, split by commas, and convert them to numbers
    let arr = document.getElementById('input-1').value.split(',').map(Number);

    // Find the maximum number in the array
    let result = Math.max(...arr);

    // Display the result in the HTML element with ID "answer"
    document.querySelector('#answer').innerHTML = `<i>Maximum Number : </i> ${result}`;
}

