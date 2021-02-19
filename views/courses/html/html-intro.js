import { html } from 'lit-element';
import { HtmlIndex } from './html-index.js'

class HtmlIntro extends HtmlIndex {
    render() {
        return html`
        <article-head img="/img/courses/course_html5_head.svg">
          <span slot="author">Jan Jaap Siewers</span>
          <span slot="date">15-02-2021</span>
          <span slot="header">HTML5</span>
        </article-head>
        <section>
          <article-element>
            <span slot="header">Beginnen met Websites bouwen</span>
            <span slot="col-1">
            <h3>Doelgroep</h3>
            <p>Deze cursus is de basis voor veel nieuwe ontwikkelaars belangrijk......</p>
            <ul>
              <li>
                Iedereen die wil leren programmeren krijgt te maken met webtechnologie. Zelfs bij het ontwikkelen van games kun je niet heen om de belangrijkste taal van internet. HTML is afgeleid van XML en het is 'here to stay'.
              </li>
              <li>
                HTML is niet een echte programmeertaal. Als je je vooral toe wilt leggen op design, dan is HTML een belangrijke basis om straks je ontwerp ideeën te realiseren.
              </li>
              <li>
                Designers, frontend-, backend- en andere developers. Voor iedereen start programmeren hier!
              </li>
            </ul>
            <h3>Leerdoelen</h3>
            <p>Om te beginnen met programmeren moet je een beetje begrijpen hoe browsers werken. Alles wat je in de browser ziet wordt aangestuurd door code. In deze cursus ga je de belangrijkste elementen leren kennen en toepassen die aan de basis liggen van alle applicaties die in een browser of een HTMLViewer implementeren.</p>
            <h3>Activiteiten</h3>
            Wat ga je allemaal doen. In deze cursus vind je uitleg over HTML. Om te oefenen ga je proberen met HTML code een aantal websites te bouwen. Websites maken gebruik van verschillende media. Denk aan: teksten, plaatjes, video's, animaties en meer. Je gaat verschillende typen media bewerken en geschikt maken en implementeren in je sites.
            <h3>Opbrengst</h3>en
            Wat heb je uiteindelijk geleerd:
            <ul>
              <li>Je hebt kennis van browsers en hoe browsers omgaan met HTML</li>
              <li>Je kunt HMTL toepassen om een eenvoudige website te bouwen</li>
              <li>Je kunt media geschikt maken om in een website te gebruiken</li>
              <li>Je kunt verschillende media in een website implementeren</li>
            </ul>
            <h3>Voorkennis</h3>
              <p>Om te beginnen met deze cursus heb je nog geen programmeerkennis nodig. Je moet wel in staat zijn om programma's op je computer te installeren. Daarnaast heb je voldoende computervaardigheden om documenten te kunnen beheren en websites te bezoeken.</p>
            </span>
            <span slot="col-2">
              <h3>Wat ga je leren?</h3>
              <p>Een front-end developer moet vooral verstand hebben van alles wat zich in een browser af kan spelen. Het gaat dan ook om de programmeertalen die je in de browser tegenkomt. Denk daarbij aan HTML en CSS, maar ook javascript wordt door een browser ondertsteund.</p>
              <p>Developers in het algemeen, maar speciaal front-end developers moeten geod kunnen samenwerken. Een front-end developer is in veel gevallen niet verantwoordelijk voor de gehele oplossing en moet dus samenwerken met devops-specialisten, opdrachtgevers, full-stack developers of database-specialisten.</p>
            </span>
          </article-element>
        </section>
      `
    }
}

customElements.define('html-intro', HtmlIntro);
