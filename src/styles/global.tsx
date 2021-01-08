import { createGlobalStyle } from "styled-components"; //yarn add @types/styled-components -d

export const GlobalStyle = createGlobalStyle`
/**
 * 1. Always reset this sucks.
 * 2. Inherit from default setting
 */

* {
  margin: 0; /* 1 */
  padding: 0; /* 1 */
  border: 0; /* 1 */
  background-repeat: no-repeat; /* 1 */
  box-sizing: inherit; /* 2 */
  font-family: 'Inter', sans-serif;
}

/**
 * 1. Prevent certain mobile browsers from automatically zooming fonts.
 * 2. Border box sizing 
 * 3. Default scroll behavior (not smooth)
 */

html {
  -ms-text-size-adjust: 100%; /* 1 */
  -webkit-text-size-adjust: 100%; /* 1 */
  box-sizing: border-box; /* 2 */
  scroll-behavior: auto; /* 3 */
}

/**
 * 1. Set default font styles
 * 2. Beautiful fonts again
 * 3. Prevent horizontal scroll
 */

body {
 /* font-size: 16px; /* 1 */
  -moz-osx-font-smoothing: grayscale; /* 2 */
  -webkit-font-smoothing: antialiased; /* 2 */
}

/**
 * All Headings look the same
 */

h1,
h2,
h3,
h4,
h5 {
  font-size: 1em;
  font-weight: normal;
}

/**
 * 1. Reset link styles 
 * 2. Sized links
 * 3. Remove the gray background on active links in IE 10.
 */

a {
  text-decoration: none; /* 1 */
  color: inherit; /* 1 */
  display: inline-block; /* 2 */
  background-color: transparent; /* 3 */
}

/**
 * No bullets anymore
 */

ol,
ul {
  list-style: none;
}

/**
 * Remove all default styles and all elements look the same 
 */
/*
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: visible;
  border: 0;
  outline: 0;
  font: inherit;
  -webkit-font-smoothing: inherit;
  letter-spacing: inherit;
  color: inherit;
  background: none;
  vertical-align: top;
}

/**
 * Avoid no background on Edge and IE 
 */

option {
  background-color: inherit;
}

/**
 * Set a color on active state 
 */

a:active,
button:active {
  color: inherit;
}

/**
 * Prevent chrome autofill style  
 */

/**
 * You should define size for textarea
 */

textarea {
  resize: none;
}

/**
 * Pointer cursor for buttons
 */

input[type="button"],
button {
  cursor: pointer;
}

/**
 * Pointer default for disabled buttons
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * 1. Remove space after each image
 * 2. Ensure responsive images
 * 3. Remove the border on images inside links in IE 10.
 */

img {
  display: block; /* 1 */
  max-width: 100%; /* 2 */
  height: auto; /* 2 */
  border-style: none; /* 3 */
}

/**
 * Collapse border spacing
 */

table {
  border-collapse: collapse;
} 

h1 {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 52px;
  color: ${(props) => props.theme.colors.blue100}
}
h2 {
  font-family: 'Inter', sans-serif;
  color: #4B5092;
  font-weight: bold;
  font-size: 32px;
}
p {
  font-family: 'Nunito', sans-serif;
  font-weight: normal;
  font-size: 20px;
  color: #4B5092;
}

  
`;
