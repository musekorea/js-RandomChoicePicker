const tags = document.querySelector('#tags');
const textarea = document.querySelector('textarea');
let play;
textarea.focus();

textarea.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    play = setInterval(randomNum, 100);
  } else {
    createTags(e.target.value);
  }
});

function createTags(input) {
  tags.innerText = '';
  const text = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  text.forEach((textInput) => {
    const span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = textInput;
    tags.appendChild(span);
  });
}

function randomNum() {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i++) {
    spans.forEach((span) => span.classList.remove('highlight'));
    const rNumber = Math.floor(Math.random() * spans.length);
    spans[rNumber].classList.add('highlight');
    console.log(i);
  }
  console.log('finish');
  setTimeout(() => {
    clearInterval(play);
  }, 2000);
}
//e.key로 잡아버리면 enter, space도 들어가서 귀찮아짐
