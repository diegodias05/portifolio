const htmlElement = document.querySelector('html');
const toggleSwitch = document.getElementById('switch');

const storedMode = localStorage.getItem('darkMode');
if (storedMode === 'true') {
  toggleSwitch.checked = true;
  htmlElement.classList.add('dark-mode');
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    htmlElement.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    htmlElement.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
  
});

 document.getElementById("project_compras").addEventListener("click", function() {
        window.open("https://lista-de-compras-khaki.vercel.app/", "_blank");
    });

 