const textElement = document.getElementById('typing-text');
const textToType = 'idea';
let index = 0;

function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust typing speed here (in milliseconds)
    } else {
        setTimeout(eraseText, 1000); // Delay before erasing text (in milliseconds)
    }
}

function eraseText() {
    if (index > 0) {
        textElement.textContent = textToType.substring(0, index - 1);
        index--;
        setTimeout(eraseText, 50); // Adjust erasing speed here (in milliseconds)
    } else {
        index = 0;
        setTimeout(typeText, 1000); // Delay before starting to type again (in milliseconds)
    }
}

typeText();