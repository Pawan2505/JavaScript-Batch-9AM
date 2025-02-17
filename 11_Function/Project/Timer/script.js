


// document.getElementById('btn-count').addEventListener('click', () => {
//     let inputcount = parseInt(document.getElementById('input-count').value);
//     console.log(inputcount);

//     let countValue = document.getElementById('count');
//     let timeupvalue = document.getElementById('timeup');

//     let countdown = inputcount; // Start countdown from input value

//     let intervalID = setInterval(() => {
//         countValue.innerHTML = `${countdown}`; // Update UI with countdown value

//         if (countdown === 0) {
//             clearInterval(intervalID); // Stop interval when countdown reaches 0
//             timeupvalue.innerHTML = `Time Over⌛`; // Show time over message
//         } else {
//             countdown--; // Decrement countdown value
//         }
//     }, 1000);
// });




// Method : 2


// document.getElementById('btn-count').addEventListener('click', () => {
//     let inputcount = parseInt(document.getElementById('input-count').value);
//     console.log(inputcount);

//     let countValue = document.getElementById('count');
//     let timeupvalue = document.getElementById('timeup');

//     function timer(num) {
//         for (let i = num; i >= 0; i--) {
//             setTimeout(() => {
//                 countValue.innerHTML = `${i}`; // Update countdown display
//                 if (i === 0) {
//                     timeupvalue.innerHTML = `Time Over⌛`; // Display time over message
//                 }
//             }, (num - i) * 1000); // Delay execution based on countdown value
//         }
//     }

//     timer(inputcount); // Start countdown
// });
