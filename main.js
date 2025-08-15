
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

    // Calorie Intake Calculator
    function handleCalorie() {
        const unit = document.getElementById('unitToggle').value;
        const age = parseInt(document.getElementById('calorieAge').value);
        const gender = document.getElementById('calorieGender').value;
        let height = parseFloat(document.getElementById('calorieHeight').value);
        let weight = parseFloat(document.getElementById('calorieWeight').value);
        const activity = parseFloat(document.getElementById('calorieActivity').value);
        const resultBox = document.querySelector('.tab-content[for=calorie] .result');

        if (!age || !height || !weight || !activity) {
            alert('Please fill all inputs in number format.');
            return;
        }

        // Convert to metric if needed
        if (unit === 'imperial') {
            height = height * 2.54; // inches to cm
            weight = weight * 0.453592; // lbs to kg
        }

        // Mifflin-St Jeor formula
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        const maintenance = Math.round(bmr * activity);
        const loss = maintenance - 500;
        const gain = maintenance + 500;

        resultBox.querySelector('#result_calorie_maint').innerText = maintenance + ' kcal';
        resultBox.querySelector('#result_calorie_loss').innerText = loss + ' kcal';
        resultBox.querySelector('#result_calorie_gain').innerText = gain + ' kcal';
        resultBox.classList.add('success');
    }

    // Unit Conversion Toggle for Calorie Calculator
    function handleUnitToggle() {
        const unit = document.getElementById('unitToggle').value;
        document.getElementById('heightUnit').innerText = unit === 'metric' ? 'cm' : 'in';
        document.getElementById('weightUnit').innerText = unit === 'metric' ? 'kg' : 'lbs';
    }

    // Step Count Goal Suggestion
    function handleSteps() {
        const age = parseInt(document.getElementById('stepAge').value);
        const activity = document.getElementById('stepActivity').value;
        const resultBox = document.querySelector('.tab-content[for=steps] .result');

        if (!age || !activity) {
            alert('Please fill all inputs.');
            return;
        }

        let steps;
        switch (activity) {
            case 'sedentary':
                steps = 5000;
                break;
            case 'lightly active':
                steps = 7500;
                break;
            case 'active':
                steps = 10000;
                break;
            case 'very active':
                steps = 12500;
                break;
            default:
                steps = 5000;
        }
        resultBox.querySelector('#result_steps').innerText = steps + ' steps';
        resultBox.classList.add('success');
    }