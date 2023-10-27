const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const name = document.getElementById('name').value;
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;

    const weight = parseFloat(weightInput.replace(/,/g, '').replace('.', ''));
    const height = parseFloat(heightInput.replace(/,/g, '').replace('.', '') / 100);

    if (name.trim() === '' || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, preencha todos os campos com valores válidos.');
    } else {
        // Validação bem-sucedida, faça o cálculo do IMC aqui
        const imc = weight / (height * height);

        if (imc < 18.5) {
            classificacao = 'abaixo do peso';
            result.style.backgroundColor = 'red';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está abaixo do peso.`;
        } else if (imc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
            result.style.backgroundColor = 'green';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com peso ideal. Parabéns!!!`;
        } else if (imc < 30) {
            classificacao = 'levemente acima do peso.';
            result.style.backgroundColor = 'yellow';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está levemente acima do peso.`;
        } else if (imc < 35) {
            classificacao = 'com obesidade grau I.';
            result.style.backgroundColor = 'orange';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com obesidade grau I.`;
        } else if (imc < 40) {
            classificacao = 'com obesidade grau II';
            result.style.backgroundColor = 'red';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com obesidade grau II.`;
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
            result.style.backgroundColor = 'darkred';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com obesidade grau III. Cuidado!!`;
        }
    }
});
