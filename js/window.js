document.addEventListener('DOMContentLoaded', () => {
    let openBtn = document.getElementById('open_btn');
    let modal = document.getElementsByClassName('modal');
    let closeBtn = document.getElementById('close_btn');

    openBtn.onclick = function () {
        modal.classList.add('modal_active');
    }

    closeBtn.onclick = function () {
        modal.classList.remove('modal_active');
    }
})