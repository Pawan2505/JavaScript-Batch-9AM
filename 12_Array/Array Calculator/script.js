
    
    
    function calculate(){
        alert("Data submited");
        let arr = document.forms['myForm']['input-array'].value.split(",").map(Number);
       
        console.log(arr);

        console.log(Math.max(...arr))
        console.log(Math.min(...arr))

        let sum = arr.reduce((acc,item)=>acc+item,0)

            console.log(sum);

            let average = Math.floor(sum/arr.length);
            console.log(average);

    }