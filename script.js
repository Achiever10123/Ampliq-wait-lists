// Scroll Reveal Animation
const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", reveal);
window.onload = reveal;

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var button = document.getElementById("my-form-button");
  var data = new FormData(event.target);

  // Show loading state
  button.innerHTML = "Submitting...";
  button.disabled = true;

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML =
          "<span class='text-indigo-400 font-semibold'>Redirecting to thank you page...</span>";
        // Redirect to thank you page after 1 second
        setTimeout(() => {
          window.location.href = "./thank-you.html";
        }, 1000);
      } else {
        response.json().then((data) => {
          button.innerHTML = "Join the Waitlist";
          button.disabled = false;
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML =
              "<span class='text-red-400'>" +
              data["errors"].map((error) => error["message"]).join(", ") +
              "</span>";
          } else {
            status.innerHTML =
              "<span class='text-red-400'>Oops! There was a problem submitting your form</span>";
          }
        });
      }
    })
    .catch((error) => {
      button.innerHTML = "Join the Waitlist";
      button.disabled = false;
      status.innerHTML =
        "<span class='text-red-400'>Oops! There was a problem submitting your form</span>";
    });
}
form.addEventListener("submit", handleSubmit);
