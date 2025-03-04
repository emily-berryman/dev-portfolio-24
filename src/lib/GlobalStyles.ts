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
	line-height: normal;
}
html, body {
	height: 100%;
	max-width: 100%;
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
		Create a stacking context, without a z-index. This ensures that all portal content 
		(modals and tooltips) will float above the Next app. 
		*/
		isolation: isolate;
	}
 
 
body {
	color: var(--black);
	background: var(--white);
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

body, p, input, button, select, option {
	font-family: var(--font-family);
	font-weight: var(--font-weight-light);
	letter-spacing: var(--font-letter-spacing);
	font-size: var(--font-size-body-text);
}

h1, h2, h3, h4, h5, h6, strong {
	font-weight: var(--font-weight-bold);
}

h1, h2, h3, h4, h5, h6, p {
	text-rendering: optimizeLegibility;
}

p {
	margin-bottom: 1em;
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
	
	&:focus-visible {
		outline: 2px solid var(--secondary-color);
		outline-offset: 4px;
		border-radius: 4px;
	}

	&:hover {
		color: var(--secondary-color);
	}
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
  CSS Variables
*/
:root {
	--font-weight-light: 300;
	--font-weight-normal: 400;
	--font-weight-medium: 500;
	--font-weight-semi-bold: 600;
	--font-weight-bold: 700;

	--primary-font: "IBM Plex Mono", "serif";
	--font-family-title: "Tektur", "serif";

	--font-letter-spacing: 0.01875rem;

	--font-size-tiny: 0.8125rem; //13
	--font-size-small: 0.9375rem; //15
	--font-size-body-text: 1.0625rem; //17
	--font-size-h4: 1.0625rem; //17
	--font-size-h3: 1.25rem; // 20
	--font-size-highlight: 1.438rem; //23
	--font-size-h2: 1.375rem; //22
	--font-size-h1: 1.75rem; //28
	--font-size-title: 2.125; //34

	--light-grey: hsl(0, 0%, 91%);
	--medium-grey:hsl(0, 0%, 28%);
	--black: hsl(0, 0%, 4%);
	--white: hsl(0, 0%, 97%);

	--primary-h: 73;
	--primary-s: 100%;
	--primary-l: 58%;

	--primary-color: hsl(var(--primary-h), var(--primary-s), var(--primary-l));
	--primary-color--light:  hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 10%));
	--primary-color--xtra-light:  hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) + 25%));
	--primary-color--dark: hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) - 15%));

	--secondary-h: 253;
	--secondary-s: 100%;
	--secondary-l: 58%;

  --secondary-color: hsl(var(--secondary-h), var(--secondary-s), var(--secondary-l));
	--secondary-color--light: hsl(244, var(--secondary-s), 97%);

	// Spacing
  --space-xs: 4px;  /* Very small */
  --space-s: 8px;   /* Small */
  --space-m: 16px;  /* Medium */
  --space-l: 24px;  /* Large */
  --space-xl: 32px; /* Extra large */
  --space-xl-2: 48px; /* Double extra large */
  --space-xl-3: 64px; /* Triple extra large */
  --space-xl-4: 96px; /* Quadruple extra large */
  --space-xl-5: 128px; /* Massive */
  --space-xl-6: 144px; /* Huge */
}
`;
export default GlobalStyles;
