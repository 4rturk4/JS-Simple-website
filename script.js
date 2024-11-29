const email = document.querySelector('span')
const logout = document.querySelector('.logoutBtn')
const users = JSON.parse(localStorage.getItem('users'))


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {

        data.map(x => {
            document.querySelector('.posts').innerHTML += `
        
            <div class="mb-2 item" id="${x.id}">
                 <h4>${x.title}</h4>
                 <div>${x.body}</div>
            </div> 
        `
        })

        let posts = document.querySelectorAll(".posts > div")

        posts.forEach(item => {
            item.onclick = (event) => {
                const id = event.target.id
                localStorage.setItem("post_id", id)

                window.location.href = "htmls/singlepost.html"
            }
        })

    })


email.innerHTML = `<b>Logged in as:</b> ${users.email}`

logout.onclick = () => {
    window.location.href = "htmls/login.html"
}