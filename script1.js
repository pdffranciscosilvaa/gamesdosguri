document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Valores fixos para validação
    const correctEmail = 'usuario@exemplo.com';
    const correctPassword = 'senha123';

    // Obtém os valores inseridos pelo usuário
    const enteredEmail = document.querySelector('input[name="email"]').value;
    const enteredPassword = document.querySelector('input[name="password"]').value;

    // Verifica se o email e a senha estão corretos
    if (enteredEmail !== correctEmail) {
        alert('Email errado!');
    } else if (enteredPassword !== correctPassword) {
        alert('Senha errada!');
    } else {
        alert('Login realizado com sucesso!');
    }
});
