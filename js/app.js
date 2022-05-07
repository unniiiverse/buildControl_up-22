document.querySelectorAll(".burger-btn").forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector(".burger-menu").classList.toggle("bMenu-opened")
        document.querySelector(".burger-btn-transition").classList.toggle("buttonTransform")
        document.querySelector("#locker").classList.toggle("locked")
    })
})