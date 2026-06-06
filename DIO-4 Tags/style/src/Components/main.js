class cardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card-news");

        componentRoot.cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + this.getAttribute("autor") || "Anonymous";
        const linkAutor = document.createElement("a");
        linkAutor.textContent = this.getAttribute("link-text") || "Read more";
        linkAutor.href = this.getAttribute("link-url") || "#";
        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content") || "No content available.";

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkAutor);
        cardLeft.appendChild(newContent);

        componentRoot.cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("img-src") || "https://via.placeholder.com/150";
        cardRight.appendChild(newsImage);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    style() {
    }

}

customElements.define("card-news", cardNews);
