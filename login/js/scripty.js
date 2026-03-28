
const loginForm = document.getElementById('login-form');
const btnLogin = document.getElementById('btn-login');

loginForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Tentativa de login com:", email);

    if (email === "admin@teste.com" && password === "123456") {
        alert("Login realizado com sucesso! Bem-vindo.");
      
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
        
        document.getElementById('password').value = "";
    }
});

btnLogin.addEventListener('mousedown', () => {
    btnLogin.style.transform = "scale(0.98)";
});

btnLogin.addEventListener('mouseup', () => {
    btnLogin.style.transform = "scale(1)";
});