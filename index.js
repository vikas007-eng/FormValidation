
console.log("hey!!");
const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let namevalid = false;
let emailvalid = false;
let phonevalid = false;
// to remove space from top 
let failure = document.getElementById('failure');
let success = document.getElementById('success');
failure.style.display = 'none';
success.style.display =' none';

Name.addEventListener('blur', () => {
    console.log("Name is Blurred.");
    //validate name here
    let regex = /^([a-zA-Z]+) ([a-zA-Z]+){2,10}$/; //size 2 to 10 size se chhota nai ho skta
    let str = Name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your name is valid");
        Name.classList.remove('is-invalid');
        namevalid = true;
    } else {
        console.log("Your name is not valid")
        Name.classList.add('is-invalid');
        namevalid = false;
    }
});
email.addEventListener('blur', () => {
    console.log("Name is Blurred.");
    //validate email here
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){3,10}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        emailvalid = true;
    } else {
        console.log("Your email is not valid")
        email.classList.add('is-invalid');
        emailvalid = false; // otherswise phle currect dal k bad m wrong info fill krenge then also it will show success
    }
});
phone.addEventListener('blur', () => {
    console.log("Name is Blurred.");
    //validate phone number here
    let regex = /^([0-9]){10}$/; //size 10
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        phonevalid = true;
    } else {
        console.log("Your phone is not valid")
        phone.classList.add('is-invalid');
        phonevalid = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault(); // submit krne m sb gayb hone se bchayga
    console.log("You clicked submit");
    console.log(namevalid, emailvalid, phonevalid);

    //submit your form here

    if (namevalid && emailvalid && phonevalid) {
        console.log('your name , email and phone are valid , submitting the form..');
        // let success = document.getElementById('success');
        // failure = document.getElementById('failure');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#success').show();
        $('#failure').hide();

    } else {
        console.log('one of your name , email or phone are not valid ,hence not submitting the form..')
        // failure = document.getElementById('failure');
        //  success = document.getElementById('success');
        failure.classList.add('show');
        // success.classList.remove('show');
       $('#success').hide();
       $('#failure').show();

       
    }
})