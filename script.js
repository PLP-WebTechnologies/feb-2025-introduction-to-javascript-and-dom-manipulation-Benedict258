// Change the text content of the intro paragraph when "Change Text" button is clicked
document.getElementById('change-text-btn').addEventListener('click', () => {
  const intro = document.getElementById('intro-text');
  intro.textContent = 'Text has been changed dynamically!';
  intro.style.color = 'blue';  // Also change text color dynamically
});

// Toggle adding/removing a colored box when "Add/Remove Box" button is clicked
document.getElementById('toggle-box-btn').addEventListener('click', () => {
  const existingBox = document.getElementById('dynamic-box');

  if (existingBox) {
    // Remove the box if it exists
    existingBox.remove();
  } else {
    // Create a new div box and add it to the body
    const box = document.createElement('div');
    box.id = 'dynamic-box';
    box.textContent = 'I am a dynamically added box!';
    box.style.width = '200px';
    box.style.height = '100px';
    box.style.backgroundColor = '#f39c12';
    box.style.color = 'white';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.style.marginTop = '1rem';
    box.style.borderRadius = '8px';

    document.body.appendChild(box);
  }
});
