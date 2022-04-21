import React from "react";

import Card from "../UI/Card";

// import style from "./User.module.css"

const User = props => {
    return (
        <Card>
            <label key={props.id}>{props.name + "(" + props.age + "years old)"}</label>
        </Card>
    );
};

export default User;
