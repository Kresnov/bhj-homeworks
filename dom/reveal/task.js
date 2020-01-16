let reveal = document.getElementsByClassName('reveal');

function showBlock() {
    for (const block of reveal) {
        let blockReveal = block.getBoundingClientRect().top;

        if (blockReveal < window.innerHeight) {
            block.classList.add('reveal_active');
        }
    }
}

window.addEventListener('scroll', showBlock);