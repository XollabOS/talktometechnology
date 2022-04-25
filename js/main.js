(function () {
    // For fast clickers.
    let forceStop = true;

    function speak(phrase) {
        const newUtterance = new SpeechSynthesisUtterance(phrase);
        if (forceStop) {
            console.log("Stopping current sound.");
            speechSynthesis.cancel();
            speechSynthesis.speak(newUtterance);
        } else if (!speechSynthesis.speaking) {
            speechSynthesis.speak(newUtterance);
        }
    }

    // Modularized button.
    const BOX_CLASS = "boxTemplate";

    function createNewSpeakButton({id, title, imageSrc, imageAlt, cssClass}) {
        const newButton = document.createElement("button");
        newButton.classList.add(BOX_CLASS);
        newButton.classList.add(cssClass);
        newButton.id = `box-${id}`;
        newButton.innerHTML = `<p></p><img src="" alt="">`;
        newButton.querySelector("p").innerText = title.toUpperCase();
        const buttonImage = newButton.querySelector("img");
        buttonImage.src = `../img/${imageSrc}`;
        buttonImage.alt = imageAlt;
        newButton.utteranceWord = title;
        newButton.append(buttonImage);
        return newButton;
    }

    // Document fragment for performance.
    const buttonContainer = document.querySelector('#mainContainer');
    const containerFragment = document.createDocumentFragment();
    for (let data of dataList) {
        containerFragment.append(createNewSpeakButton(data));
    }
    buttonContainer.append(containerFragment);

    // Event delegation.
    buttonContainer.addEventListener("click", function (e) {
        const curElement = e.target.closest(`.${BOX_CLASS}`);
        if (curElement === null) return undefined;
        else if (!buttonContainer.contains(curElement)) return undefined;
        speak(curElement.utteranceWord);
    });

    // Custom user input.
    const userInputForm = document.querySelector("#iSaid");
    const keyboard = document.querySelector("#keyboard");
    userInputForm.addEventListener("submit", function (e) {
        e.preventDefault();
        run();
    });

    function run() {
        const typeToTalk = keyboard.value;
        const yellText = `${typeToTalk}`;
        keyboard.value = null;
        speak(yellText);
    }
})();

// function MakeNewUtterance(boxNumber, utteranceWord, imgSrc, bgColor, altText) {
//     this.synth1 = window.speechSynthesis;
//     this.sayWord = () => {
//         if (window.speechSynthesis.speaking) {
//             // there's an unfinished utterance
//             window.speechSynthesis.resume();
//         } else {
//             // start new utterance
//             const utterance = new SpeechSynthesisUtterance(utteranceWord);
//
//             this.synth1.speak(utterance);
//         }
//     };
//
//     let boxSpitter =
//         "<button class='boxTemplate " + bgColor + "'id='box-" + boxNumber + "'> <p>" + utteranceWord.toUpperCase() + "</p><img src='../img/" + imgSrc + "' alt='" + altText + "'></button>";
//     document.getElementById('mainContainer').insertAdjacentHTML("beforeend", boxSpitter);
//     //  "<button id='box-" + boxNumber + "'></button>";
//
//     let box = document.querySelector("#box-" + boxNumber);
//     box.addEventListener("click", this.sayWord.bind(this));
// }

// Code for click event to add tiles.  Just a test

// document.querySelector('#addBtn').addEventListener('click', () => {
//   let insertWord = document.querySelector("#keyboard").value;
//   new MakeNewUtterance(insertWord, insertWord, 'plastic_bag.svg', 'darkGreen')
// })

// document.querySelector("#submitText").addEventListener("click", run);
//
// document.querySelector('#keyboard').addEventListener('keydown', e => {
//     if (e.keyCode === 13) {
//         e.preventDefault();
//         return run();
//     }
// });