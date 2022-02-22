import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const {register, handleSubmit, setValue, formState: { errors }} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    console.log(props.currentUser);

    const onSubmit = (data, event) => {

        props.updateUser(props.currentUser.id, data);
        event.target.reset();
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
            <button type='submit'>Edit user</button>
        </form>

    );
}
 
export default EditUserForm;