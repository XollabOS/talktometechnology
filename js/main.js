function MakeNewUtterance(boxNumber, utteranceWord, imgSrc, bgColor, altText) {
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
    
    let boxSpitter = "<button class='" + bgColor +"' id='box-" + boxNumber + "'><h2>" + utteranceWord + "</h2><img src='../img/" + imgSrc + "' alt='"+ altText +"'></button>";
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
document.querySelector("#run").addEventListener("click", run);

function run() {
  const typeToTalk = document.querySelector("#keyboard").value;

  const yellText = `${typeToTalk}`;

  document.querySelector("#placeToYell").innerText = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}