function activatedLink() {
    const allNavLinks = document.querySelectorAll(".navigation-item .navigation-link")
    allNavLinks.forEach((e) => {
        e.classList.remove("active-link")
    })
    event.currentTarget.classList.add("active-link")
}

// window.onload = function () {

//     const links = document.querySelectorAll('#navbarText .nav-link')
//     // console.log(links)
//     for (let i = 0; i < links.length; i++) {
//         links[i].addEventListener('click', () => {

//             links[i].classList.remove('active')
//         })
//     }
// }