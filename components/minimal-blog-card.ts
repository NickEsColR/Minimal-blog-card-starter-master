/**
@element minimal-blog-card
@description A custom web component that displays a blog card with minimalist design
@attr {string} category - The category of the blog post
@attr {string} title - The title of the blog post
@attr {string} author - The author of the blog post
@attr {string} image - URL path to the blog post image
@attr {string} alt-image - Alternative text for the blog post image
@attr {string} description - Short description or excerpt of the blog post
@cssproperty --card-background - Background color of the card (default: rgb(188, 237, 208))
@cssproperty --shadow - Box shadow of the card (default: 0 4px 8px rgba(0, 0, 0, 0.1))
@cssproperty --tag-background - Background color of the category tag (default: rgba(230, 214, 251))
@cssproperty --tag-color - Text color of the category tag (default: rgb(85, 53, 115))
@cssproperty --title-color - Color of the title text (default: black)
@cssproperty --author-color - Color of the author text (default: rgb(107, 114, 128))
@cssproperty --description-color - Color of the description text (default: rgb(55, 65, 81))
@example
<minimal-blog-card
category="Design"
title="Embracing Minimalism"
author="Annie Spratt"
image="resources/Cactus.jpg"
alt-image="A minimalist cactus illustration"
description="From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity."
</minimal-blog-card>
 */
class MinimalBlogCard extends HTMLElement {
  category: string;
  title: string;
  author: string;
  image: string;
  altImage: string;
  description: string;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.category = "Design";
    this.title = "Embracing Minimalism";
    this.author = "Annie Spratt";
    this.image = "resources/Cactus.jpg";
    this.altImage = "example image";
    this.description =
      "From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.appendChild(this.getTemplate().content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["title", "author", "category", "image", "alt-image", "description"];
  }

  attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    if (attr === "title") {
      this.title = newValue;
    }
    if (attr === "author") {
      this.author = newValue;
    }
    if (attr === "category") {
      this.category = newValue;
    }
    if (attr === "image") {
      this.image = newValue;
    }
    if (attr === "alt-image") {
      this.altImage = newValue;
    }
    if (attr === "description") {
      this.description = newValue;
    }

    // Re-render when attributes change
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = "";
      this.render();
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <div>
      <img
        src="${this.image}"
        alt="${this.altImage}"
      />
      <span class="tag">${this.category}</span>
      <h2>${this.title}</h2>
      <p>${this.description}</p>
      <footer>
        <span>${this.author}</span>
      </footer>
    </div>
      ${this.getStyles()}`;
    return template;
  }

  getStyles() {
    return `
      <style>
        :host {
          --card-background: rgb(188, 237, 208);
          --shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          --tag-background: rgba(230, 214, 251);
          --tag-color: rgb(85 53 115);
          --title-color: black;
          --author-color: rgb(107, 114, 128);
          --description-color: rgb(55, 65, 81);
        }
        div {
          padding: 16px;
          padding-bottom: 20px;
          border-radius: 20px;
          box-shadow: var(--shadow);
          background-color: var(--card-background);
          width: 336px;
        }
        img {
          width: 336px;
          height: 152px;
          border-radius: 10px;
          margin-bottom: 16px;
          object-fit: cover;
        }
        h2 {
          margin-top: 16px;
          margin-bottom: 0px;
          color: var(--title-color);
        }
        p {
          color: var(--description-color);
          line-height: 1.5;
          margin-top: 6px;
          margin-bottom: 20px;
          text-wrap:balance;
        }
        footer {
          margin-top: 20px;
          color: var(--author-color);
        }
        .tag {
          font-weight: 800;
          color: var(--tag-color);
          background-color: var(--tag-background);
          padding: 4px 16px;
          border-radius: 200px;
        }
      </style>
    `;
  }
}

customElements.define("minimal-blog-card", MinimalBlogCard);
