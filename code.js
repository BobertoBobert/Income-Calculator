function calculate() {
    //2D array of rates. first dimension is the lower limit of that bracket
    //Second dimension is the rate
    let rates = [
        [11851, 0.2],
        [46351, 0.4],
        [150000, 0.45]
        [0, 0]
    ]

    let rawIncome = document.getElementById("income").value;
    let tax = 0;
    if (rawIncome < rates[0][0]) {
        document.getElementById("breakdown").innerHTML =
            "All of your income fell into the personal tax bracket. This means " +
            "that you do not owe any taxes and will keep 100% of your income";
    } else {
        let i = 0;
        do {
            i++;
            console.log(i);
        }
        while ((i < 3) && (rawIncome > rates[i][0]));
        for (j = 0; j < i; j++) {
            tax += (rawIncome - rates[j][0]) * rates[j][1];
        }
    }
    //Rounding because JS is strange with floating point numbers
    tax = Math.round((tax + 0.00001) * 100) / 100;
    document.getElementById("result").innerHTML = ("Post Tax income: £" + (rawIncome - tax));
    console.log(tax);
}
