import FitText from '../../src/FitText';

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    const fitText = new FitText();

    document.querySelectorAll('.fit').forEach((element) => {
      const compress = element.getAttribute('compress') || 1.0;
      const minFontSize = element.getAttribute('minFontSize') || 16;
      const maxFontSize = element.getAttribute('maxFontSize') || 1024;
      const results = fitText.fit(element, compress, minFontSize, maxFontSize);
      element.style.fontSize = `${results.vw}vw`;
      element.style.lineHeight = `${results.vw}vw`;
    });
  }
});
