function validateInputs() {
    const inputs = document.querySelectorAll('input[type="text"]');
   
    
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      
      if (input.value === '' || input.value === null) {
        input.style.borderColor = 'red';
        document.getElementById('error').innerHTML = "can't be blank";
        return false;
      }
       else {
        input.style.borderColor = '';
        const message = input.nextElementSibling;
        if (message && message.tagName === 'SPAN') {
          message.remove();
        }
        document.getElementById('bt1').addEventListener("click", toggle);
      }
    }
  }

  document.getElementById('bt1').addEventListener("click", fillup);
  function fillup(){     
    var v1 = document.getElementById('holder').value;
    var v3 = document.getElementById('expire1').value;
    var v4 = document.getElementById('expire2').value;
    var v5 = document.getElementById('cv_number').value;

    document.getElementById('H_name').innerHTML = v1;
    document.getElementById('mm').innerHTML = v3;
    document.getElementById('yy').innerHTML = v4;
    document.getElementById('cv').innerHTML = v5;
}
document.getElementById('bt1').addEventListener("click", addSpaces);

function addSpaces() {
  const numberInput = document.getElementById("number");
  const result = document.getElementById("cn");

  // Remove any existing spaces and convert input value to a string
  const inputValue = numberInput.value.toString().replace(/\s/g, '');

  // Check if input value is valid
  if (!inputValue || isNaN(inputValue)) {
    return;
  }

  // Add a space after every 3 digits
  const formattedValue = inputValue.replace(/\B(?=(\d{4})+(?!\d))/g, " ");

  // Update input value and display result
  number.value = formattedValue;
  result.textContent = formattedValue;
}


const numberField = document.getElementById('number');
numberField.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  if (inputValue.length > 16) {
    event.target.value = inputValue.slice(0, 16);
  }
});

function toggle() {
    var form = document.getElementById("form");
    var form1 = document.getElementById("form1");

    if (form.style.display === "none") {
      form.style.display = "block";
      form1.style.display = "none";
    } else {
      form.style.display = "none";
      form1.style.display = "block";
    }
};


