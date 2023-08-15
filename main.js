// console.log('hello');

const menu = document.querySelector("#menuBar");
// console.log(menu);

const menuBtn = document.querySelector("#menuButton");
// console.log(menuBtn);

const user = document.querySelector("#userButton");
//console.log('click')

const userForm = document.querySelector(".addUser");
// console.log(userForm);

const nameInput = document.querySelector("#nameInput");
// console.log(nameInput);

const surnameInput = document.querySelector("#surnameInput");
// console.log(surnameInput);

const addButton = document.querySelector("#addButton");
// console.log(addButton);

const genderInput = document.querySelector("#genderInput");
// console.log(genderInput);

const locationInput = document.querySelector("#locationInput");
// console.log(locationInput);

const ageInput = document.querySelector("#ageInput");
// console.log(ageInput);

const userList = document.querySelector("#userList");
// console.log(userList);

//-----------------------------------------------------------------------------

let users = [];
const addNewUSer = () => {
  const newUserName = nameInput.value;
  const newUserSurname = surnameInput.value;
  const newUserGender = genderInput.value;
  const newUserLocation = locationInput.value;
  const newUserAge = ageInput.value;

  //console.log(newUserName, newUserSurname,newUserGender,newUserLocation,newUserAge);

  newUser = {
    userName: newUserName,
    userSurname: newUserSurname,
    userGender: newUserGender,
    userLocation: newUserLocation,
    userAge: newUserAge,
  };
  //console.log(newUser);

  users.push(newUser);
  //console.log(users);
  nameInput.value = "";
  surnameInput.value = "";
  genderInput.value = "";
  locationInput.value = "";
  ageInput.value = "";
};

//-----------------------------------------------------------------------------

const showUsers = () => {
  userList.innerHTML = ``;

  users.map((user) => {
    const userCard = document.createElement("div");
    // console.log(userCard);

    userCard.classList.add("card");

    userCard.innerHTML = `
        <div class="card-left">
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="">
    </div>
    <div class="card-right">
        <div class="infoBox">
            <span>Kullanıcı Adı:</span>
            <span>${user.userName}</span>
        </div>
        <div class="infoBox">
            <span>Kullanıcı Soyadı:</span>
            <span>${user.userSurname}</span>
        </div>
        <div class="infoBox">
            <span>Kullanıcı Cinsiyeti:</span>
            <span>${user.userGender}</span>
        </div>
        <div class="infoBox">
            <span>Kullanıcı Yaşadığı Yer:</span>
            <span>${user.userLocation}</span>
        </div>
        <div class="infoBox">
            <span>Kullanıcı Yaşı:</span>
            <span>${user.userAge}</span>
        </div>
    </div>
    `;

    userList.appendChild(userCard);
  });
};

//-----------------------------------------------------------------------------

addButton.addEventListener("click", () => {
  if (nameInput.value == "") {
    alert("Lütfen Kullanıcının Adını Giriniz");
  } else if (surnameInput.value == "") {
    alert("Lütfen Kullanıcının Soyadını Giriniz");
  } else if (genderInput.value == "") {
    alert("Lütfen Kullanıcının Cİnsiyetini Giriniz");
  } else if (locationInput.value == "") {
    alert("Lütfen Kullanıcının Şehrini Giriniz");
  } else if (ageInput.value == "") {
    alert("Lütfen Kullanıcının Yaşını Giriniz");
  } else {
    addNewUSer();
  }
  showUsers();
});

//-----------------------------------------------------------------------------

user.addEventListener("click", () => {
  // console.log(user)
  userForm.classList.toggle("openAddUser");
});

//-----------------------------------------------------------------------------

menuBtn.addEventListener("click", () => {
  // console.log('buton çalıştı');
  menu.classList.toggle("open");
});
