
var tabela = document.getElementById("mundancaCorTabela");

var clientesVisualizar = document.getElementById("visualizarClientesX");
var usuariosVisualizar = document.getElementById("visualizarUsuariosX");
var fornecedoresVisualizar = document.getElementById("visualizarFornecedoresX");



clientesVisualizar.addEventListener("click", function cor1() {
    tabela.style.backgroundColor = "#27a9e3";
});

usuariosVisualizar.addEventListener("click", function cor2() {
    tabela.style.backgroundColor = "#28b779";
});

fornecedoresVisualizar.addEventListener("click", function cor3() {
    tabela.style.backgroundColor = "#852b99";
});





