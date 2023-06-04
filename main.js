const funnyWebsite = document.getElementById('h1-1')
const twisted = document.getElementById('h1-2')
const wicked = document.getElementById('h1-3')
const interesting = document.getElementById('h1-4')
const jokeButton = document.getElementById('button')
const jokeSpan = document.getElementById('joke-span')

for (let i = 1; i < 9; i++) {
  document.getElementById(`card-${i}`).addEventListener('click', () => showInfo(i))
}

function showInfo(i) {
  console.log(i);
    if (document.getElementById(`img-${i}`).style.display == 'none') {
      document.getElementById(`img-${i}`).style.display = 'block'
      document.getElementById(`character-${i}`).style.display = 'none'
      document.getElementById(`description-${i}`).style.display = 'none'
      document.getElementById(`favourite-${i}`).style.display = 'none'
    } else {
      document.getElementById(`img-${i}`).style.display = 'none'
      document.getElementById(`character-${i}`).style.display = 'block'
      document.getElementById(`description-${i}`).style.display = 'block'
      document.getElementById(`favourite-${i}`).style.display = 'block'
    }
}

jokeButton.addEventListener('click', () => {
    jokeSpan.innerText = ''
    addTextOneLetterAtATime('joke-span', "Knock, knock. Who's there? Bug. Bug who? Bug fixed, time for a celebratory commit and a coffee break!")
})

function addTextOneLetterAtATime(targetId, text) {
    const targetElement = document.getElementById(targetId);
    let counter = 0;
    const intervalId = setInterval(() => {
      const currentText = targetElement.textContent;
      targetElement.textContent = currentText + text[counter];
      counter++;
      if (counter === text.length) {
        clearInterval(intervalId);
      }
    }, 100);
}
