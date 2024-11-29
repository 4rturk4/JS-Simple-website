const email = document.querySelector('span')
const logout = document.querySelector('.logoutBtn')
const users = JSON.parse(localStorage.getItem('users'))

email.innerHTML = `<b>Logged in as:</b> ${users.email}`

logout.onclick = () => {
    window.location.href = "../htmls/login.html"
}


(() => {

    const post_id = localStorage.getItem("post_id")


    fetch("https://jsonplaceholder.typicode.com/posts/" + post_id)
        .then(res => res.json())
        .then(data => {
            document.querySelector(".singlePost").innerHTML += `
                    <div class="mb-2 post" id="${data.id}">
                         <h1>${data.title}</h1>
                         <div>${data.body}</div>
                    </div> 
                `
        })

})()






