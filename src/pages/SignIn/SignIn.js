

import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../contenxt/contenxt";
import { signIn } from "../../utils/services";
import { Link } from "react-router-dom";


const Login = () => {
    const authContext = useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (obj) => {
        let formData = new FormData();
        formData.append('email', obj.email)
        formData.append('password', obj.password)

        console.log(obj)

        signIn(formData)
            .then(({ data }) => {
                console.log(data)
                authContext.login()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="col-md-4 offset-md-4">
            <h2 className="text-center" style={{ color: 'gray' }}>Sign In</h2>  
            <form onSubmit={handleSubmit(onSubmit)} className="shadow p-5">
                <div class="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" className="form-control" ref={register({ required: true })} />
                    {errors.email && 'Last name is required.'}
                </div>
                 <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" ref={register({ required: true })} />
                    {errors.password && 'Please enter number for password.'}
                </div>   
                <input type="submit" class="btn btn-primary" /> <Link to="/">Sign up</Link>
            </form>
       </div>
    )
}

export default Login;