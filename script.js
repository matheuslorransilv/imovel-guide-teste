function showPhone(button) {
  const phone = button.nextElementSibling;
  phone.style.display = "block";
  button.style.display = "none";
}

function aplicarMascaraCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
}

function aplicarMascaraTelefone(telefone) {
  telefone = telefone.replace(/\D/g, ""); // Remove tudo que não for dígito

  if (telefone.length > 11) telefone = telefone.slice(0, 11); // Limita o número a 11 dígitos

  telefone = telefone.replace(/^(\d{2})(\d)/g, "$1 $2"); // Adiciona espaço após o código de área
  telefone = telefone.replace(/(\d{5})(\d{4})$/, "$1-$2"); // Adiciona o traço entre o quinto e o sexto dígito

  return telefone;
}

document.getElementById("cpf").addEventListener("input", function (e) {
  e.target.value = aplicarMascaraCPF(e.target.value);
});

document.getElementById("telefone").addEventListener("input", function (e) {
  e.target.value = aplicarMascaraTelefone(e.target.value);
});

function enviarMensagem() {
  const cpf = document.getElementById("cpf").value;
  const telefone = document.getElementById("telefone").value;
  const assunto = document.getElementById("assunto").value;

  alert(`CPF: ${cpf}\nTelefone: ${telefone}\nAssunto: ${assunto}`);
}

function calcular() {
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const valor3 = parseFloat(document.getElementById("valor3").value);

  if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3) && valor1 !== 0) {
    const resultado = (valor3 * valor2) / valor1;

    document.getElementById("resultado").value = resultado.toFixed(2);
  } else {
    alert("Por favor, insira valores válidos para todos os campos.");
  }
}

// Seleciona os elementos
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-img");
const closeModal = document.querySelector(".close");

// Função para abrir o modal
openModalBtn.onclick = function () {
  modal.style.display = "flex"; // Definimos 'flex' para centralizar o modal
};

// Função para fechar o modal ao clicar no 'x'
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("download-btn").addEventListener("click", function () {
  html2canvas(document.getElementById("capture")).then(function (canvas) {
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png"); // Você pode mudar para 'image/jpeg'
    link.download = "imovel_guide.png"; // Nome do arquivo
    link.click();
  });
});
