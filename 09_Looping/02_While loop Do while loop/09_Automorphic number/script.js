function checkAutomorphic() {
    let num = document.getElementById("numInput").value;

    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    let numstr = num.toString();
    let numsqr = num * num;
    let numsqrstr = numsqr.toString();

    if (numsqrstr.endsWith(numstr)) {
        document.getElementById("result").innerText = `${num} is an Automorphic Number! ✅`;
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = `${num} is NOT an Automorphic Number! ❌`;
        document.getElementById("result").style.color = "red";
    }
}
