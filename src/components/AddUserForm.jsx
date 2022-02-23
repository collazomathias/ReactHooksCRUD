import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, event) => {
        event.target.reset();
        props.addUser(data);
    }

    return (
        <form className='box-container' onSubmit={handleSubmit(onSubmit)}>
            <div className='box-container-content'>
                <div className='box-input-title'>NAME</div>
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
                <div className='box-input-title'>USERNAME</div>
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
            <button className='btn btn-add' type='submit'>Add user</button>
        </form>

    );
}
 
export default AddUserForm;