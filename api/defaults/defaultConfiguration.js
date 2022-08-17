let dataList = [
    {
        id: '1',
        title: 'I',
        imageSrc: 'I_23542.png',
        imageAlt: 'pointing at self',
        color: 'yellow'
    },
    {
        id: '2',
        title: 'me',
        imageSrc: 'face_15743.png',
        imageAlt: 'person',
        color: 'yellow'
    },
    {
        id: '13',
        title: 'my',
        imageSrc: 'self%20esteem_19219.png',
        imageAlt: 'someone thinking about their stuff',
        color: 'yellow'
    },
    {
        id: '25',
        title: 'it',
        imageSrc: 'It_23474.png',
        imageAlt: 'arrows pointing at an item',
        color: 'yellow'
    },
    {
        id: '49',
        title: 'your',
        imageSrc: 'Your%20Turn!_47716.png',
        imageAlt: 'pointing at someone for your',
        color: 'yellow'
    },
    {
        id: '37',
        title: 'you',
        imageSrc: 'Point_36483.png',
        imageAlt: 'pointing at person',
        color: 'yellow'
    },
    {
        id: '3',
        title: 'how',
        imageSrc: 'How__14819.png',
        imageAlt: 'question mark',
        color: 'purple'
    },
    {
        id: '4',
        title: 'who',
        imageSrc: 'who_14192.png',
        imageAlt: 'question mark on a persons face',
        color: 'purple'
    },
    {
        id: '5',
        title: 'why',
        imageSrc: 'why_46802.png',
        imageAlt: 'person asking why',
        color: 'purple'
    },
    {
        id: '73',
        title: 'yes',
        imageSrc: 'yes_17011.png',
        imageAlt: 'green check mark',
        color: 'white'
    },
    {
        id: '74',
        title: 'no',
        imageSrc: 'no_16959.png',
        imageAlt: 'red x mark',
        color: 'red'
    },
    {
        id: '6',
        title: 'again',
        imageSrc: 'again_47245.png',
        imageAlt: 'loop going around again',
        color: 'skyBlue'
    },
    {
        id: '9',
        title: 'problem',
        imageSrc: 'problem_23791.png',
        imageAlt: 'someone showing they have a problem',
        color: 'skyBlue'
    },
    {
        id: '35',
        title: 'and',
        imageSrc: 'and_47645.svg',
        imageAlt: 'the word and',
        color: 'skyBlue'
    },
    {
        id: '46',
        title: 'all',
        imageSrc: 'Everything_27600.png',
        imageAlt: 'pointing at all the shapes',
        color: 'skyBlue'
    },
    {
        id: '47',
        title: 'at',
        imageSrc: 'At%20Sign_36289.png',
        imageAlt: 'at sign',
        color: 'skyBlue'
    },
    {
        id: '48',
        title: 'some',
        imageSrc: 'Some_47563.svg',
        imageAlt: 'showing some of something and not all of it',
        color: 'skyBlue'
    },
    {
        id: '59',
        title: 'for',
        imageSrc: 'for_47639.png',
        imageAlt: 'word for',
        color: 'skyBlue'
    },
    {
        id: '60',
        title: 'on',
        imageSrc: 'Green%20Circle_43665.png',
        imageAlt: 'green on button',
        color: 'skyBlue'
    },
    {
        id: '61',
        title: 'here',
        imageSrc: 'Arrow%20down_44351.png',
        imageAlt: 'arrow pointing down',
        color: 'skyBlue'
    },
    {
        id: '70',
        title: 'in',
        imageSrc: 'in_17714.png',
        imageAlt: 'arrow pointing into a box',
        color: 'skyBlue'
    },
    {
        id: '71',
        title: 'up',
        imageSrc: 'Arrow%20up_44348.png',
        imageAlt: 'arrow pointing up',
        color: 'skyBlue'
    },
    {
        id: '72',
        title: 'off',
        imageSrc: 'Red%20Circle_43662.png',
        imageAlt: 'red off button',
        color: 'skyBlue'
    },
    {
        id: '82',
        title: 'out',
        imageSrc: 'Garbage%20Bag%20Out_40186.png',
        imageAlt: 'garbage bag being taken out',
        color: 'skyBlue'
    },
    {
        id: '83',
        title: 'down',
        imageSrc: 'Down%20Arrow_38048.png',
        imageAlt: 'arrow pointing down',
        color: 'skyBlue'
    },
    {
        id: '84',
        title: 'with',
        imageSrc: 'Carry_33621.png',
        imageAlt: 'a person carrying an object with them',
        color: 'skyBlue'
    },
    {
        id: '85',
        title: 'are',
        imageSrc: 'transparent.svg',
        imageAlt: 'arrow pointing to person',
        color: 'skyBlue'
    },
    {
        id: '10',
        title: 'now',
        imageSrc: 'now_44934.png',
        imageAlt: 'clock showing time is now',
        color: 'lightPurple'
    },
    {
        id: '7',
        title: 'please',
        imageSrc: 'Palms%20Up%20Together_41055.svg',
        imageAlt: 'hands in a please position',
        color: 'lightPink'
    },
    {
        id: '8',
        title: 'thank-you',
        imageSrc: 'please_18234.png',
        imageAlt: 'someone saying thank you to another person',
        color: 'lightPink'
    },
    {
        id: '15',
        title: 'to',
        imageSrc: 'to_17721.png',
        imageAlt: 'box showing arrow to',
        color: 'lightPink'
    },
    {
        id: '20',
        title: 'happy',
        imageSrc: 'happy_16265.png',
        imageAlt: 'someone smiling',
        color: 'lightPink'
    },
    {
        id: '21',
        title: 'sad',
        imageSrc: 'sad_15665.png',
        imageAlt: 'someone with a sad face',
        color: 'lightPink'
    },
    {
        id: '22',
        title: 'tired',
        imageSrc: 'tired_15386.png',
        imageAlt: 'someone with a tired face',
        color: 'lightPink'
    },
    {
        id: '23',
        title: 'ok',
        imageSrc: 'ok_23430.png',
        imageAlt: 'ok sign in sign language',
        color: 'lightPink'
    },
    {
        id: '32',
        title: 'that',
        imageSrc: 'head_15732.png',
        imageAlt: 'arrow pointing at head',
        color: 'lightPink'
    },
    {
        id: '33',
        title: 'a',
        imageSrc: 'a_16046.png',
        imageAlt: 'the letter a',
        color: 'lightPink'
    },
    {
        id: '34',
        title: 'the',
        imageSrc: 'the_47642.svg',
        imageAlt: 'the word the',
        color: 'lightPink'
    },
    {
        id: '36',
        title: 'more',
        imageSrc: 'Add%20Button_44228.svg',
        imageAlt: 'add button',
        color: 'lightPink'
    },
    {
        id: '24',
        title: 'cool',
        imageSrc: 'ice_17807.png',
        imageAlt: 'ice cube',
        color: 'lightPink'
    },
    {
        id: '57',
        title: 'first',
        imageSrc: 'first_23704.png',
        imageAlt: 'showing someone standing first in line',
        color: 'lightPink'
    },
    {
        id: '58',
        title: 'then',
        imageSrc: 'Think%20Then%20Do_37833.png',
        imageAlt: 'think then do',
        color: 'lightPink'
    },
    {
        id: '11',
        title: 'bad',
        imageSrc: 'bad_16939.png',
        imageAlt: 'thumb pointing down',
        color: 'darkPink'
    },
    {
        id: '12',
        title: 'good',
        imageSrc: 'Thumbs%20Up_41001.svg',
        imageAlt: 'thumb pointing up',
        color: 'darkPink'
    },
    {
        id: '14',
        title: 'am',
        imageSrc: 'I%20am%20fine_15187.png',
        imageAlt: 'I am fine drawing',
        color: 'lightGreen'
    },
    {
        id: '26',
        title: 'is',
        imageSrc: 'what%20is%20that__14281.png',
        imageAlt: 'finger pointing at question mark',
        color: 'lightGreen'
    },
    {
        id: '27',
        title: 'will',
        imageSrc: 'White%20Question%20Mark_43583.svg',
        imageAlt: 'white question mark',
        color: 'lightGreen'
    },
    {
        id: '50',
        title: 'do',
        imageSrc: 'Do_26106.png',
        imageAlt: 'list of stuff to do',
        color: 'lightGreen'
    },
    {
        id: '38',
        title: 'can',
        imageSrc: 'Question_32387.png',
        imageAlt: 'question thought bubble',
        color: 'lightGreen'
    },
    {
        id: '62',
        title: 'have',
        imageSrc: 'have_17947.png',
        imageAlt: 'red ball in someones hand',
        color: 'lightGreen'
    },
    {
        id: '69',
        title: 'wait',
        imageSrc: 'stop_17875.png',
        imageAlt: 'someone holding their hand up in a stop position',
        color: 'lightGreen'
    },
    {
        id: '16',
        title: 'be',
        imageSrc: 'be_46567.png',
        imageAlt: 'pointing at self',
        color: 'darkGreen'
    },
    {
        id: '17',
        title: 'feel',
        imageSrc: 'feelings_15127.png',
        imageAlt: 'faces showing feelings',
        color: 'darkGreen'
    },
    {
        id: '18',
        title: 'give',
        imageSrc: 'give_21931.png',
        imageAlt: 'showing someone giving someone a ball',
        color: 'darkGreen'
    },
    {
        id: '19',
        title: 'listen',
        imageSrc: 'listen%20to%20music_22609.png',
        imageAlt: 'someone listening to music',
        color: 'darkGreen'
    },
    {
        id: '28',
        title: 'come',
        imageSrc: 'Please%20come%20here_6404.svg',
        imageAlt: 'hand waving come',
        color: 'darkGreen'
    },
    {
        id: '29',
        title: 'hurt',
        imageSrc: 'Hurt_6390.svg',
        imageAlt: 'face with band-aid showing hurt',
        color: 'darkGreen'
    },
    {
        id: '30',
        title: 'hear',
        imageSrc: 'Hear%20,%20To_4756.svg',
        imageAlt: 'ear with hand up to it',
        color: 'darkGreen'
    },
    {
        id: '31',
        title: 'know',
        imageSrc: 'know_19512.png',
        imageAlt: 'someone raising their hand in class',
        color: 'darkGreen'
    },
    {
        id: '39',
        title: 'eat',
        imageSrc: 'Eat%20Bread_28117.png',
        imageAlt: 'someone eating',
        color: 'darkGreen'
    },
    {
        id: '40',
        title: 'drink',
        imageSrc: 'Drink_33627.png',
        imageAlt: 'someone drinking',
        color: 'darkGreen'
    },
    {
        id: '41',
        title: 'finish',
        imageSrc: 'Run%20To%20Finish_30175.png',
        imageAlt: 'running to finish line',
        color: 'darkGreen'
    },
    {
        id: '42',
        title: 'get',
        imageSrc: 'Target_38031.png',
        imageAlt: 'pointing at an object with a question mark',
        color: 'darkGreen'
    },
    {
        id: '43',
        title: 'love',
        imageSrc: 'Heart_29191.png',
        imageAlt: 'heart',
        color: 'darkGreen'
    },
    {
        id: '44',
        title: 'make',
        imageSrc: 'i%20will%20do_47673.png',
        imageAlt: 'someone making something with a hammer',
        color: 'darkGreen'
    },
    {
        id: '45',
        title: 'need',
        imageSrc: 'can%20I%20help%20you__19233.png',
        imageAlt: 'sign language need help',
        color: 'darkGreen'
    },
    {
        id: '51',
        title: 'go',
        imageSrc: 'Go_26054.png',
        imageAlt: 'someone walking',
        color: 'darkGreen'
    },
    {
        id: '52',
        title: 'help',
        imageSrc: 'I%20need%20help_6403.png',
        imageAlt: 'reaching out for help',
        color: 'darkGreen'
    },
    {
        id: '53',
        title: 'open',
        imageSrc: 'open_14053.png',
        imageAlt: 'hands opening',
        color: 'darkGreen'
    },
    {
        id: '54',
        title: 'put',
        imageSrc: 'put_24019.png',
        imageAlt: 'putting a box on a table',
        color: 'darkGreen'
    },
    {
        id: '55',
        title: 'talk',
        imageSrc: 'talk%20at%20once_46488.png',
        imageAlt: 'people talking',
        color: 'darkGreen'
    },
    {
        id: '56',
        title: 'look',
        imageSrc: 'What%20are%20you%20looking%20at__18027.png',
        imageAlt: 'looking at someone',
        color: 'darkGreen'
    },
    {
        id: '63',
        title: 'like',
        imageSrc: 'like_19945.png',
        imageAlt: 'holding something and smiling with a thumbs up',
        color: 'darkGreen'
    },
    {
        id: '64',
        title: 'play',
        imageSrc: 'play_17437.png',
        imageAlt: 'two people playing ball',
        color: 'darkGreen'
    },
    {
        id: '65',
        title: 'read',
        imageSrc: 'read_17820.png',
        imageAlt: 'someone reading a book',
        color: 'darkGreen'
    },
    {
        id: '66',
        title: 'stop',
        imageSrc: 'stop_18310.png',
        imageAlt: 'stop sign',
        color: 'darkGreen'
    },
    {
        id: '67',
        title: 'walk',
        imageSrc: 'walk_17197.png',
        imageAlt: 'someone walking',
        color: 'darkGreen'
    },
    {
        id: '68',
        title: 'show',
        imageSrc: 'show_14528.png',
        imageAlt: 'showing off a ball',
        color: 'darkGreen'
    },
    {
        id: '75',
        title: 'want',
        imageSrc: 'want_46605.png',
        imageAlt: 'someone reaching for an item',
        color: 'darkGreen'
    },
    {
        id: '76',
        title: 'take',
        imageSrc: 'want_46605.png',
        imageAlt: 'reaching for something they want',
        color: 'darkGreen'
    },
    {
        id: '77',
        title: 'tell',
        imageSrc: 'Talk_30920.png',
        imageAlt: 'someone talking',
        color: 'darkGreen'
    },
    {
        id: '78',
        title: 'turn',
        imageSrc: 'Left%20Arrow%20Curving%20Right_43513.png',
        imageAlt: 'arrow turning left',
        color: 'darkGreen'
    },
    {
        id: '79',
        title: 'watch',
        imageSrc: 'Eyes_30543.png',
        imageAlt: 'arrows pointing at eyes',
        color: 'darkGreen'
    },
    {
        id: '80',
        title: 'wear',
        imageSrc: 'Dressed%20Properly_34899.png',
        imageAlt: 'someone wearing clothes',
        color: 'darkGreen'
    },
    {
        id: '81',
        title: 'work',
        imageSrc: 'Work_32615.png',
        imageAlt: 'hands working',
        color: 'darkGreen'
    }
];

module.exports = dataList;

