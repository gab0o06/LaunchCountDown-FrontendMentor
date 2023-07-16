# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Launch countdown timer solution](#frontend-mentor---launch-countdown-timer-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)

### Screenshot

![https://i.imgur.com/owfb4Th.png](screenShot.png)

### Links

- Solution URL: [Netlify](https://your-solution-url.com)
- Live Site URL: [Github](https://github.com/gab0o06)
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- TypeScript
- Vite


### What I learned

I've remember some aspects of css like pseudo-classes before and after to do the shadows and some aspects of the card component.

```css
.card__number::after {
  content: "";
  background-color: var(--card-black-blue);
  position: absolute;
  width: 4px;
  height: 8px;
  top: 49%;
  left: -15px;
  z-index: 0;
  border-radius: 0 100% 100% 0;
  -webkit-border-radius: 0 100% 100% 0;
  -moz-border-radius: 0 100% 100% 0;
  -ms-border-radius: 0 100% 100% 0;
  -o-border-radius: 0 100% 100% 0;
}

.card__number::before {
  content: "";
  background-color: var(--card-black-blue);
  position: absolute;
  width: 4px;
  height: 8px;
  top: 49%;
  right: -15px;
  z-index: 0;
  border-radius: 100% 0 0 100%;
  -webkit-border-radius: 100% 0 0 100%;
  -moz-border-radius: 100% 0 0 100%;
  -ms-border-radius: 100% 0 0 100%;
  -o-border-radius: 100% 0 0 100%;
}
```

Also, some things about the Date object, and how to do a countdown.

```js
  const milisecond = 1000;
  const minute = milisecond * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const currentDate = new Date();
  const proxDate = new Date(currentDate.getTime() + 14 * day);

  const calculateCountdown = () => {
    const currentDate = new Date();
    const releaseDate = proxDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.floor(releaseDate / day);
    const hoursRemaining = Math.floor((releaseDate % day) / hour);
    const minutesRemaining = Math.floor((releaseDate % hour) / minute);
    const secondsRemaining = Math.floor((releaseDate % minute) / milisecond);

    return {
      daysRemaining,
      hoursRemaining,
      minutesRemaining,
      secondsRemaining,
    };
  };
```

### Continued development

I want to focus on some features about CSS animations, cause the bonus challenge needs this aspects. However, I know some of these features, it is not sufficient to implement them.

## Author

- Website - [gab0o06](https://github.com/gab0o06)
- Frontend Mentor - [@gab0o06](https://www.frontendmentor.io/profile/gab0o06)
