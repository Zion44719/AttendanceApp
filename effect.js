const submitBtn = document.getElementById("submitBtn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const male = document.getElementById("male");
const female = document.getElementById("female");
const dob = document.getElementById("dob");
const telephoneNum = document.getElementById("telphoneNum");
const addressH = document.getElementById("addressHome");
const addressPer = document.getElementById("addressPer");
const selector = document.getElementById("selector");
const passport = document.getElementById("passport");

let staffData = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //   Accessing the database
  let userProfile = {
    firstName: firstName.value,
    lastName: lastName.value,
    male: male.value,
    female: female.value,
    dob: dob.value,
    telephoneNum: telephoneNum.value,
    addressH: addressH.value,
    addressPer: addressPer.value,
    selector: selector.value,
    passport: passport.value,
  };

  refreshForm();

  // Pushing to an empty array
  staffData.push(userProfile);
  console.log(staffData);
});

function refreshForm() {
  firstName.value = "";
  lastName.value = "";
  male.value = "";
  female.value = "";
  dob.value = "";
  telephoneNum.value = "";
  addressH.value = "";
  addressPer.value = "";
  selector.value = "";
  passport.value = "";
}
