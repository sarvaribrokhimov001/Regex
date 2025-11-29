const elForm = document.querySelector(".form");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}\[\]:;"'<>.,?/~]).{8,}$/;


elForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const username = elForm["username"].value.trim();
    const password = elForm["password"].value.trim();
    const email = elForm["email"].value.trim();

    // const user = {
    //     username: username,
    //     password: password,
    //     email: email,
    // };


    


    Toastify({
  text: "Hello World",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();

    console.log(user);
});
