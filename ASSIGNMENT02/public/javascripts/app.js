document.addEventListener("DOMContentLoaded", () => {
  const imageBtn = document.getElementById("imageUploadBtn");
  const fileInput = document.getElementById("imageFileInput");
  const previewContainer = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImg");
  const removeBtn = document.getElementById("removeImageBtn");

  let selectedFile = null;

  imageBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e) => {
        previewImg.src = e.target.result;
        previewContainer.classList.add("visible");
      };
      reader.readAsDataURL(file);
    }
  });

  removeBtn.addEventListener("click", () => {
    selectedFile = null;
    fileInput.value = "";
    previewContainer.classList.remove("visible");
    previewImg.src = "";
  });
});

//i had help to get the dumb logout to work
document.addEventListener("DOMContentLoaded", () => {
  const logout = document.getElementById("logoutBtn");
  if (logout) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "/auth/logout";
    });
  }
});
