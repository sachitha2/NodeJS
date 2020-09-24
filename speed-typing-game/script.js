const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quote-display');
const quoteInput = document.getElementById('quoteInput');


quoteInput.addEventListener('input',()=>{

  const arrayQuote =  quoteDisplayElement.querySelectorAll('span');

  const arrayValue = quoteInput.value.split('');
  let correct = true;
  arrayQuote.forEach((characterSpan,index) => {
      const character = arrayValue[index]
        if(character == null){
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        }
      else if(character === characterSpan.innerText){
          characterSpan.classList.add('correct');
          characterSpan.classList.remove('incorrect');
      }else{
        characterSpan.classList.remove('correct');
        characterSpan.classList.add('incorrect');
        correct = false;
      }
  })

  if(correct){
      renderNewQuote();
  }
})

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
    .then(res => res.json())
    .then(data => data.content)
}


// async function getNextQuote(){
//    const quote =  await getRandomQuote()

//    console.log(quote);
// }



async function renderNewQuote(){
    const quote =  await getRandomQuote()
    quoteDisplayElement.innerText = '';

    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        // characterSpan.classList.add('correct');
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    });

    quoteInput.value = null;
    console.log(quote);
 }
renderNewQuote();