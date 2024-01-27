import React, { useState } from 'react'
import './Add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Add = () => {

    const users = {
        fistname: "",
        lastname: "",
        email: "",
        password: "",
    }
    const navigate = useNavigate();
    const [user, setUser]= useState()
    const inputHandler = (e)=>{
      const {name, value} = e.target;
      setUser({...user, [name]:value})

     
    }

    const submitForm = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8000/api/create", user).then((response)=>{
       toast.success(response.data.msg, {position: 'top-right'})
        navigate('/')
        }).catch(error => console.log(error))
    }

  return (
    <div className='addUser'>
        
        <Link to={'/'}>Back</Link>
        <h3>Add New User</h3>

        <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
            <label htmlFor="firstname">First Name</label>
            <input type="text" onChange={inputHandler} name="firstname"autoComplete='off' placeholder='Type...' />

            </div>
            <div className='inputGroup'>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" onChange={inputHandler} name="lastname"autoComplete='off' placeholder='Type...' />

            </div>
            
            <div className='inputGroup'>
            <label htmlFor="email">Email</label>
            <input type="text" onChange={inputHandler} name="email"autoComplete='off' placeholder='Type...' />

            </div>

            <div className='inputGroup'>
            <label htmlFor="password">Password</label>
            <input type="text" onChange={inputHandler} name="password"autoComplete='off' placeholder='Type...' />

            </div>
            <div className='inputGroup'>
           
           <button type='submit'>Add User</button>

            </div>


        </form>

    </div>
  )
}

export default Add