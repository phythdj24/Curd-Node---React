import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../adduser/Add.css'
import axios from 'axios'

const EditUser = () => {
  
  const users = {
    fullname:"",
    lastname:"",
    email:"",
    
  }
  const {id} = useParams();
  const [user, setUser] = useState();

  const inputHandler = ()=>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/edit/${id}`).then((response)=>{}).catch((error)=> console.log(error))
  })


  return (
    <div className='addUser'>
        
    <Link to={'/'}>Back</Link>
    <h3>Update User</h3>

    <form className='addUserForm'>
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
       
       <button type='submit'>Update User</button>

        </div>


    </form>

</div>
  )
}

export default EditUser