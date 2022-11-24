import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGooglePlusG} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSaveUser from '../../Hooks/usersHook';
import Spinner from '../Shared/Spinner';

const Register = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [registerError, setRegisterError] = useState('');
    const [loading, setLoading] = useState(false);
    const [saveUser, setSaveUser] = useState('');
    const [results] = useSaveUser(saveUser);
    const navigate = useNavigate();

    if (results.acknowledged) {
        toast.success('Create your account')
        navigate('/');
    }
    const handleRegister = data => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const role = data.role;
        const formData = new FormData();
        formData.append('image', data.image[0]);
        setRegisterError('');
        setLoading(true);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBB_key}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const photo = data?.data?.display_url;
                createUser(email, password)
                    .then(() => {
                        const userInfo = {
                            displayName: name,
                            photoURL: photo
                        }
                        updateUser(userInfo)
                            .then(res => {
                                setSaveUser({ name, email, role, photo })
                                setLoading(false)
                            }).catch(e => {
                                setRegisterError(e.message)
                                setLoading(false)
                            })
                    }).catch(e => {
                        setRegisterError(e.message)
                        setLoading(false)
                    })
            });
    };
    const handleGoogleLogin = () => {
        setLoading(true)
        googleLogin()
            .then(results => {
                const user = results.user;
                setSaveUser({name: user.displayName, email: user.email, photo: user.photoURL})
                setLoading(false)
            })
            .catch(err => {
                setRegisterError(err.message)
                setLoading(false)
            })
    }
    
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
                            // accept='image/*'
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
                        <select {...register("role",)} className="select select-accent w-full">
                            <option disabled selected >Select a user Role</option>
                            <option>Sellers</option>
                            <option value='Buyers'>Buyers</option>
                        </select>
                        {registerError && <small>{registerError}</small>}
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-circle w-full' type="submit" >{loading ?<Spinner/>: 'Register'}</button>
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