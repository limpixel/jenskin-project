// script.js
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
  
    let counter = 0;
  
    incrementButton.addEventListener('click', function() {
      counter++;
      counterElement.textContent = counter;
    });
  });
  