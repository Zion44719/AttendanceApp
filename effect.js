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

const showRecord = document.getElementById("showRecord");

let staffData = JSON.parse(localStorage.getItem("stafData")) || [];
// console.log(staffData);

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

  staffData.push(userProfile);
  localStorage.setItem("staffData", JSON.stringify(staffData));

  refreshForm();
  addToLocalStorage();
  // showDOM();
  // console.log(staffData);
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

function showDOM() {
  staffData.forEach((staff) => {
    showRecord.innerHTML += `

<p>Firstname: ${staff.firstName}</p>
<p>Lastname: ${staff.lastName}</p>
<p>Male: ${staff.male}</p>
<p>Female: ${staff.female}</p>
<p>DOB: ${staff.dob}</p>
<p>Telephone: ${staff.telephoneNum}</p>
<p>Home Address: ${staff.addressH}</p>
<p>Permanent Address: ${staff.addressPer}</p>
<p>Position: ${staff.selector}</p>
<p>Passport: ${staff.passport}</p> <br  />
`;
  });

  console.log(showRecord);
}

// ********* Local Sotrage *********
function addToLocalStorage() {
  staffData.push(userProfile);
  localStorage.setItem("staffData", JSON.stringify(staffData));
  console.log(localStorage);
}
