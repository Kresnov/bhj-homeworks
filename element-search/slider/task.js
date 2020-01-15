const sliderItem = Array.from(document.getElementsByClassName("slider__item"));
const prev = document.getElementsByClassName('slider__arrow_prev');
const next = document.getElementsByClassName('slider__arrow_next');
let activeItem = 0;

next[0].onclick = nextImage;

function nextImage() {
    sliderItem[activeItem].className = "slider__item";
    
    if (activeItem < sliderItem.length - 1) {
        activeItem = activeItem + 1;
    } else {
        activeItem = 0;
    }

    sliderItem[activeItem].className = "slider__item slider__item_active";
}

prev[0].onclick = prevImage;

function prevImage() {
    sliderItem[activeItem].className = "slider__item";
    
    if (activeItem > 0) {
        activeItem = activeItem - 1;
    } else {
        activeItem = sliderItem.length - 1;
    }

    sliderItem[activeItem].className = "slider__item slider__item_active";
}
