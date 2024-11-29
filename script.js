// Função para calcular a soma
function calcularSoma() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    // Verificar se os campos estão preenchidos
    if (num1 === '' || num2 === '') {
        alert('Por favor, insira os dois números!');
        return;
    }

    // Realizar a soma
    const soma = parseFloat(num1) + parseFloat(num2);

    // Exibir o resultado
    document.getElementById('resultado').textContent = soma;
}

// Adicionar evento de clique ao botão
document.getElementById('btnSoma').addEventListener('click', calcularSoma);
