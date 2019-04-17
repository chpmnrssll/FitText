import FitText from '../../src/FitText';

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    const fitText = new FitText();

    document.querySelectorAll('.fit').forEach((element) => {
      const results = fitText.element(element);
      element.style.fontSize = `${results.vw}vw`;
      element.style.lineHeight = `${results.vw}vw`;
    });
  }
});
