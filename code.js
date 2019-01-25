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
        tax.toFixed(2);
        document.getElementById("breakdown").innerHTML =
            "Your income was " + rawIncome + ". This means that your income falls into tax bracket " + band + ". However, " +
            "this does not mean that all of your income taxed at the rate of band " + band + " (" + (rates[band][1]) * 100 + "%) , instead the proportion " +
            "of your income which would fall in the lower tax bands is taxed at the respective rate for that band.";

    }
    document.getElementById("result").innerHTML = ("Post Tax income: £" + (rawIncome - tax));
    console.log(tax);
}

var data = {
    type: "sankey",
    orientation: "h",
    node: {
        pad: 15,
        thickness: 30,
        line: {
            color: "black",
            width: 0.5
        },
        label: ["Raw Income", "Basic", "Higher", "Additional", "Tax", "Your Pocket"],
        color: ["blue", "blue", "blue", "blue", "blue", "blue"]
    },

    link: {
        source: [0, 0, 0, 1, 2, 3, 1, 2, 3],
        target: [1, 2, 3, 5, 5, 5, 4, 4, 4],
        value: [10, 10, 10, 9, 9, 9, 1, 1, 1]
    }
}

var data = [data]

var layout = {
    title: "",
    font: {
        size: 10
    }
}

Plotly.react('myDiv', data, layout)