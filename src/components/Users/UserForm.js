import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = props => {
    // TODO: Collect Username and Age from the form
    // TODO: Pass new User to Users
    // TODO: Clear form when User is submitted or form is cancelled
    // TODO: Add form validation that will conditionally show a modal if entered data is no good
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
        const user = {name: name, age: age, id: Math.random()};
        props.onSubmit(user);
        setName('');
        setAge('');
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
