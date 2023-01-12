const inputs = document.querySelectorAll(".email");
const send = document.querySelectorAll(".get-started");
const validate = document.querySelectorAll(".email-validate");

validate.forEach((x) => {
  x.style.display = "none";
})
const regex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

send.forEach((x, i) => {
  x.disabled = false;
  x.addEventListener("click", () => {
    const input_value = inputs[i].value;
    if (regex.test(input_value) != true) {
      inputs[i].style.border = "thin solid red";
      validate[i].style.display = "block";
      x.disabled = true;
    } else {
      inputs[i].style.border = "thin solid green";
      validate[i].style.display="none";
      x.disabled = false;
    }
  })
})

/* 
const inputs = document.querySelectorAll(".email");
const send = document.querySelectorAll(".get-started");
const validate = document.querySelectorAll(".email-validate");
const button1 = send[0];
const button2 = send[1];
const input1 = inputs[0];
const input2 = inputs[1];
const validate1 = validate[0];
const validate2 = validate[1];

validate.forEach((x) => {
  x.style.display = "none";
});
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

button1.addEventListener("click", () => {
  button1.disable = false;
  if (regex.test(input1.value) != true) {
    input1.style.border = "thin solid red";
    validate1.style.display = "block";
    button1.disabled = true;
  } else {
    input1.style.border = "thin solid green";
    validate1.style.display = "none";
    button1.disabled = false;
  }
});

button2.addEventListener("click", () => {
  if (regex.test(input2.value) != true) {
    input2.style.border = "thin solid red";
    validate2.style.display = "block";
    button2.disabled = true;
  } else {
    input2.style.border = "thin solid green";
    validate2.style.display = "none";
    button2.disabled = false;
  }
});
*/