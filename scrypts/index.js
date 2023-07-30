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

    function downloadFile() {
    const fileUrl = 'Diego Correa Dias.docx'; 

    const link = document.createElement('a');
    link.href = fileUrl;


    link.download = 'Curriculo Diego'; // Substitua pelo nome do arquivo desejado

    // Simule um clique no link para iniciar o download
    link.click();
  }