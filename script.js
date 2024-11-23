// Predefined password
const correctPassword = "05110618";

// Function to check password and start animations
function checkPassword() {
  const userPassword = document.getElementById('password').value;

  if (userPassword === correctPassword) {
    // Show the cracker animation
    showCrackers();

    // After 5 seconds, show the "I LOVE YOU NIDHI!!!" message with the heart
    setTimeout(function() {
      showMessage();
    }, 5000);
  } else {
    alert("Incorrect password!");
  }
}

// Function to create cracker animation
function showCrackers() {
  const crackersContainer = document.getElementById('crackers');
  crackersContainer.style.display = 'block';  // Show the crackers

  // Create multiple cracker elements
  for (let i = 0; i < 30; i++) {
    const cracker = document.createElement('div');
    cracker.classList.add('cracker');
    cracker.style.top = `${Math.random() * 100}%`;
    cracker.style.left = `${Math.random() * 100}%`;
    crackersContainer.appendChild(cracker);
  }

  // Hide the crackers after 5 seconds
  setTimeout(function() {
    crackersContainer.style.display = 'none';
  }, 5000);
}

// Function to show the "I LOVE YOU NIDHI!!!" message with heart
function showMessage() {
  const message = document.getElementById('message');
  message.classList.add('show-message');
  message.style.display = 'block'; // Make sure it's visible
}
