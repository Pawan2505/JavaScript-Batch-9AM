const endDate = "Fri Mar 21 2025 11:39:53 AM";
document.getElementById("end-date").innerHTML = `End time : ${endDate}`;
let inputs = document.getElementsByTagName("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();

  let diff = (end - now) / 1000; // second

  if (diff < 0) {
    return;
  }

  inputs[0].value = Math.floor(diff / 60 / 60 / 24); // days
  inputs[1].value = Math.floor((diff / 60 / 60) % 24); // hours
  inputs[2].value = Math.floor((diff / 60) % 60); // minutes
  inputs[3].value = Math.floor(diff % 60); // seconds
}



setInterval(clock, 1000);
