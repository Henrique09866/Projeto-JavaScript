class TituloDinanico extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = "<h1>Dynamic Title Component</h1>";

        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: blue;
                font-family: Arial, sans-serif;
            }
        `;
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("dynamic-title", TituloDinanico);