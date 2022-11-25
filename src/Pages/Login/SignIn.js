import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGooglePlusG } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSaveUser from '../../Hooks/usersHook';
import Spinner from '../Shared/Spinner';

const SignIn = () => {
    const {user }= useContext(AuthContext);
    const [signInError, setSignInError] = useState('');
    const { signInFunc, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [saveUser, setSaveUser] = useState('')
    const [results] = useSaveUser(saveUser);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    
    useEffect(()=> {
        if (results?.acknowledged) {
            navigate(from, {replace: true});
            toast.success('login your account');
        }
    },[results, from])
    const handleSignIn = data => {
        setSignInError('');
        setLoading(true);
        signInFunc(data.email, data.password)
            .then(results => {
                const user = results.user;
                setSaveUser({name: user.displayName, email: user.email})
                setLoading(false)
            })
            .catch(err => {
                setSignInError(err.message)
                setLoading(false);
            })
    }

    const handleGoogleLogin = () => {
        setLoading(true);
        googleLogin()
            .then(results => {
                const user = results.user;
                setSaveUser({name: user.displayName, email: user.email, photo: user.photoURL})
                setLoading(false)
            })
            .catch(err => {
                setSignInError(err.message)
                setLoading(false)
            })

    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 border rounded-lg p-8'>
                <h2 className='text-4xl semibold mb-2 text-center'>Sign In</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>
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
                        {signInError && <small>{signInError}</small>}
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-circle w-full' type="submit" >{loading? <Spinner/> : 'Sign In'}</button>
                    </div>
                </form>
                <p className='text-sm text-center mt-1'>Create new account <Link to='/register' className='text-blue-500 hover:link'>Sign up</Link></p>
                <div className="divider">or</div>
                <div className='text-center'>
                    <button onClick={handleGoogleLogin} className='btn btn-outline btn-warning rounded-full'><FaGooglePlusG className='mr-2 text-2xl' /> GOOGLE Sign-in</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;