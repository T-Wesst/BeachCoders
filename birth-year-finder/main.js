function calculate() {
    var number = document.getElementById("number").value;
    if (number ==="") {
        alert("Please insert your age");
    } else if (number <= 0) {
        alert("Please type in a valid age")
    }
    var date = new Date().getFullYear();
    var birthYear = date - number;

    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your birth year is " + birthYear;
}

document.getElementById("year").style.display = "none";

document.getElementById("button").onclick = function () {
    calculate();
};
