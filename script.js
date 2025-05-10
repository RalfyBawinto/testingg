document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const url = "https://coba-dulu.infinityfreeapp.com/api/contact.php";

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json()) // ubah ke .json()
    .then((data) => {
      console.log(data); // 👈 Tambahkan ini
      document.getElementById("response").textContent = data.message;
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error); // 👈 Tambahkan ini
      document.getElementById("response").textContent = "Something went wrong.";
    });
});
