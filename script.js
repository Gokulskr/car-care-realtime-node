document
  .getElementById("make-appointment-btn")
  .addEventListener("click", () => {
    document.getElementById("appointmentForm").classList.toggle("hidden");
  });

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch("/book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("notification").classList.remove("hidden");
        } else {
          alert("Failed to send email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send email. Please try again.");
      });
  });
