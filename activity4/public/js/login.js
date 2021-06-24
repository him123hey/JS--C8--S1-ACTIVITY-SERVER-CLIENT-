const LOGIN_END_POINT = "http://localhost:5000/login";

function onloingClick(event) {
  event.preventDefault();

  let username = document.querySelector("#user");
  let password = document.querySelector("#pwd");
  let paragraph = document.querySelector("#message");

  let request = LOGIN_END_POINT;
  axios.get(request).then((response) => {
    let users = response.data;

    let loginIsValid = false;
    for (let user of users) {
      if (user.name === username.value && user.password === password.value) {
        loginIsValid = true;
      }
    }

    if (loginIsValid) {
      paragraph.textContent = "VALID";
    } else {
      paragraph.textContent = "NOT VALID";
    }
  });
}

const btnLogin = document.querySelector("#btn_login");
btnLogin.addEventListener("click", onloingClick);
