document.addEventListener("DOMContentLoaded", function () {
    // Füge einen Event Listener für das Formular hinzu
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Verhindert das Standardverhalten des Formulars (z.B. das Neuladen der Seite)

        // Hole den eingegebenen Wert aus der Suchleiste
        var suchbegriff = document.querySelector('form input').value.trim();

        // Suche nach Elementen mit IDs, die den Suchbegriff enthalten
        var gefunden = document.querySelectorAll('[id*=' + suchbegriff + ']');

        // Zeige das Ergebnis an
        var ergebnisContainer = document.getElementById('ergebnis');
        ergebnisContainer.innerHTML = ""; // Lösche vorherige Ergebnisse

        if (gefunden.length > 0) {
            gefunden.forEach(function (element) {
                // Erstelle ein neues div für jedes gefundene Element
                var div = document.createElement('div');
                div.textContent = element.textContent;
                ergebnisContainer.appendChild(div);
            });
        } else {
            // Zeige eine Meldung an, wenn keine Ergebnisse gefunden wurden
            ergebnisContainer.textContent = "Keine Ergebnisse gefunden";
        }
    });
});

function submitBooking() {
    alert("Buchung erfolgreich!");
    document.querySelector("form").reset();
}
//In js Klammer benutzen, damit es als Funktion erkannt werden kann. Alert=Benachrichtigung. Document=nachdem man gebucht hat, wird die Seite neu gestartet.//

function openChat() {
    document.getElementById("chat-container").style.display = "block";
}


