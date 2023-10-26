const textElement = document.getElementById('typing-text');
// This line selects an HTML element with the id 'typing-text' and stores it in the textElement variable. This element is where the typing effect will be displayed.
const textToType = '25 Github Repositories Every Software Engineer Should Follow';
// This line initializes a string variable textToType with the text that you want to be typed out.
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

// Code explained:
/*
The JavaScript code is an implementation of a typing effect. It searches for an HTML element with the ID "typing-text" and sets it as the element to type on. The variable  contains the text that will be written. The  function is called recursively with a delay of 100 milliseconds. Each time it is called, it adds a single character from  to the text content of the  using  and increments the  variable. When the  variable is equal to the length of , the function calls the  function after a delay of 1000 milliseconds. The  function is called recursively with a delay of 50 milliseconds. Each time it is called, it removes a single character from the end of the text content of  using  and decrements the  variable. When the  variable is equal to 0, the function sets the  variable back to 0 and calls the  function after a delay of 1000 milliseconds. The HTML code is an empty skeleton for an HTML document. It includes the  declaration, which tells the browser that this is an HTML5 document, and the opening and closing  tags. The  section, which is missing in this example, typically contains various meta tags and links to external resources such as stylesheets and scripts. The  section is where the visible content of the page is placed.
*/ 