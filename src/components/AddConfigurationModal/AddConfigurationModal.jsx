import Backdrop from "../Backdrop/Backdrop";
import FormWrapper from "../FormWrapper/FormWrapper";
import classes from "./AddConfigurationModal.module.css"
import React from "react";
import {Link} from "react-router-dom";

export default function AddConfigurationModal() {
    let [formDisabled, setFormDisabled] = React.useState(false);

    async function handleSubmit() {
        setFormDisabled(true);
    }

    return <div className={classes.modal}>
        <Backdrop></Backdrop>
        <FormWrapper className={classes.formWrapper}>
            <div className={classes.modalDescription}>
                <h2 className={classes.modalDescriptionText}>Add a button</h2>
                <Link className={`${classes.button} ${classes.closeButton}`} to={".."}><i className="fas fa-xmark"></i></Link>
            </div>
            <form onSubmit={formDisabled ? null : handleSubmit}>
                <label>
                    <span className={classes.formLabel}><i className="fa-solid fa-volume-high"></i>Word to speak</span>
                    <input required={true} placeholder="What do you want to speak?" name="wordName" type={"text"} className={classes.textInput} />
                </label>
                <label>
                    <span className={classes.formLabel}><i className="fa-solid fa-image"></i>Word image</span>
                    <input required={true} placeholder="What do you want to speak?" name="wordName" type={"file"} className={classes.textInput} />
                </label>
                <input value="Add a button" type="submit" className={classes.button}/>
            </form>
        </FormWrapper>
    </div>
}