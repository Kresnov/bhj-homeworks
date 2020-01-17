const editor = document.getElementById('editor');


editor.addEventListener('input', toSave);
window.addEventListener('load', printContent);

function toSave() {
    localStorage.setItem("userText", "");
    localStorage.userText = editor.value;
}

function printContent() {
    if (localStorage.userText  !== "") {
        editor.value = localStorage.userText;
    } else {
        editor.value = "";
    }
}
