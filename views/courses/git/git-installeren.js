import { html } from 'lit-element';
import { CourseIndex } from '../course-index.js'



class GitInstalleren extends CourseIndex {
  constructor() {
    super();
    this.img = "../../img/courses/course_git_head.svg"
    this.base_url = "/courses/git"
  }

    render() {
        return html`
        <article-head img="${this.img}">
          <span slot="author">Jan Jaap Siewers</span>
          <span slot="date">22-02-2021</span>
          <span slot="header">Versiebeheer met Git</span>
        </article-head>
        <section>
          <bread-crumbs loc="${location}"></bread-crumbs>
          <article-element>
            <span slot="header">Opdracht 1: Git installeren</span>
            <span slot="col-1">
            <h3>Wat heb je nodig</h3>
            <p>Nu ga je Git installeren. Je kunt git vinden op <a href="https://git-scm.com">git-scm.com</a></p>
            <ul>
              <li>Installeer Git Bash en eventueel Git GUI. In de cursus wordt alleen Git Bash gebruikt</li>
              <li>Kies een text-editor. Kies je favoriet of Nano.</li>
              <li>Laat de standaard branch-name "master". Dat is de default instelling (Default)</li>
              <li>Als je nog meer Git tools wil gebruiken, kies dan de 2e (recommended) optie. (Default)</li>
              <li>Gebruik de OpenSSL library (Default)</li>
              <li>Checkout Windows-style, commit Unix-style line endings. Zo voor kom je problemen als je samenwerkt met Unix of Mac gebruikers (Default)</li>
              <li>Gebruik MinTTY (Git Bash) (Default)</li>
              <li>Kies de default optie voor het gedrag van 'git pull' (Default)</li>
              <li>Gebruik de Git Credential Manager Core (Default)</li>
              <li>Enable file system caching (Default)</li>
              <li>Disable experimental support (Default)</li>
            </ul>
            <h3>Git Bash</h3>
            Git Bash is vergelijkbaar met "command" in Windows. Maar het is net even anders. Git Bash is een beperkte Linux shell. Je maakt dus gebruik van Linux commando's in plaats van Windows commando's. Hieronder vind je de belangrijkste commando's die je moet weten:
            <code-element>
pwd
// toon pad van huidige working directory
ls
// toon inhoud van huidige working directory
ls dir
// toon inhoud van directory dir
ls -l [dir]
// toon ook alle file attributen
ls -a [dir]
// toon ook “verborgen” files
mkdir dir
//maak een nieuwe directory dir
cd
//ga naar je home directory
cd dir
//ga naar directory dir
cp file dir
//kopieer file naar directory dir
cp -r dir1 dir2
// kopieer (recursief, dus inclusief alle bestanden)
//directory dir1 naar dir2
mv file1 file2
// verander naam van file1 in file2
mv file dir
// verplaats file naar directory dir
rm file
// verwijder file
rmdir dir
// verwijder de lege directory dir
rm -R dir
// verwijder (recursief) directory dir

            </code-element>
            </span>
            <span slot="col-2">
            ${ this.navigation()}
            <h3>De opdracht</h3>
            <p>Installeer Git met Git Bash. Open Git Bash en maak een map aan waar je git-projecten gaat opslaan. In filmpjes wordt gebruik gemaakt van een map git in de user-directory, maar je kunt een willekeurige directory kiezen.</p>
            <p>Maak met behulp van Git Bash en de Linux commando's een map aan in je git-projecten map. Noem de directory "Recepten". Maak in de map "Recepten" 3 text-bestanden aan met een text-editor zoals Nano, Notepad++ of een IDE zoals Atom, Visual Studio Code of IntelliJ. LET OP: Gebruik hiervoor geen Micorsoft Word!!!</p>
            <h3>Resultaten van deze opdracht</h3>
            <checked-item>Een goed werkende installatie van Git</checked-item>
            <checked-item>Een directory waarin je projecten gaat beheren met Git</checked-item>
            <checked-item>In de project-map heb je een map recepten aangemaakt</checked-item>
            <checked-item>In de recepten-map heb je 3 text-bestanden met je favoriete recepten geplaatst</checked-item>
            </span>
          </article-element>
        </section>
      `
    }
}

customElements.define('git-installeren', GitInstalleren);
