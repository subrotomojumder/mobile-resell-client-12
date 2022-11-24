import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGooglePlusG, FaGooglePlusSquare } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
// import useToken from '../../Hooks/useToken';

const Register = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    // const [createdUser, setCreatedUser] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [token] = useToken(createdUser);
    // const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }
    const handleRegister = data => {
        setRegisterError('');
        console.log(data)
        createUser(data.email, data.password)
            .then(() => {
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(res => {
                        console.log(data.image)
                    }).catch(e => setRegisterError(e.message))
            }).catch(e => setRegisterError(e.message))
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(results => {
                // navigate('/');
            })
            .catch(err => {
                setRegisterError(err.message)
            })
    }
    // const saveUser = (name, email) => {
    //     const user = {name, email};
    //     fetch('https://doctors-portals-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         setCreatedUser(email)
    //     })
    // }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 border rounded-lg p-8 relative'>
                <h2 className='text-4xl semibold mb-2 text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", {
                            required: "name is required"
                        })} type="text" placeholder="Name here" className=" mb-2 input input-bordered w-full" />
                        {errors.name && <small className='text-red-500 text-sm'>{errors.name?.message}</small>}
                    </div>
                    <div className="form-control text-center w-20 absolute top-1 right-2">
                        <label htmlFor='image' className="label"><span className="label-text bg-sky-100 w-16 h-20 rounded-lg text-blue-400 font-semibold border-2 border-warning py-4 hover:text-warning">Image Upload</span></label>
                        <input {...register("image", {
                            required: "required"
                        })}
                            type="file"
                            id='image'
                            accept='image/*'
                            placeholder="Photo here" className="hidden"
                        />
                        {errors.image && <small className='text-red-500 text-sm mt-[-10px] mr-2'>{errors.image?.message}</small>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {
                            required: "email is required"
                        })} type="email" placeholder="Email here" className=" mb-2 input input-bordered w-full" />
                        {errors.email && <small className='text-red-500 text-sm'>{errors.email?.message}</small>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", {
                            required: "password is required", minLength: { value: 6, message: "password must be 6 characters" },
                        })} type="text" placeholder="Password here" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500 text-sm'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-3">
                        <select {...register("role", )} className="select select-accent w-full" defaultValue='Buyers'>
                            <option disabled selected>Select a user Role</option>
                            <option value='Buyers'>Buyers</option>
                            <option value='Sellers'>Sellers</option>
                        </select>
                        {registerError && <small>{registerError}</small>}
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-circle w-full' value='Register' type="submit" />
                    </div>
                </form>
                <p className='text-sm text-center mt-1'>Already have an account <Link to='/sign-in' className='text-blue-500 hover:link'>Sign-In</Link></p>
                <div className="divider">or</div>
                <div className='text-center'>
                    <button onClick={handleGoogleLogin} className='btn btn-outline btn-warning rounded-full'><FaGooglePlusG className='mr-2 text-2xl' /> GOOGLE Sign-in</button>
                </div>
            </div>
        </div>
    );
};

export default Register;