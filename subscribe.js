const subscribeForm = document.getElementById('subscribe-form');
const subscribeMessage = document.getElementById('subscribe-message');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const email = document.getElementById('email').value;

  // Simple validation (optional)
  if (!validateEmail(email)) {
    subscribeMessage.textContent = "Please enter a valid email address.";
    return;
  }

  const existingEmails = getEmailsFromLocalStorage(); // Retrieve existing emails

  existingEmails.push(email); // Add new email to the array

  storeEmailsInLocalStorage(existingEmails); // Store updated emails in Local Storage

  subscribeMessage.textContent = "You have subscribed successfully!";
  document.getElementById('email').value = ''; // Clear the email input after successful submission
});

// Optional email validation function (replace with your preferred validation logic)
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Function to retrieve emails from Local Storage (if any)
function getEmailsFromLocalStorage() {
  const storedEmails = localStorage.getItem('emails');
  return storedEmails ? JSON.parse(storedEmails) : [];
}

// Function to store emails in Local Storage
function storeEmailsInLocalStorage(emails) {
  localStorage.setItem('emails', JSON.stringify(emails));
}
