"use client";

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* GLOBAL SYLES */

  *,
	 *::before,
	  *::after {
    box-sizing: border-box;
  }

	#root, #__next {
		/* 
		Create a stacking context, without a z-index. His ensures that all portal content 
		(modals and tooltips) will float above the Next app. 
		*/
		isolation: isolate;
	}
 
 
body {
	color: var(--color-text);
	background: var(--color-background);
}

a {
	color: inherit;
	text-decoration: none;
}

input,
button,
textarea,
select {
	font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

a:focus {
	outline: 5px auto var(--color-background);
}

body, p, input, button, select, option {
	font-family: var(--font-family);
	font-weight: var(--font-weight-light);
	letter-spacing: var(--font-letter-spacing);
}

h1, h2, h3, h4, h5, h6, strong {
	font-weight: var(--font-weight-bold);
}

h1, h2, h3, h4, h5, h6, p {
	text-rendering: optimizeLegibility;
}

p {
	font-size: var(--font-size-body-text);
	font-weight: var(--font-weight-light);
}

em {
	font-style: italic;
}

strong {
	font-weight: var(--font-weight-medium);
}

a {
	color: inherit;
	text-decoration: none;
}

/* Inherit fonts for form controls */
input,
button,
textarea,
select {
	font: inherit;
}

/* Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}
/*
  Create a root stacking context
*/
#root,
#__next {
	isolation: isolate;
}

/*
  CSS Variables
*/

:root {
	--font-weight-light: 300,
	--font-weight-normal: 400;
	--font-weight-medium: 500;
	--font-weight-semi-bold: 600;
	--font-weight-bold: 700;

	--primary-font: "IBM Plex Mono", "serif";
	--font-family-title: "Tektur", "serif";
	--font-letter-spacing: 0.3rem;

	--font-size-tiny: 0.8125rem; //13px
	--font-size-small: 0.9375rem; //15px
	--font-size-body-text: 1.0625rem; //17px
	--font-size-h4: 1.0625rem; //17px
	--font-size-h3: 1.25rem; // 20
	--font-size-h2: 1.375rem; //22
	--font-size-h1: 1.75rem; //28
	--font-size-title: 2.125; //34

	--light-grey: #e8e8e8;
	--medium-grey: #d9d9d9;
	--black: #232323;
	--white: #ffffff;
	--primary-green: #CCFF05;
  --secondary-blue: #0000ff;

	--desktop-horizontal-margin: 152px;
}
`;
export default GlobalStyles;
