function carregaMenu() {
    var menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = `
      <div class="menu">
        <a href="index.html">Home</a>
        <a href="about.html">Sobre nós</a>
        <a href="contato.html">Contato</a>
        <div class="dropdown">
          <a href="#">Interesses</a>
          <div class="dropdown-menu">
            <a href="anime.html">Animes</a>
            <a href="game.html">Jogos</a>
            <a href="musica.html">Músicas</a>
          </div>
        </div>
      </div>
    `;
  
    var interesseDropdown = document.querySelector(".menu .dropdown");
    interesseDropdown.addEventListener("mouseover", function () {
      var dropdownMenu = interesseDropdown.querySelector(".dropdown-menu");
      dropdownMenu.style.display = "block";
    });
  
    interesseDropdown.addEventListener("mouseout", function () {
      var dropdownMenu = interesseDropdown.querySelector(".dropdown-menu");
      dropdownMenu.style.display = "none";
    });
  }