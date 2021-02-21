import {
    LitElement,
    html,
    css
} from 'lit-element';

class CheckedItem extends LitElement {
     static get styles() {
        return css `
        div#check {
            display:grid;
            margin-bottom:0.5rem;
            grid-template-columns: 40px auto;
        }

        div#icon {
            margin-right:1rem;
            color:green;
            width:30px;
        }
    `
    };

    render() {
        return html `
            <div id="check">
                <div id="icon"><fa-icon class="fas fa-check"></fa-icon> </div>
                <div id="text"><slot></slot></div>
            </div>
        `;
    }
}
customElements.define('checked-item', CheckedItem);
