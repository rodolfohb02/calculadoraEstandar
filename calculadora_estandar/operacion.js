let displayValue = '0';

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function toggleSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
        // Limpiar la pantalla después de calcular
        setTimeout(clearDisplay, 1000); // Puedes ajustar el tiempo según tus preferencias
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendToDisplay(value) {
    if (value === '.' && displayValue.includes('.')) {
        // Si el valor es un punto y ya hay un punto en el número, no hacer nada.
        return;
    }

    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}
