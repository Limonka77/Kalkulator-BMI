const category = [{
        result: "< 18.5",
        name: "Twoje BMI wskazuje na niedowagę",
        type: "info"
    },
    {
        result: "18–25",
        name: "Twoje BMI wskazuje, że Twoja masa ciała jest prawidłowa w stosunku do wzrostu.",
        type: "normal"
    },
    {
        result: "25–30",
        name: "Twoje BMI wskazuje na nadwagę",
        type: "warn"
    },
    {
        result: "30 - 35",
        name: "Twoje BMI wskazuje na otyłość I stopnia",
        type: "warn"
    },
    {
        result: "35 >",
        name: "Twoje BMI wskazuje na otyłość II stopnia",
        type: "warn"
    }
]

const calculate = function (form, event) {

    event.preventDefault();

    let heightH = document.querySelector("#height");
    let weightW = document.querySelector("#weight");

    let weight = parseFloat(weightW.value);
    let height = parseFloat(heightH.value);

    let bmi = weight / Math.pow(height / 100, 2);

    console.log("twoj wynik to" + bmi);
    let index = -1;

    // BMI = weight (kg) ÷ height^2 (m)

    if (bmi <= 18) {
        index = 0;
    } else if (bmi > 18 && bmi <= 25) {
        index = 1;
    } else if (bmi > 25 && bmi <= 30) {
        index = 2;
    } else if (bmi > 30 && bmi <= 35) {
        index = 3;
    } else if (bmi > 35) {
        index = 4;
    } else {
        alert("nie wpisałeś żadnej wartości liczbowej!")
    }

    let result = category[index];
    let bmiResult = document.querySelector("#bmi-result");


    bmiResult.style.display = "block";
    bmiResult.textContent = result.name;
    bmiResult.classList += " alert" + " " + result.type;
    console.log(bmiResult);

    let clearBtn = document.querySelector("clearBtn");

    myFunc = function () {
        if (result.type == "info") {
            bmiResult.classList.remove("info");
            bmiResult.textContent=" ";
            console.log("lol");
        } else if (result.type == "normal") {
            bmiResult.classList.remove("normal");
            bmiResult.textContent=" ";
            console.log("pop");
        } else (result.type == "warn"); {
            bmiResult.classList.remove("warn");
            bmiResult.textContent=" ";
            console.log("pip");
        }
    }
};