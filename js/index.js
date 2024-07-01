let number = prompt("Son kiriting");
number = parseInt(number);
if (!isNaN(number)) {
    let evenNumbers = "Juft sonlar: ";
    let oddNumbers = "Toq sonlar: ";
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            evenNumbers += i + " ";
        } else {
            oddNumbers += i + " ";
        }
    }
    alert(evenNumbers);
    alert(oddNumbers);
} else {
    alert("Iltimos, to'g'ri son kiriting.");
}

