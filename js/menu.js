//----------------------------------------------------------------  
//Função que monta o Menu
//----------------------------------------------------------------  
function carregaMenu() {
  var menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = `
    <div class="menu">
      <a href="index.html">Home</a>
      <a href="about.html">Sobre</a>
      <a href="contato.html">Contato</a>
      <div class="dropdown">
        <a href="#" class="interesses">Interesses</a>
        <div class="dropdown-menu">
          <a href="anime.html">Animes</a>
          <a href="game.html">Jogos</a>
          <a href="musica.html">Músicas</a>          
        </div>        
      </div>
      <button id="modo-claro" class="botao-modo-claro">Modo Claro</button>
    </div>
  `;
//----------------------------------------------------------------  
//Função de Dropdown no item de interesses
//ao passar o mouse em cima de "Interesses" os itens aparecem e quando mouse é tirado dessa parte do Menu os itens desaparecem
//----------------------------------------------------------------  
  var interesseDropdown = document.querySelector(".menu .dropdown");
  var dropdownMenu = interesseDropdown.querySelector(".dropdown-menu");
  var interesseLink = interesseDropdown.querySelector(".interesses");

  interesseLink.addEventListener("mouseover", function () {
    dropdownMenu.classList.add("active");
  });

  interesseDropdown.addEventListener("mouseleave", function () {
    dropdownMenu.classList.remove("active");
  });

//----------------------------------------------------------------  
//Função de modo claro
//----------------------------------------------------------------  
  
  var modoClaroBtn = document.getElementById("modo-claro");
    modoClaroBtn.addEventListener("click", function () {
        document.body.classList.toggle("modo-claro");
    });

}