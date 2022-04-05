

const synth = window.speechSynthesis;
document.querySelector('#run').addEventListener('click', run)
//
function run() {
const typeToTalk = document.querySelector('#keyboard').value

const yellText =  `${typeToTalk}`
//
document.querySelector('#placeToYell').innerText = yellText
//
let yellThis = new SpeechSynthesisUtterance(yellText);
//
synth.speak(yellThis);
 }





/*speechSynthesis.speak(new SpeechSynthesisUtterance("Hello, this is your browser speaking."));*/




//adds an event listener to my box which works on click 

let box1 = document.querySelector('#box-1')
box1.addEventListener('click', speakI)
//this function will now enable me to write the code for the speech synth for it

function speakI(){
    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('i');
   
    synth.speak(utterance);

  }
}
  
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box2 = document.querySelector('#box-2')
box2.addEventListener('click', speakMe)

function speakMe(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('me');
   
    synth.speak(utterance);

  }
}




/*----------------------------------------------------------------------*/


//adds an event listener to the next box

let box3 = document.querySelector('#box-3')
box3.addEventListener('click', speakHow)

function speakHow(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('how');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box4 = document.querySelector('#box-4')
box4.addEventListener('click', speakWho)

function speakWho(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('who');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box5 = document.querySelector('#box-5')
box5.addEventListener('click', speakWhy)

function speakWhy(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('why');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box6 = document.querySelector('#box-6')
box6.addEventListener('click', speakAgain)

function speakAgain(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('again');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box7 = document.querySelector('#box-7')
box7.addEventListener('click', speakPlease)

function speakPlease(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('please');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box8 = document.querySelector('#box-8')
box8.addEventListener('click', speakThankYou)

function speakThankYou(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('Thank You');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box9 = document.querySelector('#box-9')
box9.addEventListener('click', speakProblem)

function speakProblem(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('problem');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box10 = document.querySelector('#box-10')
box10.addEventListener('click', speakNow)

function speakNow(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('now');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box11 = document.querySelector('#box-11')
box11.addEventListener('click', speakBad)

function speakBad(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('bad');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box12 = document.querySelector('#box-12')
box12.addEventListener('click', speakGood)

function speakGood(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('good');
   
    synth.speak(utterance);

  }
}
/*---------------------------------------------------need to add a tile that says mine-------------------*/

//adds an event listener to the next box

let box13 = document.querySelector('#box-13')
box13.addEventListener('click', speakMy)

function speakMy(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('My');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box14 = document.querySelector('#box-14')
box14.addEventListener('click', speakAm)

function speakAm(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('am');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box15 = document.querySelector('#box-15')
box15.addEventListener('click', speakTo)

function speakTo(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('to');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box16 = document.querySelector('#box-16')
box16.addEventListener('click', speakBe)

function speakBe(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('be');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box17 = document.querySelector('#box-17')
box17.addEventListener('click', speakFeel)

function speakFeel(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('feel');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box18 = document.querySelector('#box-18')
box18.addEventListener('click', speakGive)

function speakGive(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('give');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box19 = document.querySelector('#box-19')
box19.addEventListener('click', speakListen)

function speakListen(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('listen');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box20 = document.querySelector('#box-20')
box20.addEventListener('click', speakHappy)

function speakHappy(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('happy');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box21 = document.querySelector('#box-21')
box21.addEventListener('click', speakSad)

function speakSad(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('sad');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box22 = document.querySelector('#box-22')
box22.addEventListener('click', speakTired)

function speakTired(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('tired');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box23 = document.querySelector('#box-23')
box23.addEventListener('click', speakOk)

function speakOk(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('okay');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box24 = document.querySelector('#box-24')
box24.addEventListener('click', speakCool)

function speakCool(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('cool');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box25 = document.querySelector('#box-25')
box25.addEventListener('click', speakIt)

function speakIt(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('it');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box26 = document.querySelector('#box-26')
box26.addEventListener('click', speakIs)

function speakIs(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('is');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box27 = document.querySelector('#box-27')
box27.addEventListener('click', speakWill)

function speakWill(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('will');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box28 = document.querySelector('#box-28')
box28.addEventListener('click', speakCome)

function speakCome(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('come');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box29 = document.querySelector('#box-29')
box29.addEventListener('click', speakHurt)

function speakHurt(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('hurt');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box30 = document.querySelector('#box-30')
box30.addEventListener('click', speakHear)

function speakHear(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('hear');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box31 = document.querySelector('#box-31')
box31.addEventListener('click', speakKnow)

function speakKnow(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('know');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box32 = document.querySelector('#box-32')
box32.addEventListener('click', speakThat)

function speakThat(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('that');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box33 = document.querySelector('#box-33')
box33.addEventListener('click', speakA)

function speakA(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('a');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box34 = document.querySelector('#box-34')
box34.addEventListener('click', speakThe)

function speakThe(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('the');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box35 = document.querySelector('#box-35')
box35.addEventListener('click', speakAnd)

function speakAnd(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('and');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box36 = document.querySelector('#box-36')
box36.addEventListener('click', speakMore)

function speakMore(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('more');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box37 = document.querySelector('#box-37')
box37.addEventListener('click', speakYou)

function speakYou(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('you');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box38 = document.querySelector('#box-38')
box38.addEventListener('click', speakCan)

function speakCan(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('can');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box39 = document.querySelector('#box-39')
box39.addEventListener('click', speakEat)

function speakEat(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('eat');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box40 = document.querySelector('#box-40')
box40.addEventListener('click', speakDrink)

function speakDrink(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('drink');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box41 = document.querySelector('#box-41')
box41.addEventListener('click', speakFinish)

function speakFinish(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('finish');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box42 = document.querySelector('#box-42')
box42.addEventListener('click', speakGet)

function speakGet(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('get');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box43 = document.querySelector('#box-43')
box43.addEventListener('click', speakLove)

function speakLove(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('love');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box44 = document.querySelector('#box-44')
box44.addEventListener('click', speakMake)

function speakMake(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('make');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box45 = document.querySelector('#box-45')
box45.addEventListener('click', speakNeed)

function speakNeed(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('need');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box46 = document.querySelector('#box-46')
box46.addEventListener('click', speakAll)

function speakAll(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('all');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box47 = document.querySelector('#box-47')
box47.addEventListener('click', speakAt)

function speakAt(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('at');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box48 = document.querySelector('#box-48')
box48.addEventListener('click', speakSome)

function speakSome(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('some');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box49 = document.querySelector('#box-49')
box49.addEventListener('click', speakYour)

function speakYour(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('your');
   
    synth.speak(utterance);

  }
}

/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box50 = document.querySelector('#box-50')
box50.addEventListener('click', speakDo)

function speakDo(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('do');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box51 = document.querySelector('#box-51')
box51.addEventListener('click', speakGo)

function speakGo(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('go');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box52 = document.querySelector('#box-52')
box52.addEventListener('click', speakHelp)

function speakHelp(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('help');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box53 = document.querySelector('#box-53')
box53.addEventListener('click', speakOpen)

function speakOpen(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('open');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box54 = document.querySelector('#box-54')
box54.addEventListener('click', speakPut)

function speakPut(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('put');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box55 = document.querySelector('#box-55')
box55.addEventListener('click', speakTalk)

function speakTalk(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('talk');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box56 = document.querySelector('#box-56')
box56.addEventListener('click', speakLook)

function speakLook(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('look');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box57 = document.querySelector('#box-57')
box57.addEventListener('click', speakFirst)

function speakFirst(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('first');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box58 = document.querySelector('#box-58')
box58.addEventListener('click', speakThen)

function speakThen(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('then');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box59 = document.querySelector('#box-59')
box59.addEventListener('click', speakFor)

function speakFor(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('for');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box60 = document.querySelector('#box-60')
box60.addEventListener('click', speakOn)

function speakOn(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('on');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box61 = document.querySelector('#box-61')
box61.addEventListener('click', speakHere)

function speakHere(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('here');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box62 = document.querySelector('#box-62')
box62.addEventListener('click', speakHave)

function speakHave(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('have');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box63 = document.querySelector('#box-63')
box63.addEventListener('click', speakLike)

function speakLike(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('like');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box64 = document.querySelector('#box-64')
box64.addEventListener('click', speakPlay)

function speakPlay(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('play');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box65 = document.querySelector('#box-65')
box65.addEventListener('click', speakRead)

function speakRead(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('read');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box66 = document.querySelector('#box-66')
box66.addEventListener('click', speakStop)

function speakStop(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('stop');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box67 = document.querySelector('#box-67')
box67.addEventListener('click', speakWalk)

function speakWalk(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('walk');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box68 = document.querySelector('#box-68')
box68.addEventListener('click', speakShow)

function speakShow(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('show');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box69 = document.querySelector('#box-69')
box69.addEventListener('click', speakWait)

function speakWait(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('wait');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box70 = document.querySelector('#box-70')
box70.addEventListener('click', speakIn)

function speakIn(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('in');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box71 = document.querySelector('#box-71')
box71.addEventListener('click', speakUp)

function speakUp(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('up');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box72 = document.querySelector('#box-72')
box72.addEventListener('click', speakOff)

function speakOff(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('off');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box73 = document.querySelector('#box-73')
box73.addEventListener('click', speakYes)

function speakYes(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('yes');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box74 = document.querySelector('#box-74')
box74.addEventListener('click', speakNo)

function speakNo(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('no');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box75 = document.querySelector('#box-75')
box75.addEventListener('click', speakWant)

function speakWant(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('want');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box76 = document.querySelector('#box-76')
box76.addEventListener('click', speakTake)

function speakTake(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('take');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box77 = document.querySelector('#box-77')
box77.addEventListener('click', speakTell)

function speakTell(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('tell');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box78 = document.querySelector('#box-78')
box78.addEventListener('click', speakTurn)

function speakTurn(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('turn');
   
    synth.speak(utterance);

  }
}

/*-----------------------------------*/
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box79 = document.querySelector('#box-79')
box79.addEventListener('click', speakWatch)

function speakWatch(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('watch');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box80 = document.querySelector('#box-80')
box80.addEventListener('click', speakWear)

function speakWear(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('wear');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box81 = document.querySelector('#box-81')
box81.addEventListener('click', speakWork)

function speakWork(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('work');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box82 = document.querySelector('#box-82')
box82.addEventListener('click', speakOut)

function speakOut(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('out');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box83 = document.querySelector('#box-83')
box83.addEventListener('click', speakDown)

function speakDown(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('down');
   
    synth.speak(utterance);

  }
}
/*----------------------------------------------------------------------*/

//adds an event listener to the next box

let box84 = document.querySelector('#box-84')
box84.addEventListener('click', speakWith)

function speakWith(){

    if (window.speechSynthesis.speaking) {
    // there's an unfinished utterance
    window.speechSynthesis.resume();
  } else {
    // start new utterance
    const utterance = new SpeechSynthesisUtterance('with');
   
    synth.speak(utterance);

  }
}
/*------add a new row with these: mine yellow----are: light green---say:dark green--see:dark green---
for:skyblue----minute:light green--dont:red*/