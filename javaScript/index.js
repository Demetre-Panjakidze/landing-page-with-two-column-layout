// const error_message = document.querySelectorAll(".email-validate");
// error_message.forEach((x) => {
//   x.style.display = "none";
// })

const getStartedBtns = document.querySelectorAll('.get-started');
const emailInputs = document.querySelectorAll('.email');
const emailValidates = document.querySelectorAll('.email-validate');

getStartedBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInputs[index].value;
        if(email === ''){
            emailValidates[index].innerHTML = 'Email is empty';
        }
        else if(!validateEmail(email)){
            emailValidates[index].innerHTML = 'Email is not valid';
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}