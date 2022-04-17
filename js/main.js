// globally define variables
let voice
let voices
select = document.querySelector('#voiceSelect')

//set function to populate a dropdown select tab in html with the list of getvoices method
function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  voices = speechSynthesis.getVoices()
  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if (voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

// make event listener, on change of the dropdown, the voice and lang changes to the selected name
select.addEventListener('change', event => {

  voice = voices.find(({ name, lang }) => `${name} (${lang})` === event.target.value)
  console.log(voices, event.target.value)
})

// call function to populate
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}


function MakeNewUtterance(boxNumber, utteranceWord, imgSrc, bgColor, altText) {
  this.synth1 = window.speechSynthesis;
  this.sayWord = () => {
    if (window.speechSynthesis.speaking) {
      // there's an unfinished utterance
      window.speechSynthesis.resume();
    } else {
      // start new utterance
      const utterance = new SpeechSynthesisUtterance(utteranceWord);
      utterance.voice = voice
      this.synth1.speak(utterance);
    };
  };

  let boxSpitter = "<button class='boxTemplate " + bgColor + "'id='box-" + boxNumber + "'><p>" + utteranceWord.toUpperCase() + "</p><img src='../img/" + imgSrc + "' alt='" + altText + "'></button>";
  document.getElementById('mainContainer').insertAdjacentHTML("beforeend", boxSpitter);
  //  "<button id='box-" + boxNumber + "'></button>";

  let box = document.querySelector("#box-" + boxNumber);
  box.addEventListener("click", this.sayWord.bind(this));

}


for (let i = 0; i < dataList.length; i++) {
  let x = dataList[i].title
  x = new MakeNewUtterance(dataList[i].id + 1, dataList[i].title, dataList[i].imageSrc, dataList[i].cssClass, dataList[i].imageAlt);
}

const synth = window.speechSynthesis;

// Code for click event to add tiles.  Just a test

// document.querySelector('#addBtn').addEventListener('click', () => {
//   let insertWord = document.querySelector("#keyboard").value;
//   new MakeNewUtterance(insertWord, insertWord, 'plastic_bag.svg', 'darkGreen')
// })

document.querySelector("#submitText").addEventListener("click", run)

document.querySelector('#keyboard').addEventListener('keydown', e => {
  if (e.keyCode == 13) {
    e.preventDefault()
    return run()
  }
});

function run() {

  const typeToTalk = document.querySelector("#keyboard").value;
  const yellText = `${typeToTalk}`;

  document.querySelector("#keyboard").innerText = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
