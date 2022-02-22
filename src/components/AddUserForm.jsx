import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, event) => {
        event.target.reset();
        props.addUser(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type='text' {...register('name', {
                required: {
                    value: true, 
                    message: 'Name is required.'
                }
            })} />
            <div>{errors?.name?.message}</div>
            <label>Username</label>
            <input type='text' {...register('username', {
                required: {
                    value: true, 
                    message: 'Username is required.'
                }
            })} />
            <div>{errors?.username?.message}</div>
            <button type='submit'>Add new user</button>
        </form>

    );
}
 
export default AddUserForm;