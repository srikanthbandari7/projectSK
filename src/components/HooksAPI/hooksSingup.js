import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const url = ` http://localhost:3007/user`; 

export default (props)=> {
  
    var [userData, setStateUserData]= useState({
    
        name:'',
        email:'',
        phone:'',
        txtConformation:''

    });

    var {name, email, phone, txtConformation} = userData;


let formDatahandling=(e)=>{
    setStateUserData({...userData, [e.target.name]:e.target.value});
}

 let submitHandler = (e)=>
  {
    e.preventDefault();

    var FormData=
    {
        name:`${userData.name}`,
        email:`${userData.email}`,
        phone:`${userData.phone}`
    }


     axios.post(url, FormData)
     .then(()=>props.history.push('/hooksUser'));
    
  }


  

    return (
      <>
        <div className="container p-3">

          <h4 className="py-3 text-center">User Registration</h4>

          <div className="container w-50">

            <form onSubmit={submitHandler.bind(this)}>

              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" value={name} name="name" onChange={formDatahandling.bind(this) } />
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" value={email} name="email" onChange={formDatahandling.bind(this) } />
              </div>

              <div class="mb-3">
                <label class="form-label">Phone No</label>
                <input type="number" class="form-control"  value={phone} name="phone" onChange={formDatahandling.bind(this) }/>
              </div>

              <div class="mb-3">
                <button type="submit" class="btn btn-primary" >CREATE ACCOUNT</button>
              </div>
              

              <p className="text-success">{txtConformation}</p>

            </form>
          </div>

        </div>
      </>
    );
  }



//there two arrays of integers, arr1 and arr2. One move is defined as an increment or decrement of one element in an array determine the minimum number of movies to match arr1 and arr2 ?
