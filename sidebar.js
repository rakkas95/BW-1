function activatedLink() {
    const allNavLinks = document.querySelectorAll(".navigation-item .navigation-link")
    allNavLinks.forEach((e) => {
        e.classList.remove("active-link")
    })
    event.currentTarget.classList.add("active-link")
}