const Button = document.getElementById("GenerateButton");
const Result = document.getElementById("Result");
const Input = document.getElementById("InputNumber")
let AgenerateNumber;
Button.onclick = function(){
AgenerateNumber= Number(Math.floor(Math.random() * Input.value));
Result.textContent = `A generated number is ${AgenerateNumber}`;
}
