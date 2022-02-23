import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faUserXmark } from '@fortawesome/free-solid-svg-icons';


const UserTable = (props) => {
    return (
        <div className='box-container-table'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ?
                            props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button className='btn-user-update'
                                        onClick={
                                            () => { props.editRow(user) }
                                        }><FontAwesomeIcon icon={faUserEdit} /></button>
                                        <button className='btn-user-delete'
                                        onClick={
                                            () => { props.deleteUser(user.id) }
                                        }><FontAwesomeIcon icon={faUserXmark} /></button>
                                    </td>
                                </tr>
                            )) 
                        : 
                            (
                                <tr>
                                    <td colSpan={3}>No users.</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
        
    );
}
 
export default UserTable;