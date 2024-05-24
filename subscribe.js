const subscribeForm = document.getElementById('subscribe-form');
const subscribeMessage = document.getElementById('subscribe-message');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = document.getElementById('email').value;

  if (!validateEmail(email)) {
    subscribeMessage.textContent = "Please enter a valid email address.";
    return;
  }

  const existingEmails = getEmailsFromLocalStorage(); 

  existingEmails.push(email); 

  storeEmailsInLocalStorage(existingEmails); 

  subscribeMessage.textContent = "You have subscribed successfully!";
  document.getElementById('email').value = ''; 
});


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function getEmailsFromLocalStorage() {
  const storedEmails = localStorage.getItem('emails');
  return storedEmails ? JSON.parse(storedEmails) : [];
}

function storeEmailsInLocalStorage(emails) {
  localStorage.setItem('emails', JSON.stringify(emails));
}
