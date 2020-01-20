const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

function showTooltip(event) {
    const title = event.target.getAttribute('title');

    event.preventDefault();
    
    if (tooltip.textContent === title && tooltip.style.display === 'block') {
        tooltip.style.display = 'none';
        return
    } else {
    tooltip.textContent = title;
    tooltip.style.display = 'block';
    tooltip.style.top = `${event.target.getBoundingClientRect().top + 22}px`;
    tooltip.style.left = `${event.target.getBoundingClientRect().left}px`;
    }
}

for(let tip of hasTooltip) {
    tip.addEventListener('click', showTooltip);
}
