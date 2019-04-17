/**
 * Wrapper for computing DOM element styles
 * @module TextElement
 */

export default class TextElement {
  /**
   * Computes DOM element and it's parents' styles
   * @constructor
   * @param {Object} - DOM element
   * @param {Number} - Amount to compress the parent element width
   */
  constructor(element, compress = 1.0) {
    this.element = element;
    this.style = window.getComputedStyle(this.element);
    this.paddingLeft = parseFloat(this.style.paddingLeft, 10) || 0;
    this.paddingRight = parseFloat(this.style.paddingRight, 10) || 0;
    this.padding = this.paddingLeft + this.paddingRight;
    this.width = (parseFloat(this.style.width, 10) || 0) + this.padding;
    this.font = {
      style: this.style.fontStyle,
      variant: this.style.fontVariant,
      weight: parseFloat(this.style.fontWeight, 10),
      size: parseFloat(this.style.fontSize, 10),
      lineHeight: parseFloat(this.style.lineHeight, 10),
      family: this.style.fontFamily,
    };

    if (Number.isNaN(this.font.lineHeight)) {
      this.font.lineHeight = this.font.size;
    }

    const parentStyle = window.getComputedStyle(this.element.parentElement);
    this.parent = {
      element: element.parentElement,
      style: parentStyle,
      paddingLeft: parseFloat(parentStyle.paddingLeft, 10) || 0,
      paddingRight: parseFloat(parentStyle.paddingRight, 10) || 0,
    };
    this.parent.padding = this.parent.paddingLeft + this.parent.paddingRight;
    this.parent.width = ((parseFloat(parentStyle.width, 10) || 0) - this.parent.padding) * compress;
  }
}
