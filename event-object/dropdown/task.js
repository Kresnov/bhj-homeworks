let dropdownValue = document.getElementsByClassName("dropdown__value");
let dropdownList = document.getElementsByClassName("dropdown__list");
let dropdownItems = document.getElementsByClassName("dropdown__item");

function menuOpen() {
    dropdownList[0].className = "dropdown__list dropdown__list_active";
    return false;
}

dropdownValue[0].addEventListener("click", menuOpen);

for (const item of dropdownItems) {
    item.onclick = changeButton;
}

function changeButton() {
    dropdownValue[0].textContent = this.textContent;
    dropdownList[0].className = "dropdown__list";
    return false;
};


