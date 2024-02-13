document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("lname").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || sobrenome === "" || senha === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log("formulário enviado com sucesso");
    form.submit();
  });
});
