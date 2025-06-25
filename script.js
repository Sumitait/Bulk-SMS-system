document.getElementById('login').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (username && password) {
    // Mock login logic
    if (username === 'admin' && password === 'password') {
      alert('Login Successful!');
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('sms-dashboard').style.display = 'block';
    } else {
      alert('Invalid login credentials');
    }
  }
});

document.getElementById('send-sms').addEventListener('click', function () {
  const recipients = document.getElementById('recipients').value;
  const message = document.getElementById('message').value;

  if (recipients && message) {
    // Mock API call
    alert(`SMS sent to: ${recipients}`);
    document.getElementById('sms-status').innerText = 'SMS Sent Successfully!';
  } else {
    alert('Please enter recipients and a message.');
  }
});


const twilio = require('twilio');
const client = new twilio('ACdcc0164ed6ab98544ac2c41b2faad93e', '377b088ba34151fd6422e3fa8ec9bed4');

client.messages.create({
  body: 'Your message here',
  to: '+917419880744',
  from: '+919651959928'
}).then((message) => console.log(message.sid));