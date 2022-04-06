function MakeNewUtterance(boxNumber, utteranceWord) {
  this.synth1 = window.speechSynthesis;
  this.sayWord = () => {
    if (window.speechSynthesis.speaking) {
      // there's an unfinished utterance
      window.speechSynthesis.resume();
    } else {
      // start new utterance
      const utterance = new SpeechSynthesisUtterance(utteranceWord);
      
      this.synth1.speak(utterance);
    };
  };
  




  let boxSpitter = "<button id='box-" + boxNumber + "'><h2>" + utteranceWord + "</h2></button>";
  document.getElementById('mainContainer').insertAdjacentHTML("beforeend", boxSpitter);
  //  "<button id='box-" + boxNumber + "'></button>";
   
  let box = document.querySelector("#box-" + boxNumber);
  box.addEventListener("click", this.sayWord.bind(this));

}

let wordList = [
  "i", //1
  "me",
  "how",
  "who",
  "why",
  "again",
  "please",
  "thank-you",
  "problem",
  "now", // 10
  "bad", 
  "good", //12 rb
  "my",
  "am",
  "to",
  "be",
  "feel",
  "give",
  "listen",
  "happy", // 20
  "sad", 
  "tired",
  "ok",
  "cool", //24 rb
  "it",
  "is",
  "will",
  "come",
  "hurt",
  "hear", // 30
  "know",
  "that",
  "a",
  "the",
  "and",
  "more",//36 rb
  "you",
  "can",
  "eat",
  "drink", //40
  "finish",
  "get",
  "love",
  "make",
  "need",
  "all",
  "at",
  "some", //48 rb
  "your",
  "do", // 50
  "go",
  "help",
  "open",
  "put",
  "talk",
  "look",
  "first",
  "then",
  "for",
  "on", // 60rb
  "here",
  "have",
  "like",
  "play",
  "read",
  "stop",
  "walk",
  "show",
  "wait",
  "in", // 70
  "up",
  "off", //72 rb
  "yes",
  "no",
  "want",
  "take",
  "tell",
  "turn",
  "watch",
  "where", // 80
  "work",
  "out",
  "down",
  "with", //84rb
];

for (let i = 0; i < wordList.length; i++) {
  let x = wordList[i];
  x = new MakeNewUtterance(i + 1, wordList[i]);
}

// const synth = window.speechSynthesis;
// document.querySelector("#run").addEventListener("click", run);

// function run() {
//   const typeToTalk = document.querySelector("#keyboard").value;

//   const yellText = `${typeToTalk}`;

//   document.querySelector("#placeToYell").innerText = yellText;

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }
