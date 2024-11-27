document.querySelectorAll('.accordion-header').forEach(header => {
header.addEventListener('click', function () {
const content = this.nextElementSibling;
const isActive = this.classList.contains('active');

document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);

    if (!isActive) {
        this.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});