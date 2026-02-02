Toastify({
  text: "Dasturimizga xush kelibsiz !",
  duration: 3500,
  close: true,
  gravity: "top",
  position: "center",
  style: {
    background: "linear-gradient(to right, green, greenyellow)",
  }
}).showToast();

Toastify({
  text: "Assalomu alaykum",
  duration: 3500,
  close: true,
  gravity: "top",
  position: "center",
  style: {
    background: "linear-gradient(to right, green, greenyellow)",
  }
}).showToast();


const elForm = document.querySelector(".form");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}\[\]:;"'<>.,?/~]).{8,}$/;
const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = elForm.username.value.trim();
  const password = elForm.password.value.trim();
  const email = elForm.email.value.trim();

  if (!emailRegex.test(email)) {
    return Toastify({
      text: "Invalid email address",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to right, red, crimson)",
      }
    }).showToast();
  }

  if (!passwordRegex.test(password)) {
    return Toastify({
      text: "Invalid password",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to right, red, crimson)",
      }
    }).showToast();
  }

  if (!usernameRegex.test(username)) {
    return Toastify({
      text: "Username 5-15 harf va raqamdan iborat bo‘lishi kerak!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to right, red, crimson)",
      }
    }).showToast();
  }

  Toastify({
    text: "Tizimga muvaffaqiyatli kirildi!",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "center",
    style: {
      background: "linear-gradient(to right, green, greenyellow)",
    }
  }).showToast();

  setTimeout(() => {
    window.location.href = "https://www.w3schools.com/js/js_regexp.asp";
  }, 2000);
});