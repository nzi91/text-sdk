(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    `;

    class TextSDK extends HTMLElement {
        constructor(){
            super();
        }
    }

customElements.define('text-sdk',TextSDK); 
})();