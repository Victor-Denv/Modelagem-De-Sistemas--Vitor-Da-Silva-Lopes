// Select the display element
const display = document.getElementById('visor');



 {string} value

function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        
        display.value = eval(display.value);
    } catch (error) {
        
        display.value = 'Error';
    }
}