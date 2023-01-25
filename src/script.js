alert(
  "Esse site foi feito para demonstração de conhecimento em manipulação de DOM. Para ver entender as manipulações entre no repositorio e siga o Markdown.  (repositorio no GitHub: kaiquezpriv1)"
);

function revealLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("formulario").style.marginLeft = "150px";
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("undefinedForm").style.display = "none";
  document.getElementById("confirmForm").style.display = "none";
  document.getElementById("lockBlock").style.display = "block";
}

function lockOpen() {
  document.getElementById("lockBlock").style.display = "none";
  document.getElementById("lockOpen").style.display = "block";
}

function revealCadastro() {
  document.getElementById("cadastro").style.display = "block";
  document.getElementById("formulario").style.marginLeft = "200px";
  document.getElementById("login").style.display = "none";
  document.getElementById("lockBlock").style.display = "none";
  document.getElementById("lockOpen").style.display = "none";
  document.getElementById("undefinedForm").style.display = "block";
}
function confirmCDT() {
  document.getElementById("undefinedForm").style.display = "none";
  document.getElementById("lockBlock").style.display = "none";
  document.getElementById("lockOpen").style.display = "none";
  document.getElementById("confirmForm").style.display = "block";
}
