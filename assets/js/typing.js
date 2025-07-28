const sentences = [
  "I am currently a PhD Candidate at <span style='color: #e2725b;'><strong>Princeton University</strong></span> in experimental fluid mechanics. I work with Prof. Marcus Hultmark in the <span style='color: #3aa6b9;'><strong>Fundamental and Applied Studies in Turbulence (FAST) lab</strong></span>.",
  'My accomplishments include experimentally achieving some of the highest Reynolds number airfoil aerodynamic data (exceeding 10 million) by working with a variable pressure wind tunnel.',
  "I earned my BS in Aerospace Engineering from the <span style='color: #f5d76e;'><strong>University of Southern California</strong></span>, and hold an MA in Mechanical Engineering from <span style='color: #e2725b;'><strong>Princeton University</strong></span>.",
  "I have previously worked in the aerospace industry supporting projects for <span style='color: #3a69b9ff;'><strong>Rolls-Royce</strong></span> and neurobiology research at <span style='color: #b93a43ff;'><strong>Harvard University</strong></span>.",
  'I am also passionate about inclusive teaching and making engineering education accessible to everyone. Have a look around!',
];

const typingSpeed = 10;
const pauseBetweenSentences = 250;

const container = document.getElementById('typingText');

function typeSentence(sentenceHTML, index, callback) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = sentenceHTML;
  const plainText = tempDiv.textContent || tempDiv.innerText || '';

  const line = document.createElement('div');
  line.className = 'typed-line';
  container.appendChild(line);

  let charIndex = 0;
  let currentText = '';

  function typeChar() {
    if (charIndex < plainText.length) {
      currentText += plainText[charIndex];
      line.innerHTML = currentText + '<span class="cursor">&nbsp;</span>';
      charIndex++;
      setTimeout(typeChar, typingSpeed);
    } else {
      line.innerHTML = sentenceHTML;
      if (callback) setTimeout(callback, pauseBetweenSentences);
    }
  }

  typeChar();
}

function typeAllSentences(index = 0) {
  if (index < sentences.length) {
    typeSentence(sentences[index], index, () => typeAllSentences(index + 1));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeAllSentences();
});
