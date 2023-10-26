const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const name = document.getElementById('name').value;
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;

    const weight = Number(weightInput.replace(/,/g, '').replace('.', ''));
    const height = Number(heightInput.replace(/,/g, '').replace('.', ''));

    console.log(name, weight, height);

    if (name.trim() === '' || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, preencha todos os campos com valores válidos.');
    } else {
        // Validação bem-sucedida, faça o cálculo do IMC aqui
        const imc = (weight / height ** 2).toFixed(5);
        
        let classificacao = '';

        if (imc < 0.0018,5) {
            classificacao = 'abaixo do peso.';
        } else if (imc < 0.0025) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (imc < 0.0030) {
            classificacao = 'levemente acima do peso.';
        } else if (imc < 0.0035) {
            classificacao = 'com obesidade grau I.';
        } else if (imc < 0.0040) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        alert(`Seu IMC é: ${imc} e você está ${classificacao}`);
    }
});