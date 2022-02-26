let operator;
function calculate() {
    const resultField = document.getElementById("result");
    const num = Number(document.getElementById("num").value);
    const num1 = Number(document.getElementById("num1").value);
    switch (operator) {
      case '+':
        result = num + num1;
        break;
      case '-':
        result = num - num1;
        break;
      case '*':
        result = num * num1;
        break;
      case '/':
        if (num1 == 0) {
          result = "undefined";
        } else {
          result = num / num1;
        }
        break;
      default:
        result = 'choose operation';
    }

    resultField.innerText = result;
  };