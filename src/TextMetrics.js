/**
 * Wrapper for HTML5 Canvas context.measureText()
 * @module TextMetrics
 */

export default class TextMetrics {
  /**
   * Creates off-screen canvas
   * @constructor
   */
  constructor() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
  }

  /**
   * Measures an instance of TextElement
   * @function measureText
   * @param {Object} TextElement - Instance of class TextElement
   * @param {Object} TextElement.element - DOM element
   * @param {Object} TextElement.font - Computed font string
   * @param {Object} TextElement.padding - Computed padding
   * @returns {Number} Width of TextElement including padding
   */
  measureText({ element, font, padding }) {
    const {
      style,
      variant,
      weight,
      size,
      lineHeight,
      family,
    } = font;

    this.context.font = `${style} ${variant} ${weight} ${size}px/${lineHeight}px ${family}`;
    return this.context.measureText(element.innerText).width + padding;
  }
}
