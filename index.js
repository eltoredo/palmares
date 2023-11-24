function toggleGroupedGames() {
  var groupedGames = document.getElementById("grouped-games");
  groupedGames.classList.toggle("show");
}

function toggleSoloGames() {
  var soloGames = document.getElementById("solo-games");
  soloGames.classList.toggle("show");
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