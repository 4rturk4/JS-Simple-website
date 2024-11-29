const email = document.querySelector('span')
const logout = document.querySelector('.logoutBtn')
const users = JSON.parse(localStorage.getItem('users'))
const chat = document.querySelector('.box')
const text = document.querySelector('input')
const send = document.querySelector('.sendBtn')

send.onclick = () => {

    const currentDate = new Date().toDateString();
    const currentTime = new Date().toLocaleTimeString();

    if(text.value !== "") {
        chat.innerHTML = `
            <div class="texts">${text.value}</div>
            <div class="time d-flex justify-content-end">${currentDate} ${currentTime}</div>
        ` + chat.innerHTML
        text.value = '';
    }
}


console.log(text.value)
email.innerHTML = `<b>Logged in as:</b> ${users.email}`

logout.onclick = () => {
    window.location.href = "../htmls/login.html"
}
