alight.directives.al.film = {
    priority: -10,
    restrict: "A",
    templateUrl: 'film-directive.html'
};

alight.controllers.starWarsController = function(scope) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var scope = alight.Scope(); // make scope
            scope.starwars = data.results; // set init value
            alight.applyBindings(scope, document.querySelector('#starwars-container'));
        };
    };

    xhttp.open("GET", "https://swapi.co/api/films/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
