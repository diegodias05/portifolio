const htmlElement = document.querySelector('html');
const toggleSwitch = document.getElementById('switch');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        htmlElement.classList.add('dark-mode');

    } else {
        htmlElement.classList.remove('dark-mode');
    }
});