function changeContent(page) {
    document.getElementById('content').innerHTML = '<h2>' + page + '</h2><p>Inhalte für ' + page + '</p>';
}

function search() {
    var searchTerm = document.getElementById('searchInput').value;
    document.getElementById('content').innerHTML = '<h2>Suchergebnisse für: ' + searchTerm + '</h2><p>Hier sind die Suchergebnisse für ' + searchTerm + '.</p>';
}

function showHome() {
    document.getElementById('content').innerHTML = '<h2>Willkommen auf unserer Webseite!</h2><p>Wählen Sie einen Punkt aus der Navigation oder verwenden Sie die Suchmaschine.</p>';
}

function changeContent(page) {
    document.getElementById('content').innerHTML = '<h2>' + page + '</h2><p>Inhalte für ' + page + '</p>';
}

function search() {
    var searchTerm = document.getElementById('searchInput').value;
    document.getElementById('content').innerHTML = '<h2>Suchergebnisse für: ' + searchTerm + '</h2><p>Hier sind die Suchergebnisse für ' + searchTerm + '.</p>';
}

function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.style.display = (navMenu.style.display === 'flex') ? 'none' : 'flex';
}
