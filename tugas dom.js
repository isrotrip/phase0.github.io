//buat background warna dinamis
document.body.style.height = '100%';
document.body.addEventListener('mousemove', function(event){
    var xPosition = Math.round(event.clientX/window.innerWidth*255);
    var yPosition = Math.round(event.clientY/window.innerHeight*255);
    var zPosition = Math.round((xPosition**2 + yPosition**2)/255*2)
    document.body.style.backgroundColor = 'rgb(' + xPosition + ', ' + yPosition + ', ' + zPosition + ')';
})

var container = document.getElementById('container');

//buat main div
var mainDiv = document.createElement('div');
var mainDivAttrId = document.createAttribute('id');
mainDivAttrId.value = 'main';
mainDiv.setAttributeNode(mainDivAttrId);
container.appendChild(mainDiv);

//buat h1 Registration Form
var h1 = document.createElement('h1');
h1.setAttribute('id','formHeader')
h1.innerHTML = 'Registration Form';
mainDiv.appendChild(h1);
mainDiv.style.textAlign = 'center';
mainDiv.style.color = 'red';

//buat boxtemplate
var boxTemplate = document.createElement('div');
boxTemplate.setAttribute('id', 'template');
mainDiv.appendChild(boxTemplate);
boxTemplate.style.border = '4px solid red';
boxTemplate.style.padding = '7px 10px';
boxTemplate.style.height = '340px';
boxTemplate.style.width = '30%';
boxTemplate.style.margin = 'auto';
boxTemplate.style.backgroundColor = 'pink'; 
boxTemplate.style.borderRadius = '25px';

//buat isi boxtemplate
var forms = document.createElement('form');
forms.style.textAlign = 'left';
forms.style.fontSize = '15px';
forms.style.lineHeight = '0px';
forms.style.fontWeight = 'bold';
forms.style.color = 'darkred';
boxTemplate.appendChild(forms);

//isi form
var formUsername = document.createElement('p');
formUsername.innerHTML = 'Username :';
forms.appendChild(formUsername);

var inputName = document.createElement('input');
inputName.setAttribute('class', 'required');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'username');
inputName.style.width = '96%';
forms.appendChild(inputName);

var formPassword = document.createElement('p');
formPassword.innerHTML = 'Password :';
forms.appendChild(formPassword);

var inputPassword = document.createElement('input');
inputPassword.setAttribute('class', 'required');
inputPassword.setAttribute('type', 'password');
inputPassword.setAttribute('name', 'psw');
inputPassword.style.width = '96%'
forms.appendChild(inputPassword);

var formConfirmPassword = document.createElement('p');
formConfirmPassword.innerHTML = 'Confirm Password :';
forms.appendChild(formConfirmPassword);

var inputConfirmPassword = document.createElement('input');
inputConfirmPassword.setAttribute('class', 'required');
inputConfirmPassword.setAttribute('type', 'password');
inputConfirmPassword.setAttribute('name', 'confirmpsw');
inputConfirmPassword.style.width = '96%'
forms.appendChild(inputConfirmPassword);

var formEmail = document.createElement('p');
formEmail.innerHTML = 'Email :';
forms.appendChild(formEmail);

var inputEmail = document.createElement('input');
inputEmail.setAttribute('class', 'required');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.style.width = '96%'
inputEmail.value = '';
forms.appendChild(inputEmail);

var formConfirmEmail = document.createElement('p');
formConfirmEmail.innerHTML = 'Confirm Email :';
forms.appendChild(formConfirmEmail);
// console.log(forms)

var inputConfirmEmail = document.createElement('input');
inputConfirmEmail.setAttribute('class', 'required');
inputConfirmEmail.setAttribute('type', 'email');
inputConfirmEmail.setAttribute('name', 'confirmemail');
inputConfirmEmail.style.width = '96%'
forms.appendChild(inputConfirmEmail);

//buat submit button
var submitButton = document.createElement('input');
submitButton.setAttribute('id', 'submit');
submitButton.setAttribute('type', 'submit');
submitButton.value = 'Submit';
submitButton.style.margin = '10px 40%';
submitButton.style.padding = '5px 15px';
submitButton.style.textAlign = 'center';
submitButton.style.backgroundImage = 'radial-gradient(white, yellow, orange, red)'
submitButton.style.border = '1  px solid silver';
submitButton.style.borderRadius = '25px';
forms.appendChild(submitButton);

//buat list
var unorderList = document.createElement('ul');
unorderList.setAttribute('id', 'ul');
unorderList.innerHTML = 'In Lobby :';
unorderList.style.fontWeight = 'bold';
unorderList.style.fontSize = '20px'
unorderList.style.color = 'black';
unorderList.style.marginLeft = '-2%';
unorderList.style.textAlign = 'center';
mainDiv.appendChild(unorderList);

//validation Checker
var requiredSubmitInfo = document.getElementsByClassName('required');
for(var element in requiredSubmitInfo){
    requiredSubmitInfo[element].required = true;
};

var password = requiredSubmitInfo[1]
var passwordChecker = requiredSubmitInfo[2]

var email = requiredSubmitInfo[3];
email.addEventListener('input', function(event){
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I expect an e-mail, buddy!");
    }
    else{
        email.setCustomValidity("");
    }
})
var emailChecker = requiredSubmitInfo[4];
emailChecker.addEventListener('input', function(event){
    if (email.value !== emailChecker.value) {
        emailChecker.setCustomValidity('You didn\'t type right buddy');
    }
    else {
        emailChecker.setCustomValidity("");
    }
})
var submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
    if(requiredSubmitInfo[0].value.length < 1){
        alert('May i know your name please?');
        event.preventDefault();
    }
    else if(password.value.length < 1) {
        alert('Sorry buddy, but we need a 6 letter password');
        event.preventDefault();
    }
    else if(password.value.length < 6) {
        alert('Sorry buddy, but we needed at least 6 letter password');
        event.preventDefault();
    }
    else if (passwordChecker.value !== password.value) {
        alert("I can see you type wrong password, buddy");
        event.preventDefault();
    }
    else if (email.value.length < 1){
        alert("We need your email");
        event.preventDefault();
    }
    else if (email.value.indexOf('@') === -1 || email.value.indexOf('@') === email.value.length - 1){
        alert("I think you type wrong email buddy");
        event.preventDefault();
    }
    else if (email.value !== emailChecker.value){
        alert("You type wrong email confirmation buddy");
        event.preventDefault();
    }
    else {
        alert('Thank you for register ' + requiredSubmitInfo[0].value); 
        event.preventDefault();
        var newList = document.createElement('li');
        newList.innerHTML = requiredSubmitInfo[0].value;
        newList.style.fontSize = '18px';
        newList.style.listStyleType = 'none';
        document.getElementById('ul').appendChild(newList);
        for(var keys in requiredSubmitInfo){
            requiredSubmitInfo[keys].value = ''; 
        }
    }
})

