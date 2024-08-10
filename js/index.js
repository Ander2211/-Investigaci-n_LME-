function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        alert('Por favor ingrese peso y altura.');
        return;
    }
    if(weight >= 100 || height >= 2.20){
        alert('Los valores ingresados no son válidos.');
        return;
    }

    
    var bmi = weight / (height * height);

    document.getElementById('result').innerText = `Tu IMC es ${bmi.toFixed(2)}`;
}