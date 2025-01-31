
function findMin(){
    let arr = document.getElementById('input-1').value.split(",").map(Number);
    console.log(arr);
    let minValue = Math.min(...arr);
    
    document.getElementById('answer').innerHTML = `Minimum Value : ${minValue}`;
}


