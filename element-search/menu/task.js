const menuLink = document.querySelectorAll('.menu__link');

for (let link of Array.from(menuLink)) {
    link.onclick = function () {

        const menuOpen = link.parentElement;

        if (menuOpen.querySelector('.menu_sub').className === 'menu menu_sub') {
            menuOpen.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            menuOpen.querySelector('.menu_sub').className = 'menu menu_sub'
        }

        if (link.closest('.menu_main')) {
            return false
        }
    }
}