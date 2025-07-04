document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (e) {
    const fullName = document.getElementById("fullName").value.trim();
    const birthPlace = document.getElementById("birthPlace").value.trim();
    const message = document.getElementById("message").value.trim();
    const genderMale = document.getElementById("genderMale").checked;
    const genderFemale = document.getElementById("genderFemale").checked;

    let errors = [];

    if (!fullName) {
      errors.push("Nama wajib diisi.");
    }

    if (!birthPlace) {
      errors.push("Tempat Lahir wajib diisi.");
    }

    if (!genderMale && !genderFemale) {
      errors.push("Pilih salah satu jenis kelamin.");
    }

    if (message.length < 5) {
      errors.push("Pesan minimal 5 karakter.");
    }

    if (errors.length > 0) {
      e.preventDefault();

      alert("Ada kesalahan:\n\n" + errors.join("\n"));
    }
  });
