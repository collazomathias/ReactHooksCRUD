import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';

function App() {

    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ]

    const [users, setUsers] = useState(usersData);

    const addUser = (user) => {
        user.id = uuidv4();
        setUsers([
            ...users,
            user
        ]);
    }

    const deleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId))
    }

    return (
        <div className='container'>
            <h1>CRUD App with Hooks</h1>
            <div className='flex-row'>
                <div className='flex-large'>
                    <h2>Add user</h2>
                    <AddUserForm addUser={addUser} />
                </div>
                <div className='flex-large'>
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    );
}

export default App;
