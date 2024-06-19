document.getElementById('loginForm').addEventListener('mouseover', essa);
  
document.getElementById('redButton').addEventListener('click', function() {
    changeBackgroundColor('#ffcccb');
});

function changeBackgroundColor(color) {
document.body.style.backgroundColor = color;
}

document.getElementById('greenButton').addEventListener('click', function() {
changeBackgroundColor('#c9ffc9');
});
function essa(event){
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obter os valores dos campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você faria a comparação com dados válidos (simulação simples)
    if (username === 'usuario' && password === 'senha') {
        showMessage('success', 'Login successful!');
    } else {
        showMessage('error', 'Invalid username or password. Please try again.');
    }

}
function showMessage(type, message) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = message;

    if (type === 'error') {
        messageElement.style.color = 'red';
    } else {
        messageElement.style.color = 'green';
}
}
  