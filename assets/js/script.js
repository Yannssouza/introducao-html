document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const overlayMensagem = document.getElementById('overlayMensagem');
  const textoMensagem = document.getElementById('textoMensagem');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('nomel').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome === '' || sobrenome === '' || senha === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return; 
    }
    
    textoMensagem.innerText = 'Formulário enviado com sucesso!';
    overlayMensagem.style.display = 'block';
  });
});
