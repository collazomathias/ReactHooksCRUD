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
        <form className='box-container' onSubmit={handleSubmit(onSubmit)}>
            <div className='box-container-content'>
                <label className='box-input-title'>NAME</label>
                <input className='box-input' type='text' {...register('name', {
                    required: {
                        value: true, 
                        message: 'Name is required.'
                    },
                    maxLength: {
                        value: 15,
                        message: 'You can only enter between 3 and 15 characters.'
                    },
                    minLength: {
                        value: 3,
                        message: 'You can only enter between 3 and 15 characters.'
                    }
                })} />
            </div>
            <div className='message-error'>{errors?.name?.message}</div>
            <div className='box-container-content'>
                <label className='box-input-title'>USERNAME</label>
                <input className='box-input' type='text' {...register('username', {
                    required: {
                        value: true, 
                        message: 'Username is required.'
                    },
                    maxLength: {
                        value: 25,
                        message: 'You can only enter between 1 and 25 characters.'
                    },
                    minLength: {
                        value: 1,
                        message: 'You can only enter between 1 and 25 characters.'
                    }
                })} />
            </div>
            <div className='message-error'>{errors?.username?.message}</div>
            <button className='btn btn-edit' type='submit'>Edit user</button>
        </form>

    );
}
 
export default EditUserForm;