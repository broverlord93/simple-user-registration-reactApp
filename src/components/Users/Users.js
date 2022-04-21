import React from "react";

import User from "./User";

// import style from "./Users.module.css";

const Users = props => {
    // TODO: Show User list
    if (props.users.length === 0){
        return <p>No users to display!</p>
    }

    const users = props.users.map(user =>  <User name={user.name} age={user.age} key={user.id}></User> );

    return (
        <div>
            {users}
        </div>
    )

};

export default Users;
