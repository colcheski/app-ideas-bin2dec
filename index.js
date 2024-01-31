const button = document.getElementById('checkBtn');
const input = document.getElementById('binaryInput');
const label = document.getElementById('decimalLabel');

function checkInputValidity() {
  return /^[01]+$/.test(input.value);
};

function handleInputChange() {
  input.addEventListener('input', () => {
    button.disabled = !checkInputValidity(input.value);
  });
};

function convertBinaryToDecimal() {
  const digits = input.value.split('').map(x => parseInt(x));
  let exponent = 0;
  let decimalValue = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    decimalValue += digits[i] * 2**exponent;
    exponent++;
  }
  label.innerHTML = decimalValue;
}

function handleButtonPress() {  
  button.addEventListener('click', () => {
    convertBinaryToDecimal();
  });
}

handleInputChange();
handleButtonPress();






