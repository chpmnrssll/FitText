import PolynomialRegression from '../node_modules/js-polynomial-regression/dist/PolynomialRegression';
import TextMetrics from './TextMetrics';
import TextElement from './TextElement';

export default class FitText {
  /**
   * Initializes a re-usable TextMetrics object
   * @constructor
   */
  constructor() {
    this.textMetrics = new TextMetrics();
  }

  /**
   * @typedef {Object} - Result
   * @property {Number} px - Width in pixels
   * @property {Number} vw - Width in viewport units
   */

  /**
   * Measures an instance of TextElement
   * @function fit
   * @param {Object} element - DOM element
   * @param {Number} compress - Amount to compress the parent element width
   * @param {Number} minFontSize - Minimum font size
   * @param {Number} maxFontSize - Maximum font size
   * @returns {Result} Predicted width results
   */
  fit(element, compress = 1.0, minFontSize = 16, maxFontSize = 1024) {
    const textElement = new TextElement(element, compress);
    const samples = [];

    // Collect/Sample widths
    for (let i = 0; i < 3; i++) {
      textElement.font.size += i * i;
      const magicNumber = textElement.font.size / 24;
      samples.push({
        x: this.textMetrics.measureText(textElement),
        y: textElement.font.size - magicNumber,
      });
    }

    const model = PolynomialRegression.read(samples, 2);
    const terms = model.getTerms();

    // Predict font size for this elements' parent width
    const predictedSize = model.predictY(terms, textElement.parent.width);

    // Clamp to minFontSize / maxFontSize
    const clampedSize = Math.max(minFontSize, Math.min(maxFontSize, predictedSize));

    // Convert px to vw
    const vwSize = (100 * clampedSize) / window.innerWidth;

    // console.log(`clampedSize: ${typeof clampedSize}: ${clampedSize}`);
    // console.log(`vwSize: ${typeof vwSize}: ${vwSize}`);

    return {
      pSize: predictedSize,
      px: clampedSize,
      vw: vwSize,
    };
  }
}
