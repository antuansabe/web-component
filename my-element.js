const template = document.createElement('div');
template.innerHTML = `
    <style>
    button {
        text-decoration:none;
        font-weight: 600;
        font-size: 20px;
        color:#ffff;
        padding-top:15px;
        padding-bottom:15px;
        padding-left:40px;
        padding-right:40px;
        background-color:#005BBB;
        border-color: none;
        border-width: 3px;
        border-style: solid;
        border-radius:35px;
    }
    </style>

    <p> !Esto es un Web Component!  </p>
    <button> Hola Indra </button>
`;




class myElement extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.appendChild(template);
    }
}
customElements.define('web-component', myElement);