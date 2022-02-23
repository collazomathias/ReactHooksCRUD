import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import EditUserForm from './components/EditUserForm';

function App() {

    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ]

    const [users, setUsers] = useState(usersData);

    const [editing, setEditing] = useState(false);

    const [currentUser, setCurrentUser] = useState({
        id: null, 
        name: '', 
        username: ''
    });

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username
        })
    }

    const addUser = (user) => {
        user.id = uuidv4();
        setUsers([
            ...users,
            user
        ]);
    }
    
    const updateUser = (userId, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (
            user.id === userId ? updatedUser : user
        )))
    }

    const deleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId))
    }

    return (
        <div className='container'>
            <h1 className='title'>CRUD APP WITH HOOKS</h1>
            <div className='box'>
                <div className='left-hand-box'>
                    {
                        editing ? (
                            <Fragment>
                                <h2 className='box-subtitle'>EDIT USER</h2>
                                <EditUserForm 
                                    currentUser={currentUser} 
                                    updateUser={updateUser}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>    
                                <h2 className='box-subtitle'>ADD USER</h2>
                                <AddUserForm 
                                    addUser={addUser}
                                />
                            </Fragment>
                        )
                    }
                </div>
                <div className='right-hand-box'>
                    <h2 className='box-subtitle'>View users</h2>
                    <UserTable 
                        users={users} 
                        deleteUser={deleteUser} 
                        setEditing={setEditing}
                        editRow={editRow} 
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
