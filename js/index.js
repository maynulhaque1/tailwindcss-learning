// toggle button

const dropdownMenu = document.querySelector("#dropdown_menu");
const toggleBtn = document.querySelector("#toggle_btn");

toggleBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("top-18");
});