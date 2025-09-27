// Initialize EmailJS
(function () {
  emailjs.init({
    publicKey: "UQbMcE40RNazkwACj",
  });
})();

// Contact form handler
function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_auraybw",        // ✅ Your EmailJS service ID
      "template_xyut2an",       // ✅ Your EmailJS template ID
      event.target,
      "UQbMcE40RNazkwACj"       // ✅ Your public key
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch((error) => {
      loading.classList.remove("modal__overlay--visible");
      console.error("EmailJS Error:", error);
      alert(
        "The email service is temporarily unavailable. Please contact me directly at aranab2017@gmail.com"
      );
    });
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Form submission handler
  const form = document.getElementById("contact__form");
  form.addEventListener("submit", contact);

  // Modal open/close handlers
  const modal = document.querySelector(".modal");
  const mailBtn = document.querySelector(".mail__btn");
  const closeModal = document.querySelector(".modal__exit");

  mailBtn.addEventListener("click", () => {
    modal.classList.add("modal--open");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal--open");
    // Optional: remove overlays if modal was exited early
    document
      .querySelector(".modal__overlay--success")
      .classList.remove("modal__overlay--visible");
    document
      .querySelector(".modal__overlay--loading")
      .classList.remove("modal__overlay--visible");
  });
});

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}