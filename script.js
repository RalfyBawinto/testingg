document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const url = "http://ralfyportofolio.byethost14.com/api/contact.php"; // url  Backend

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("response").textContent = data;
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      document.getElementById("response").textContent = "Something went wrong.";
    });
});
