

import React from "react";
import { useForm } from 'react-hook-form';
import { signUp } from "../../utils/services";
import { Link } from "react-router-dom";


const Register = ()  => {
   const { register, handleSubmit, errors } = useForm();


   const onSubmit = (obj) => {
     let formData = new FormData();
       formData.append('email', obj.email)
       formData.append('password', obj.password)
       formData.append('full_name', obj.full_name)
     console.log(obj)
       localStorage.setItem('userData', JSON.stringify(obj));

     signUp(formData)
      .then(({data})=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
   }


  return(
<div className="col-md-4 offset-md-4">
   <h2 className="text-center" style={{ color: 'gray' }}>Sign up</h2>    
   <form onSubmit={handleSubmit(onSubmit)} className="shadow p-5">
        <div class="mb-3">
          <label className="form-label">Full Name</label>
          <input name="full_name" className="form-control" ref={register({ required: true })} />
          {errors.full_name && 'Last name is required.'}
        </div> 
        <div class="mb-3">
          <label className="form-label">Email</label>
          <input name="email" className="form-control"  ref={register({ required: true })} />
          {errors.email && 'Last name is required.'}
        </div>
        <div class="mb-3">   
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" ref={register({ required: true })} />
          {errors.password && 'Please enter number for password.'}
        </div>
              <input type="submit" class="btn btn-primary" /> <Link to="/login">Sign In</Link>
   </form> 
</div>  
  )
}

export default Register;