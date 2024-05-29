function calculateBMI() {
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
            var bmi = weight / (height * height);

            if (isNaN(bmi)) {
                document.getElementById('result').innerText = "Please enter valid values.";
                return;
            }

            var bmiResult = "Your BMI is " + bmi.toFixed(2) + ". ";

            if (bmi < 18.5) {
                bmiResult += "You are underweight.";
            } else if (bmi < 25) {
                bmiResult += "You have a normal weight.";
            } else if (bmi < 30) {
                bmiResult += "You are overweight.";
            } else {
                bmiResult += "You are obese.";
            }

            document.getElementById('result').innerText = bmiResult;
        }
