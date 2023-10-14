const navItems = document.querySelectorAll(".navigation");
const hamburgerIcon = document.getElementById("hamburger");

hamburgerIcon.addEventListener("click", function (event) {
    event.preventDefault();

    navItems.forEach(function (item) {
        item.classList.toggle("active");
    });
});
