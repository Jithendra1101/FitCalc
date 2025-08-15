
function handleTabs(e) {
    let tabs = document.querySelectorAll("section.tabs > button");
    let tabContents = document.querySelectorAll(".calculator .tab-content");
    let target = e.target;
    let selectedTab = target.id;

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }


    target.classList.add("active");
    document.querySelector(`.calculator .tab-content[for=${selectedTab}]`).classList.add("active");

}

function handleBMI() {
    const height = parseFloat(document.querySelector(".tab-content[for=bmi] input[name=height]").value);
    const weight = parseFloat(document.querySelector(".tab-content[for=bmi] input[name=weight]").value);
    const resultBox = document.querySelector(".tab-content[for=bmi] div.result");

    if (height && weight) {
        let bmi = (weight / (height * height)) * 10000;
        let bmiClass;

        switch (true) {
            case (bmi < 18.5):
              bmiClass = "Underweight";
              break;
            case (bmi >= 18.5 && bmi < 25):
              bmiClass = "Normal weight";
              break;
            case (bmi >= 25 && bmi < 30):
              bmiClass = "Overweight";
              break;
            case (bmi >= 30):
              bmiClass = "Obese";
              break;
            default:
              alert("Invalid BMI");
          }

          resultBox.querySelector("#result_bmi").innerText = bmi.toFixed(2);
          resultBox.querySelector("#result_bmi_class").innerText = bmiClass;
          resultBox.classList.add("success");


    } else {
        alert("Please fill all inputs in number format. Use dot for decimals");
    }

}

function handleWater() {
    const activity = parseFloat(document.querySelector(".tab-content[for=water] input[name=activity]").value) || 0;
    const weight = parseFloat(document.querySelector(".tab-content[for=water] input[name=weight]").value);
    const resultBox = document.querySelector(".tab-content[for=water] div.result");

    if (weight) {
        let waterAmount = weight * 0.033 + activity * 0.35;
        resultBox.querySelector("#result_water").innerText = waterAmount.toFixed(2);
        resultBox.classList.add("success");


    } else {
        alert("Please fill the weight in number format. Use dot for decimals");
    }

}