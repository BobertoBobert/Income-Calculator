function calculate() {
    //2D array of rates.
    //[minimum for that band, rate in band, max tax for that band]
    let rates = [
        [11850, 0.2, 6900],
        [46350, 0.4, 41460],
        [150000, 0.45, 0]
    ]

    let tax = 0;
    let rawIncome = document.getElementById("income").value;
    if (rawIncome < rates[0][0]) {
        document.getElementById("breakdown").innerHTML =
            "All of your income fell into the personal tax bracket. This means " +
            "that you do not owe any taxes and will keep 100% of your income";
    } else {
        let band = 0;
        do {
            band++;
        } while ((band < 3) && (rawIncome > rates[band][0]));
        band--;

        console.log(band);
        console.log(tax);

        for (j = 0; j < band; j++) {
            tax += rates[j][2];
        }
        tax += (rawIncome - rates[band][0]) * rates[band][1];

    }
    document.getElementById("result").innerHTML = ("Post Tax income: £" + (rawIncome - tax));
    console.log(tax);
}
