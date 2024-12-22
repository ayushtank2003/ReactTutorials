import React from 'react'
import {useForm} from 'react-hook-form'
const FormDemo1 = () => {
    const {register,handleSubmit,getValues,formState:{errors}} = useForm();
    const handleregistration=(data)=>{
        console.log(data);
    }
    const handelError=(errors)=>{};
    const registerOptions={
        name:{required:'Name is required'},
        email:{required:'Email is required',
            pattern:{
                value:/^\S+@\S+\.\S+$/,
                message:'Please enter a valid email address'
            }
        },
        password:{required:'Password is required',
            minLength:{
                value:6,
                message:'Password must be at least 6 characters long'
            }
        },
        confirmPassword: {
            required: 'Confirm Password is required',
            validate: (value) =>
                value === getValues('password') || 'Passwords do not match',
        }
    };
    return (
    <div>
        <h1>Form Demo (react form)</h1>
        <form onSubmit={handleSubmit(handleregistration,handelError)}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' {...register('name',registerOptions.name )} />
            <small>{errors?.name && errors.name.message}</small><br /><br />
            <label htmlFor="email">Email</label>
            <input type="text" name='email'{...register('email',registerOptions.email)} />
            <small>{errors?.email && errors.email.message}</small><br /><br />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' {...register('password',registerOptions.password)} />
            <small>{errors?.password && errors.password.message}</small><br /><br />
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input type="Password" name='confirmPassword' {...register('confirmPassword',registerOptions.confirmPassword)} />
            <small>{errors?.confirmPassword && errors.confirmPassword.message}</small><br /><br /> 
            <button>Submit</button>
        </form>
    </div>

    )
}

export default FormDemo1