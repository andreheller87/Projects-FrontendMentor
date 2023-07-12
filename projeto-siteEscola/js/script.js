
  // Aguarda o carregamento completo do documento
  document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe "block" ao elemento com id "home"
    document.getElementById("home").classList.add("block");
    // Adiciona a classe "hide" ao elemento com id "estudantes"
    document.getElementById("estudantes").classList.add("hide");
    document.getElementById("asideAluno").classList.add("hide");

    
  });

  // Obtém os links de navegação
  var linkHome = document.querySelector("nav a[href='#home']");
  var linkEstudantes = document.querySelector("nav a[href='#estudantes']");

  // Adiciona um evento de clique ao link de home
  linkHome.addEventListener("click", function(event) {
    // Impede o comportamento padrão do link
    event.preventDefault();
    // Remove a classe "hide" do elemento com id "home"
    document.getElementById("home").classList.remove("hide");
    // Adiciona a classe "hide" ao elemento com id "estudantes"
    document.getElementById("estudantes").classList.add("hide");
    document.getElementById("asideAluno").classList.add("hide");
  });

  // Adiciona um evento de clique ao link de estudantes
  linkEstudantes.addEventListener("click", function(event) {
    // Impede o comportamento padrão do link
    event.preventDefault();
    // Remove a classe "block" do elemento com id "home"
    document.getElementById("home").classList.remove("block");
    // Adiciona a classe "hide" ao elemento com id "home"
    document.getElementById("home").classList.add("hide");
    // Remove a classe "hide" do elemento com id "estudantes"
    document.getElementById("estudantes").classList.remove("hide");
    // Remove a classe "hide" do elemento com id "formulario-estudante"
    document.getElementById("formulario-estudante").classList.remove("hide");
  });

  // Obtém o botão de entrada
  var btnEntrar = document.querySelector("#formulario-estudante button");
  // Adiciona um evento de clique ao botão
  btnEntrar.addEventListener("click", function(event) {
    // Impede o comportamento padrão do botão
    event.preventDefault();
    // Adiciona a classe "hide" ao elemento com id "formulario-estudante"
    document.getElementById("formulario-estudante").classList.add("hide");
    document.getElementById("asideAluno").classList.remove("hide");
  });

