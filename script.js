const inputEmail = document.getElementById('email');
const button = document.getElementById('button');

function start() {
    inputEmail.focus();
    sendEmail();
}

function showAlert(message) {
    alert(message);
}

function isEmptyInput() {
    if (inputEmail.value === "") {
        showAlert("E-mail vazio");
        inputEmail.focus();
    } else {
        showAlert("E-mail enviado com sucesso!");
        inputEmail.focus();
    }
}

function sendEmail(){
    button.addEventListener('click', () => {
        isEmptyInput();
    });
}

start()