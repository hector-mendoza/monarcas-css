console.log('working')

let menu_mob = document.querySelector('.menu-mob')

document.querySelector('.menu-btn').addEventListener("click", function () {
    if (menu_mob.classList.contains('active-menu')) {
        menu_mob.classList.remove('active-menu')
    } else {
        menu_mob.classList.add('active-menu')
    }
});