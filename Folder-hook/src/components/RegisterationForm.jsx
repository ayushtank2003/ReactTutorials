import React from 'react'
import{useForm} from "react-hook-form"

function RegisterationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    }=useForm();

    const onSubmit=(data)=>{
        console.log('Form Data',data);
    }
    
    return (
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name'
                    {...register('name',{required:'Name is required'})}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email'
                    {...register('email',{
                        required:'Email is required',
                        pattern:{
                            value:/^[\W-\.]+@([\W-]+\.)+[\W-]{1,4}$/,
                            message:'Please enter a valid email'
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id='password'
                    {...register('password',{
                        required:'Password is required',
                        minLength:{
                            value:6,
                            message:'Password must be at least 6 characters'
                            }
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>

    )
}

export default RegisterationForm