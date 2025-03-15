# Minimal Blog Card Web Component | devChallenges

Solution for the [Minimal Blog Card](https://devchallenges.io/challenge/minimal-blog-card) challenge from [devChallenges.io](http://devchallenges.io).

[Challenge](https://devchallenges.io/challenge/minimal-blog-card)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built with](#built-with)
- [Features](#features)
- [Usage](#usage)
- [Customization](#customization)
- [Author](#author)

## Overview

![screenshot](/resources/screenshot.png)

<!--
Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- What have you learned/improved?
- Your wisdom? :)
-->

A reusable minimal blog card component implemented as a native Web Component. This project extends the original challenge by creating a fully encapsulated, reusable component that can be easily integrated into any web project.

Through this project, I've improved my understanding of Web Components and Shadow DOM, learning how to create truly reusable UI elements with proper encapsulation.

### Built with

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- Web Components API
- TypeScript
- Shadow DOM for style encapsulation
- CSS Custom Properties for theming

## Features

- **Fully encapsulated** styling using Shadow DOM
- **Configurable through attributes** for easy implementation
- **Reactive updates** when attributes change
- **Customizable theming** through CSS Custom Properties
- **Semantic HTML5 markup** within the component

## Usage

Add the component to your project:

```html
<script type="module" src="./dist/minimal-blog-card.js"></script>

<minimal-blog-card
  category="Design"
  title="Embracing Minimalism"
  author="Annie Spratt"
  image="resources/Cactus.jpg"
  alt-image="A minimalist cactus illustration"
  description="From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity."
></minimal-blog-card>
```

## Customization

The component can be customized using CSS Custom Properties:

```css
.custom-card {
  --card-background: rgb(120, 131, 247);
  --shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  --tag-background: rgb(85 53 115);
  --tag-color: white;
  --title-color: rgb(35 38 45);
  --author-color: rgb(38 38 38);
  --description-color: rgb(38 38 38);
}
```

```HTML
<minimal-blog-card
  class="custom-card"
>
</minimal-blog-card>
```

Available properties:

- `--card-background`: Background color of the card
- `--shadow`: Box shadow of the card
- `--tag-background`: Background color of the category tag
- `--tag-color`: Text color of the category tag
- `--title-color`: Color of the title text
- `--author-color`: Color of the author text
- `--description-color`: Color of the description text

## Author

- Website [portfolio](https://portfolio-nickescolr.netlify.app/es)
- GitHub [@NickEsColR](https://github.com/NickEsColR/)
