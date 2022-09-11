import Backdrop from "../Backdrop/Backdrop";
import FormWrapper from "../FormWrapper/FormWrapper";
import classes from "./AddConfigurationModal.module.css"
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {ButtonConfigurationContext} from "../../contexts/ButtonConfigurationContext";

export default function AddConfigurationModal() {
    const navigate = useNavigate();

    const [formDisabled, setFormDisabled] = React.useState(false);
    const buttonConfigurationData = React.useContext(ButtonConfigurationContext);
    const titleRef = React.useRef(null);
    const imageRef = React.useRef(null);
    const colorRef = React.useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formDisabled) {
            setFormDisabled(true);
            const success = await buttonConfigurationData.addNewButton({
                title: titleRef.current.value,
                image: imageRef.current.files[0],
                color: colorRef.current.value,
            });
            if (success) {
                navigate("..");
            } else {
                setFormDisabled(false);
            }
        }
    }

    return <div className={classes.modal}>
        <Backdrop></Backdrop>
        <FormWrapper className={`${classes.formWrapper} ${formDisabled ? classes.disabled : ""}`}>
            <div className={classes.modalDescription}>
                <h2 className={classes.modalDescriptionText}>Add a button</h2>
                <Link className={`${classes.button} ${classes.closeButton}`} to={".."}><i className="fas fa-xmark"></i></Link>
            </div>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label>
                    <span className={classes.formLabel}><i className="fa-solid fa-volume-high"></i>Word to speak</span>
                    <input required={true} placeholder="What do you want to speak?" type={"text"} className={classes.textInput} ref={titleRef}/>
                </label>
                <label>
                    <span className={classes.formLabel}><i className="fa-solid fa-image"></i>Word image</span>
                    <input required={true} placeholder="What do you want to speak?" type={"file"} className={classes.textInput} ref={imageRef}/>
                </label>
                <label>
                    <span className={classes.formLabel}><i className="fa-solid fa-palette"></i>Button color</span>
                    <input required={true} placeholder="What do you want to speak?" type={"color"} className={classes.colorInput} defaultValue={"#ff0000"} ref={colorRef}/>
                </label>
                <input value="Add a button" type="submit" className={classes.button}/>
            </form>
        </FormWrapper>
    </div>
}