# In-browser markdown editor solution

This is a solution to the [In-browser markdown editor challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### What the Editor Does

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use localStorage to save the current state in the browser that persists when the browser is refreshed

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This was my first experience using TypeScript. I explored its exciting features and discovered how it differs from JavaScript.
The main difference is TypeScript's static typing, which catches errors at compile time rather than at runtime, reducing the chances of runtime errors in production.
This feature significantly enhances code reliability and maintainability.

It was also my first time using Styled Components. In Styled Components, Styles are scoped to the component, meaning that they do not leak or affect other components.
This helps avoid common CSS issues like global namespace collisions. 

The code snippets below illustrate some Type declaration in TypeScript:

```js
// JavaScript example
let message = "Hello, world!";
message = 42; // No error, even though `message` was initially a string
```

```js
// TypeScript example
let message: string = "Hello, world!";
message = 42; // Error: Type 'number' is not assignable to type 'string'
}
```

The code block below illustrates the use of Styled Components:

```js
// Import the styled-components library
import styled from 'styled-components';

// Define a styled button component
const Button = styled.button<{ primary?: boolean }>`
  background: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.primary ? 'blue' : 'gray'};
  border-radius: 3px;
`;

// Usage in a React component
const App: React.FC = () => (
  <div>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </div>
);

export default App;
```

### Continued development

I hope to refine my skills in building apps of this nature (CRUD apps) in the future, but with more functionalities. I plan to buils them as fullstack projects, employing techniques such as jwt encoding and validation.

### Useful resources

- [React documentation](https://react.dev/learn) - This helped me for revise some concepts such as creation of hooks in react. It also helped me remind myself of certain react syntax.
- [TypeScript Tutorial](https://youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&si=vm7xqALO1R3BIT5-) - This is an amazing youtube playlist which helped me understand basic concepts in TypeScript. I'd recommend it to anyone beginning TypeScript


## Author

- Website - [Paa Kojo EFfah Annan](https://www.github.com/ThePaapyK)
- Twitter - [@ThePaapy_K](https://www.twitter.com/ThePaapy_K)

## Acknowledgments

I would like to express my sincere gratitude to Amalitech GmbH for providing me with the opportunity to work on this project as part of their Pre-Selection Training for Prospective National Service Personnel. Additionally, I am deeply thankful to my fellow software engineer friends who were instrumental in helping me debug and improve my code.
