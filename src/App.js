import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserForm from "./components/Users/UserForm";
import Modal from "./components/UI/Modal";


const App = () => {
    const defaultUsers = [
        {name: "Max", age: 31, id: Math.random()}
    ];
    const [users, setUsers] = useState(defaultUsers);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const onSubmitHandler = payload => {
        if (payload.showModal){
            setShowModal(payload.showModal);
            setModalMessage(payload.message);
            return;
        }

        setUsers((prevState) => {
            return [...prevState, payload.user];
        });
        setShowModal(false);
        setModalMessage('');
    };

    const onToggleModal = () => {
        setShowModal(prevState => !prevState);
        setModalMessage('');
    };

    return (
        <div>
            <UserForm onSubmit={onSubmitHandler}/>
            <Users users={users}/>
            <Modal showModal={showModal} message={modalMessage} toggleModal={onToggleModal} />
        </div>
    );
};

export default App;
