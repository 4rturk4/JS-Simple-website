const logout = document.querySelector('.logoutBtn')
const email = document.querySelector('span')
const users = JSON.parse(localStorage.getItem('users'))
const profile = document.querySelector('.profile')

profile.innerHTML = `
    <div class="grow3 d-flex flex-column gap-2 align-items-center">
        <img class="pfp" src="${users.image}" alt="profile picture">
        <input class="text-center imgUrl" type="text" placeholder="Photo URL">
        <button class="btn btn-outline-info photoBtn">Change Photo</button>

        
    </div>
    
    <div class="grow3 d-flex flex-column gap-3 align-items-center">
        <span><b>User email:</b> ${users.email}</span>
        <span><b>User password:</b> ********</span>
        <input type="text" placeholder="Update Password" class="updtPass text-center">
        <button class="btn btn-outline-info passBtn">Change Password</button>
    </div>
    
`
const imgUrl = document.querySelector('.imgUrl')
const updtPass = document.querySelector('.updtPass')

document.querySelector('.photoBtn').onclick = () => {
    if(imgUrl.value !== "") {
        users.image = imgUrl.value
        localStorage.setItem('users', JSON.stringify(users))
        imgUrl.value = '';
    }
}

document.querySelector('.passBtn').onclick = () => {

    if(updtPass.value !== "") {
        users.password = updtPass.value
        localStorage.setItem('users', JSON.stringify(users))
        updtPass.value = '';
    }

}


email.innerHTML = `<b>Logged in as:</b> ${users.email}`

logout.onclick = () => {
    window.location.href = "../htmls/login.html"
}