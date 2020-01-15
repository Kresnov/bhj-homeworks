let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (const tab of tabs) {
    tab.onclick = activeElement;
}

function activeElement() {
    for (const tab of tabs) {
        tab.className = "tab";
    }

    for (const content of tabContent) {
        content.className = "tab__content";
    }

    let i = tabs.indexOf(this)

    tabs[i].className = "tab tab_active";
    tabContent[i].className = "tab__content tab__content_active";
}

