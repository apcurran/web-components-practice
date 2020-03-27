"use strict";

customElements.define("my-paragraph",
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById("my-paragraph");
            const templateContent = template.content;
            const shadowRoot = this
                .attachShadow({ mode: "open" })
                .append(templateContent.cloneNode(true));
        }
    }

);