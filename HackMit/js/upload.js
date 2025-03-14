const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file');
const fileNameDisplay = document.getElementById('file-name');

// Handle click to open file picker
dropZone.addEventListener('click', () => fileInput.click());

// Handle file selection
fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
  } else {
    fileNameDisplay.textContent = 'No file chosen';
  }
});

// Handle drag-and-drop functionality
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.classList.add('border-primary', 'bg-light');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('border-primary', 'bg-light');
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.classList.remove('border-primary', 'bg-light');

  if (event.dataTransfer.files.length > 0) {
    fileInput.files = event.dataTransfer.files;
    fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
  }
});