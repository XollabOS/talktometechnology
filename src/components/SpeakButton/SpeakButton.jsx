import * as audio from "../../helpers/audio.js";
import classes from "./SpeakButton.module.css";
import {joinClassNames} from "../../helpers/JSXClassName";

/**
 * Creates a button that speaks when clicked.
 *
 * @param {string} props.title The word/phrase that you want to add to the button.
 * @param {string} props.imageSrc The source of the image that describes the phrase.
 * @param {string} props.imageAlt The alt tag of the image that describes the phrase.
 * @param {string} props.bgColor Background color of the button.
 * @param {string} props.textColor Background color of the button.
 *
 * @returns {JSX.Element} The button that speaks the phrase when clicked.
 * @constructor
 * */
export default function SpeakButton(props) {
    const buttonClasses = [classes[props.bgColor], classes.button];

    function speak() {
        audio.speak(props.title);
    }

    const style = {
        background: props.bgColor?.toLowerCase(),
        color: props.textColor?.toLowerCase(),
    }

    return <button style={style} className={joinClassNames(buttonClasses)}
                   onClick={speak}>
        <span>{props.title}</span>
        <img className={classes.image} src={`${props.imageSrc}`} alt={props.imageAlt}></img>
    </button>;
}