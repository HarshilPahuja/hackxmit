document.addEventListener("DOMContentLoaded", function () {
    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById("file");
    const uploadButton = document.querySelector("button[type='submit']");
    const clearButton = document.querySelector(".btn-danger"); // Clear Selection button
    const dropZoneText = document.getElementById("drop-zone-text"); // "Click here to add" text

    // Hide the clear button initially
    clearButton.style.display = "none";

    dropZone.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            displayFileName(fileInput.files);
            clearButton.style.display = "inline-block"; // Show Clear button
            dropZoneText.style.display = "none"; // Hide text
        }
    });

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
            let dataTransfer = new DataTransfer();
            for (let i = 0; i < event.dataTransfer.files.length; i++) {
                dataTransfer.items.add(event.dataTransfer.files[i]);
            }
            fileInput.files = dataTransfer.files;
            displayFileName(fileInput.files);
            clearButton.style.display = "inline-block"; // Show Clear button
            dropZoneText.style.display = "none"; // Hide text
        }
    });

    function displayFileName(files) {
        let existingFileName = document.getElementById("selected-file-name");
        if (existingFileName) existingFileName.remove();

        const fileNameDisplay = document.createElement("p");
        fileNameDisplay.id = "selected-file-name";
        fileNameDisplay.textContent = `Selected file: ${files[0].name}`;
        fileNameDisplay.classList.add("mt-2", "fw-bold");
        dropZone.appendChild(fileNameDisplay);
    }

    clearButton.addEventListener("click", function () {
        fileInput.value = ""; // Clear file input
        clearButton.style.display = "none"; // Hide Clear button
        dropZoneText.style.display = "block"; // Show text again

        let existingFileName = document.getElementById("selected-file-name");
        if (existingFileName) existingFileName.remove();
    });

    uploadButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (fileInput.files.length === 0) {
            alert("⚠️ Please select a file before uploading!");
            return;
        }

        showUploadPopup(fileInput.files[0].name);

        setTimeout(() => {
            document.querySelector("form").submit();
        }, 2000);
    });

    function showUploadPopup(fileName) {
        const uploadAlert = document.createElement("div");
        uploadAlert.classList.add("alert", "alert-success", "position-fixed", "top-0", "end-0", "m-3");
        uploadAlert.textContent = `✅ ${fileName} uploaded successfully!`;
        document.body.appendChild(uploadAlert);

        setTimeout(() => {
            uploadAlert.remove();
        }, 3000);
    }
});

