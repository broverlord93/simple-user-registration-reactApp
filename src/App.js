import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserForm from "./components/Users/UserForm";
import Modal from "./components/UI/Modal";


const App = () => {
    const defaultUsers = [
        {name: "Max", age: 31, id: Math.random()}
    ];
    const [users, setUsers] = useState(defaultUsers);
    // const [showModal, setShowModal] = useState(false);

    const onSubmitHandler = payload => {

        setUsers((prevState) => {
            return [...prevState, payload];
        });
    };

    return (
        <div>
            <UserForm onSubmit={onSubmitHandler}/>
            <Users users={users}/>
            <Modal/>
        </div>
    );
};

export default App;
