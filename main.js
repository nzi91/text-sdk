(function() {
    let template = document.createElement('template');
    template.innerHTML = `
        <style>
            .tile{
                text-align: center;
                border-style: solid;
                border-width: 5px;
                font-size: 100px;
            }
            .p {
                color: green;
                text-align: center;
                font-size: 40px;
            }
        </style>

        <div class="tile">
            <p>Text1</p>
        </div>
    `;

    customElements.define('text-sdk', class TextSDK extends HTMLElement {

        constructor() {
            super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        };
    });


})();