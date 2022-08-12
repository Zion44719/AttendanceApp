const button = document.getElementById("mainButton");
const btns = document.querySelector(".btns");
const adminPage = document.querySelector(".admin-login");

btns.addEventListener("click", function (evt) {
  // console.log("first");
  if (evt.currentTarget.classList.contains("form1")) {
    adminPage.classList.add("active");
  }
});

let checkInput = function (input) {
  if (input.value.length > 0) {
    input.className = "active";
  } else {
    input.className = "";
  }
};

let closeForm = function () {
  adminPage.classList.remove("active");
};

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27 || e.keyCode == 13) {
    closeForm();
  }
});

// Verify Authentication Login
const admin = {
  adminEmail: "admin@example.com",
  adminPassword: 1111,
};

let adminEmail;
let adminPassword;
let session;

// Authentication Function

function auth() {
  adminEmail = document.querySelector("#email").value;
  adminPassword = document.querySelector("#password").value;

  let emailInput = adminEmail.toLowerCase();
  let passwordInput = parseInt(adminPassword);

  if (
    emailInput === admin.adminEmail &&
    passwordInput === admin.adminPassword
  ) {
    setTimeout(() => {
      closeForm();
      // console.log("testing");
      window.location.href = "admin.html";
    }, 3000);
  } else {
    alert("incorrect email or password");
  }
}
