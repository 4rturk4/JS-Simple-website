const inputs = document.querySelectorAll("input");
const errorMsg = document.querySelector(".error");
const reg = document.querySelector(".regBtn");

let users = {}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

reg.onclick = () => {
    errorMsg.style.display = "none"
    const emailValue = inputs[0].value
    const password1 = inputs[1].value
    const password2 = inputs[2].value

    if(validateEmail(emailValue)) {
        inputs[0].style.border = "2px solid #10f484"
    } else {
        inputs[0].style.border = "2px solid red"
        errorMsg.style.display = "block"
        return errorMsg.innerHTML += "Blogas el. paštas"
    }

    if(password1.length > 20 || password1.length < 4) {
        inputs[1].style.border = "2px solid red"
        inputs[2].style.border = "2px solid red"
        errorMsg.style.display = "block"
        return errorMsg.innerHTML += "Netinkamas slaptažodžio ilgis"
    } else {
        inputs[1].style.border = "2px solid #10f484"
    }

    if(password1 !== password2) {
        inputs[1].style.border = "2px solid red"
        inputs[2].style.border = "2px solid red"
        errorMsg.style.display = "block"
        return errorMsg.innerHTML = "Passwords should match"
    } else {
        inputs[1].style.border = "2px solid #10f484"
        inputs[2].style.border = "2px solid #10f484"
        errorMsg.innerHTML = ""
    }

    users = {
        email: emailValue,
        password: password1,
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }

    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = "login.html"
}