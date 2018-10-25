(function() {

    document.querySelector("#menu_responsive").addEventListener("click", menuClick);

    function menuClick() {
        menu.classList.toggle('mostrar');
    }
}());