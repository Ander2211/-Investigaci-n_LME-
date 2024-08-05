function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        alert('Por favor ingrese peso y altura.');
        return;
    }
    if(weight >=100 || height >= 220){
        alert('valores ');
        return;
    }

    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);

    var resultText = '';

    

    document.getElementById('result').innerText = `Tu IMC es ${bmi.toFixed(2)} `;
}