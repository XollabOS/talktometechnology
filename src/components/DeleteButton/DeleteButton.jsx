import classes from "./DeleteButton.module.css";

export default function DeleteButton(props) {
    return <button onClick={props.onClick} className={classes.button}>
        <i className="fas fa-trash"></i>
    </button>;
}