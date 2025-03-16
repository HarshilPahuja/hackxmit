document.addEventListener("DOMContentLoaded", function () {
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file");
  const fileNameDisplay = document.getElementById("file-name");

  // ✅ Open file picker when clicking the drop zone
  dropZone.addEventListener("click", function () {
      fileInput.click();
  });

  // ✅ Update file name when a file is selected
  fileInput.addEventListener("change", function () {
      if (fileInput.files.length > 0) {
          fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
          fileNameDisplay.classList.remove("d-none"); // Show file name
      }
  });

  // ✅ Drag and drop support
  dropZone.addEventListener("dragover", function (event) {
      event.preventDefault();
      dropZone.classList.add("border-primary", "bg-light");
  });

  dropZone.addEventListener("dragleave", function () {
      dropZone.classList.remove("border-primary", "bg-light");
  });

  dropZone.addEventListener("drop", function (event) {
      event.preventDefault();
      dropZone.classList.remove("border-primary", "bg-light");

      if (event.dataTransfer.files.length > 0) {
          fileInput.files = event.dataTransfer.files;
          fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
          fileNameDisplay.classList.remove("d-none");
      }
  });

  // ✅ Auto-dismiss alerts after 4 seconds
  setTimeout(() => {
      document.querySelectorAll('.alert').forEach(alert => {
          new bootstrap.Alert(alert).close();
      });
  }, 4000);
});
