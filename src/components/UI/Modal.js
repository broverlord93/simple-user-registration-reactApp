import React from "react";

import Card from "./Card";
import Button from "./Button";

import style from "./Modal.module.css";

const Modal = props => {

    const onShowModalHandler = () => {
        props.toggleModal();
    };

    return (
        <div className={`modal-root ${props.showModal ? style["modal-show"]:style["modal-hide"]}`}>
            <Card >
                <p>{props.message}</p>
                <Button label="OK" onClick={onShowModalHandler}></Button>
            </Card>
        </div>
    );
};

export default Modal;
