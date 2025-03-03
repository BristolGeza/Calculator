let display = document.getElementById('display');
let memory = 0;

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/Math\.sqrt\(/g, 'Math.sqrt').replace(/ /g, ''));
    } catch (error) {
        display.value = 'Error';
    }
}

function convertToRadians() {
    let degrees = parseFloat(display.value);
    if (!isNaN(degrees)) {
        let radians = degrees * (Math.PI / 180);
        display.value = radians;
    } else {
        display.value = 'Error';
    }
}

function storeMemory() {
    memory = parseFloat(display.value);
}

function recallMemory() {
    display.value += memory;
}

function clearMemory() {
    memory = 0;
}
