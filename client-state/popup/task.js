const modalMain = document.getElementById("modal_main");
const modalClose = document.getElementsByClassName("modal__close");
const modalSuccess = document.getElementById("modal_success");
const subscribeModal = document.getElementById('subscribe-modal');

if (!document.cookie.includes("shown='true'")) {
    window.onload = function () {
        subscribeModal.classList.add("modal_active");
        document.cookie = "shown = 'true'";
    }

    modalClose.item(0).onclick = function () {
        subscribeModal.classList.remove("modal_active");
    }
    showSucccess.item(0).onclick = function () {
        modalSuccess.classList.add("modal_active");
        subscribeModal.classList.remove("modal_active");
    }
    modalClose.item(2).onclick = function () {
        modalSuccess.classList.remove("modal_active");
    }
}