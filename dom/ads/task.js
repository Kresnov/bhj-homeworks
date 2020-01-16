let rotator = Array.from(document.getElementsByClassName("rotator__case"));

function changeText() {
    for (let i = 0; i < rotator.length; i++) {
        if (rotator[i].classList.contains('rotator__case_active')) {
            rotator[i].classList.remove('rotator__case_active');
            if (i + 1 == rotator.length) {
                i = 0;
                rotator[i].classList.add('rotator__case_active');
            } else {
                rotator[i + 1].classList.add('rotator__case_active');
            }
            break;
        }
    }
    setTimeout(changeText, 1000);
}

changeText();