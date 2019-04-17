# Fit text with polynomial regression

There are many ways to fix text to the width of the parent. The first option from this CSS Tricks article <a href="https://css-tricks.com/fitting-text-to-a-container/">fitting text to a container</a> recommends using viewport units and a magic number to fit text in a container. The problem is, finding this magic number. My solution involves measuring the text width at a few font sizes on a hidden HTML5 canvas. Those sample measurements are fed into a <a href="https://github.com/RobertMenke/JS-Polynomial-Regression">JS-Polynomial-Regression</a> model which can then predict the font-size for any width container.

Font size can be predicted with as few as 3 sample measurements which is insanely fast compared to my first approach of measuring text widths while recursively increasing the font-size until they fit. It's not exact (especially on resize), but the fluid vw units are pretty close. It’s a trade-off of simplicity vs. accuracy.

<a href="https://medium.com/@jakobud/css-polyfluidsizing-using-calc-vw-breakpoints-and-linear-equations-8e15505d21ab">CSS Poly Fluid Sizing using calc(), vw, breakpoints and linear equations</a>
