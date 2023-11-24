function toggleSoloGames() {
  var soloGames = document.getElementById("solo-games");
  soloGames.classList.toggle("show");
}

function toggleGroupedGames() {
  var groupedGames = document.getElementById("grouped-games");
  groupedGames.classList.toggle("show");
}

function toggleSpeedrunGames() {
  var speedrunGames = document.getElementById("speedrun-games");
  speedrunGames.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};