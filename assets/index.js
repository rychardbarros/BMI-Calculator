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
    
        const imc = weight / (height * height);

        if (imc < 18.5) {
            result.style.backgroundColor = 'red';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está abaixo do peso.`;
        } else if (imc < 25) {
            result.style.backgroundColor = 'green';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com peso ideal. Parabéns!!!`;
        } else if (imc < 30) {
            result.style.backgroundColor = 'yellow';
            result.style.color = 'black'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está levemente acima do peso.`;
        } else if (imc < 35) {
            result.style.backgroundColor = 'orange';
            result.style.color = 'black'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com obesidade grau I.`;
        } else if (imc < 40) {
            result.style.backgroundColor = 'red';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com obesidade grau II.`;
        } else {
            result.style.backgroundColor = 'darkred';
            result.style.color = 'white'
            result.innerHTML = `Ola ${name} seu IMC é: ${imc.toFixed(2)} - Você está com obesidade grau III. Cuidado!!`;
        }
    }
});
