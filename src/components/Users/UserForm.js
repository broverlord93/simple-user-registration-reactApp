import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const onChangeNameHandler = (event) => {
        setName(event.target.value);
    };

    const onChangeAgeHandler = (event) => {
        setAge(event.target.value);
    };

    const onSubmitUser = (event) => {
        event.preventDefault();
        const message = validateName(name) + validateAge(age);
        const user = {name: name, age: age, id: Math.random()};
        const payload = {
            user: user,
            message: message,
            showModal: message !== ""
        }
        props.onSubmit(payload);
        setName('');
        setAge('');
    };

    const validateName = (name) => {
        let message = '';
        if (name === '') {
            message += "Name field cannot be blank!\n";
        }
        return message;
    };
    const validateAge = (age) => {
        let message = '';
        const parsedAge = parseInt(age);
        if (parsedAge < 0) {
            message += "Age field cannot be negative!\n";
        }
        if (parsedAge > 125) {
            message += "Age field cannot be greater than 125!\n";
        }
        if (age === '') {
            message = "Age field cannot be blank!\n";
        }
        return message;
    };

    return (
        <Card>
            <form onSubmit={onSubmitUser}>
                <label>Name</label><input type="text" value={name} onChange={onChangeNameHandler}/>
                <br/>
                <label>Age</label><input type="text" value={age} onChange={onChangeAgeHandler}/>
                <br/>
                <Button label="Add User"></Button>
            </form>
        </Card>
    );
};

export default UserForm;
