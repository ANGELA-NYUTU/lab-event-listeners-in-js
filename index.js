// Generate random RGB color
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomRGB();
}

// Reset background color
function resetBackgroundColor() {
    document.body.style.backgroundColor = '';
}

// Display key pressed
function displayKeyPress(event) {
    const keyPressDisplay = document.getElementById('keyPressDisplay');
    if (keyPressDisplay) {
        keyPressDisplay.textContent = `Key pressed: ${event.key}`;
    }
}

// Display user input
function displayUserInput() {
    const textInput = document.getElementById('textInput');
    const textInputDisplay = document.getElementById('textInputDisplay');

    if (textInput && textInputDisplay) {
        textInputDisplay.textContent = `You typed: ${textInput.value}`;
    }
}

// Attach Event Listeners
function setupEventListeners() {
    const changeColorButton = document.getElementById('changeColorButton');
    const resetColorButton = document.getElementById('resetColorButton');
    const textInput = document.getElementById('textInput');

    if (changeColorButton) {
        changeColorButton.addEventListener('click', changeBackgroundColor);
    }

    if (resetColorButton) {
        resetColorButton.addEventListener('dblclick', resetBackgroundColor);
    }

    document.addEventListener('keydown', displayKeyPress);

    if (textInput) {
        textInput.addEventListener('input', displayUserInput);
    }
}

// Initialize immediately (works in Jest)
if (typeof window !== 'undefined') {
    setupEventListeners();
}

module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
};