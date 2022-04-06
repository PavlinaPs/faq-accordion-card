# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

| Desktop layout |
|:--:|
![Desktop layout](./screenshots/screenshot-desktop.jpg)

| Mobile layout |
|:--:|
![Mobile layout](./screenshots/screenshot-mobile.jpg)

### Links

- Solution URL: https://pavlinaps.github.io/faq-accordion-card/
- Live Site URL: https://github.com/PavlinaPs/faq-accordion-card

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
I learned a lot again solving this challenge:

- #### The accordion dilemma
I debated with myself, how the accordion is supposed to work. Is open only one question at a time? Or can be opened all questions at once, what necessarily leads either to overflow or changing the card's height. 
I coded both cases in JavaScript, left active the one where only one question is open. Altough I think that the mobile view can live without any problems with the other case.

- #### Set default font to 62.5%
For the first time I set the default font size on html to 62.5% and it is great! *1rem now equals 10px*, converting pixels and rems is really easy now.
```css
html {
    font-size: 62.5%; /* 1rem = 10px */
}
```

- #### Background gradient
I needed to look up the syntax for linear gradient. If the position of the gradient line's starting point is not specified, it *defaults to to bottom*. Here is the link on MDN: [linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient).
I think this is a nice way to set the background gradient as a *custom variable*:
```css
:root {
    ...
    /* gradient */
    --clr-gradient-violet: hsl(273, 75%, 66%);
    --clr-gradient-blue: hsl(240, 73%, 65%);
    --bg: linear-gradient( var(--clr-gradient-violet), var(--clr-gradient-blue) );
    ...
}

body {
  bacground-color: var(--bg);
}
```
I found it in this article on CSS-TRICKS: [The Big Gotcha With Custom Properties](https://css-tricks.com/the-big-gotcha-with-custom-properties/).

- #### ::before & ::after
Pseudo-elements ::before & ::after *don't work on \<img>s*.

- #### Flipping pseudo-element's content when active
```css
.FAQ-card__accordion__question[active]::after {
    content: url(./images/icon-arrow-down.svg);
    transform: rotate(180deg);
}
```

- #### Clipping the illustration in desktop layout
I used clip-path property for the first time, so the main illustration doesn't spill out of the card. I couldn't use the overflow: hidden property, because then the box illustration wouldn't spill out of the card's borders as per the design. 

```css
.FAQ-card__illustration-desktop {
    ..
    clip-path: inset(0 0 0 8.35rem);
    ..
}
```
I realized there are many ways I can use clip-path. I watched this freeCodeCamp's [Clipping Images: CSS Tutorial](https://youtu.be/G6Dd8yviOt0) and there I found out about this great clipping path generator page [CSS clip-path maker](https://bennettfeely.com/clippy/). Another page added to my CSS usefull tools collection.

- #### nextElementSibling
When opening and closing answers, active attribute is added by JavaScript to two elements - question's font weight changes to bold and answer's display to block. I am proud of using the nextElementSibling selector for the first time, because that's what the answer is in all cases. I think I saved some code this way.
```js
e.target.nextElementSibling.setAttribute('data-visible', true);
```


### Continued development
I give it a week or so and code up this challenge CSS only.

I would like to work more on transitions. I didn't figure out a nice transition from dislplay: none to display:block. 
And I also need  practice on DOM manipulation.

### Useful resources
I added most of the links in the text of [What I learned](#what-i-learned), respectively to the topic.
- [Using CSS Transitions on Auto Dimensions](https://css-tricks.com/using-css-transitions-auto-dimensions/) on CSS-TRICKS is useful as well.

## Author

- GitHub - [PavlinaPs](https://github.com/PavlinaPs)
- Frontend Mentor - [@PavlinaPs](https://www.frontendmentor.io/profile/PavlinaPs)

## Acknowledgments

It is great that I can solve Frontend Mentor's challenges. They are all very useful for me. Thank you!
