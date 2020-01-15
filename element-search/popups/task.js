const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.getElementsByClassName('modal__close_times'));
const showSuccess = document.getElementsByClassName('show-success');
const modalSuccess = document.getElementById('modal_success');

modalMain.className = 'modal modal_active';

modalClose[0].onclick = function() {
    modalMain.className = 'modal';
}

showSuccess[0].onclick = function() {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';
}


modalClose[1].onclick = function() {
    modalSuccess.className = 'modal';
}