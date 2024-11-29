const email = document.querySelector('span')
const logout = document.querySelector('.logoutBtn')
const users = JSON.parse(localStorage.getItem('users'))

fetch("https://api.escuelajs.co/api/v1/products")
    .then(res => res.json())
    .then(data => {
        const showImg = data.slice(1, 33);

        showImg.forEach(product => {

            let imageUrl = product.images[2]

            if (typeof imageUrl === "string") {
                imageUrl = imageUrl.replace(/['"\[\]]+/g, '');

                if (imageUrl) {
                    document.querySelector('.photos').innerHTML += `
                        <div class="img img-fluid" id="${product.id}">
                            <div>
                                <img src=${imageUrl} alt="${product.title}">
                            </div>
                        </div>
                    `
                }
            }
        })
    })


email.innerHTML = `<b>Logged in as:</b> ${users.email}`

logout.onclick = () => {
    window.location.href = "../htmls/login.html"
}