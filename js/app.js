//variables 
const sendBtn = document.getElementById('sendBtn'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        message = document.getElementById('message'),
        resetBtn =document.getElementById('resetBtn'),
        sendEmailForm = document.getElementById('email-form');


//event listener
EventListeners();

function EventListeners() { 
    document.addEventListener('DOMContentLoaded', appInit);

    // validate the forms 
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //send email and reset button
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);


}

//function

//app initialazation
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}
function sendEmail(e) {
    e.preventDefault();

    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    // hide spinner then show the email sebnt image
    setTimeout(function() {
        // hide the spinner
        spinner.style.display = 'none';

        // show the image
        document.querySelector('#loaders').appendChild( sendEmailImg );

        //after 5 seconds, hide the image and reset the form
        setTimeout(function() { 
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 2000)
    }, 3000 ); 
}



// validate the fields
function validateField() {
    let errors; 
    // validate the length of the field
    validatelength(this);

    // validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }
    
    //both will return errors, then check if there are any erors
    errors = document.querySelectorAll('.error')



    //check that the input are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}


// validates the length of the field
function validatelength(field) {
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// validate email

function validateEmail(field) {
    let emailText = field.value;

// check if the emailtext contains @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
        }
 }

 // reset the form
 function resetForm() {
    sendEmailForm.reset();
 }
