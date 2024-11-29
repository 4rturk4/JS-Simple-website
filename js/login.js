const inputs = document.querySelectorAll("input");
const errorMsg = document.querySelector(".error");
const login = document.querySelector(".lgnBtn");


login.onclick = () => {
    errorMsg.style.display = "none"
    const emailValue = inputs[0].value
    const password1 = inputs[1].value

    const users = JSON.parse(localStorage.getItem("users"));

    if((emailValue === users.email && password1 === users.password)) {
        inputs[0].style.border = "2px solid #10f484"
        inputs[1].style.border = "2px solid #10f484"
        errorMsg.innerHTML = ""
        window.location.href = "../index.html"
    } else {
        inputs[0].style.border = "2px solid red"
        inputs[1].style.border = "2px solid red"
        errorMsg.style.display = "block"
        errorMsg.innerHTML = "Neteisingas el. paštas arba slaptažodis"
    }
}