import * as audio from "../../helpers/audio.js";
import classes from "./SpeakButton.module.css";
import {joinClassNames} from "../../helpers/JSXClassName";

/**
 * Creates buttons that speaks when clicked.
 *
 * @param {string} props.title The word/phrase that you want to add to the button.
 * @param {string} props.imageSrc The source of the image that describes the phrase.
 * @param {string} props.imageAlt The alt tag of the image that describes the phrase.
 * @param {string} props.color Extra customization that changes the appearance of the button
 *
 * @returns {JSX.Element} The button that speaks the phrase when clicked.
 * @constructor
 * */
export default function SpeakButton(props) {
    const buttonClasses = [
        classes[props.color],
        classes.button,
    ];
    return <button style={{background: props.color.toLowerCase()}} className={joinClassNames(buttonClasses)} onClick={() => {
        audio.speak(props.title)}
    }>
        <span className={classes.description}>{props.title}</span>
        <img className={classes.image} src={`/assets/images/${props.imageSrc}`} alt={props.imageAlt}></img>
    </button>;
}