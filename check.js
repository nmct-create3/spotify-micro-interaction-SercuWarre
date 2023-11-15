document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.querySelector('.album__action');

  // Voeg een click event listener toe aan de toggle button
  toggleButton.addEventListener('click', function () {
    // Voeg de "added" class toe aan de toggle button
    console.log('clicked');
    toggleButton.classList.toggle('added');
  });
});
