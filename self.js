// Get the navbar element
const navbar = document.querySelector('nav');

// Open the modal
function openModal(modalId) {
  // Display the modal
  document.getElementById(modalId).style.display = 'block';
  
  // Hide the navbar when the modal is open
  navbar.classList.add('hide-navbar');  // This class should be defined in your CSS to hide the navbar
}

// Close the modal
function closeModal(modalId) {
  // Hide the modal
  document.getElementById(modalId).style.display = 'none';
  
  // Show the navbar when the modal is closed
  navbar.classList.remove('hide-navbar');  // Remove the class to show the navbar again
}

// Close the modal if clicked outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
      if (event.target == modal) {
          // Hide the modal
          modal.style.display = "none";
          
          // Show the navbar again when the modal is closed
          navbar.classList.remove('hide-navbar');  // Ensure navbar is shown again
      }
  });
}

// Show the result after submitting the form with animation
function showResult(event, resultId) {
  event.preventDefault();  // Prevent form from refreshing the page
  
  // Hide the form and display the result
  const form = event.target;
  form.style.display = 'none';  // Hide the form
  
  const resultDiv = document.getElementById(resultId);
  resultDiv.style.display = 'block';  // Show the result section
  
  // Add animation class to the result div
  resultDiv.classList.add('result-fade-in');
}
