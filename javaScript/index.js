const error_message = document.querySelectorAll(".email-validate");
error_message.forEach((x) => {
  x.style.display = "none";
});

const formTop = document.querySelector(".form-top");
const formBottom = document.querySelector(".form-bottom");
const emailTop = formTop.querySelector(".email");
const emailBottom = formBottom.querySelector(".email");
const emailValidateTop = formTop.querySelector(".email-validate");
const emailValidateBottom = formBottom.querySelector(".email-validate");
const getStartedTop = formTop.querySelector(".get-started-btn");
const getStartedBottom = formBottom.querySelector(".get-started-btn");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateEmail(input) {
    if (input.value === "") {
      emailValidateTop.style.display = 'block';
      emailValidateBottom.style.display = 'block';
      getStartedTop.disabled = true;
      getStartedBottom.disabled = true;
    } else if (input.value.match(emailRegex)) {
      emailValidateTop.style.display = 'none';
      emailValidateBottom.style.display = 'none';
      getStartedTop.disabled = false;
      getStartedBottom.disabled = false;
    }else{
      emailValidateTop.style.display = 'block';
      emailValidateBottom.style.display = 'block';
      getStartedTop.disabled = true;
      getStartedBottom.disabled = true;
    }
  }

emailTop.addEventListener("input", () => validateEmail(emailTop));
emailBottom.addEventListener("input", () => validateEmail(emailBottom));
