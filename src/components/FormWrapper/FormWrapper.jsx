import classes from "./FormWrapper.module.css"

export default function FormWrapper(props) {
    return <div className={`${classes.formWrapper} ${props.className || ""}`}>
        {props.children}
        {props.disabled ? <div className={classes.formDisabled}></div> : null}
    </div>
}