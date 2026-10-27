# Seiten meines Lebens

Erzähle in ein paar Sätzen, was heute war, und erhalte eine gestaltete Buchseite mit Position und Foto. Am Ende wird daraus ein digitales Blätterbuch zum Verschenken oder Drucken. Ein digitales Blätterbuch für immer.

## Was die Seite kann
- **Titel mit Schreibfeder:** Beim Öffnen schreibt eine schwarze Piratenfeder mit goldenem Kiel „Dein Leben. Als Buch, das bleibt.“ in Schreibschrift.
- **Themen (Anlässe):** zum Beispiel Ich liebe dich, Hochzeit, Urlaub, Baby, Oma und Opa erzählen oder Individuell mit eigenem Titel und eigenen Überschriften. Die Seite ist immer schwarz, Akzentfarben und Einband folgen dem Thema.
- **Neue Seite:** ein oder zwei Fotos (untereinander in voller Bildbreite), ein großes Feld für den Tag, alles Weitere freiwillig unter „Mehr hinzufügen“. Die Rechtschreibung wird beim Verlassen eines Feldes automatisch korrigiert.
- **Powerbook Booster:** erst bis zu 200 Bilder, dann die Texte hochladen. Bild 1 gehört zu Text 1, Bild 2 zu Text 2 und so weiter (gleich nummerieren, z. B. `bild1.jpg` und `text1.txt`, oder eine Textdatei mit Abschnitten, getrennt durch Leerzeilen). Vor dem Erstellen zeigt „Zuordnung prüfen“ jedes Paar.
- **Blätterbuch:** Vorschau und Download als echtes Blätterbuch, auf Wunsch mit Passwort verschlüsselt, druckbar in A5.
- **Sicherung:** alle Seiten als Datei speichern und auf einem anderen Gerät wieder laden.

## Sofort ansehen
ZIP entpacken und `index.html` doppelklicken. Für die Rechtschreibprüfung braucht der Browser Internet. Schreibschrift und Blätter-Funktion stecken schon in der Datei.

## Auf GitHub Pages veröffentlichen
1. Alle Dateien dieses Ordners in ein GitHub-Repository hochladen, gern in einen eigenen Unterordner wie `seiten/`. Die versteckte Datei `.nojekyll` gehört dazu.
2. Im Repository unter **Settings → Pages** die Veröffentlichung aus dem Branch `main` einschalten.
3. Die Seite ist dann erreichbar unter `https://<name>.github.io/<repo>/seiten/`.

## Als App mit Icon
Auf der veröffentlichten Seite auf **„Als App“** klicken. Chrome und Edge installieren sie mit eigenem Icon, auf dem iPhone geht es über *Teilen → Zum Home-Bildschirm*. Danach funktioniert sie auch offline. Das klappt nur über die GitHub-Adresse (https), nicht aus der entpackten Datei.

## Wo die Seiten gespeichert werden
Die Seiten liegen in der Datenbank des Browsers auf dem jeweiligen Gerät (Platz für Hunderte Fotos). Sie wandern nicht von selbst auf andere Geräte. Deshalb regelmäßig **„Sicherung speichern“** nutzen.

## Freischalt-Codes
Die Codes stehen nicht im Klartext in der Seite. Die Liste mit allen Codes niemals hochladen.

## Bei Änderungen
Nach jeder Änderung in `sw.js` die `VERSION` hochzählen. Dann bekommen installierte Apps die neue Fassung.
