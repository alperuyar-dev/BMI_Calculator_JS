const button = document.getElementById("result-submit");
const BMI_Text = document.getElementById("BMI");
const result_Text = document.getElementById("result");
BMI_Text.style.display = "none";
result_Text.style.display = "none";
function loadBMI() {
  const weightValue = document.getElementById("weight").value;
  const heightValue = document.getElementById("height").value;
  const BMICalculation = weightValue / Math.pow(heightValue, 2);

  BMI_Text.innerHTML = "Your BMI is " + BMICalculation.toFixed(2);
  BMI_Text.style.display = "";
  result_Text.style.display = "";
  if (BMICalculation < 18.5) {
    result_Text.innerHTML = "Underweight";
  } else if (BMICalculation < 25) {
    result_Text.innerHTML = "Normal Weight";
  } else if (BMICalculation < 30) {
    result_Text.innerHTML = "Overweight";
  } else if (BMICalculation > 30) {
    result_Text.innerHTML = "Fat Ass";
  }
}
button.addEventListener("click", loadBMI);
