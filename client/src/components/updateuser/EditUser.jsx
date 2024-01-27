import React from 'react'
import { Link } from 'react-router-dom'
import '../adduser/Add.css'
const EditUser = () => {
  return (
    <div className='addUser'>
        
    <Link to={'/'}>Back</Link>
    <h3>Update User</h3>

    <form className='addUserForm'>
        <div className='inputGroup'>
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname"autoComplete='off' placeholder='Type...' />

        </div>
        <div className='inputGroup'>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname"autoComplete='off' placeholder='Type...' />

        </div>
        
        <div className='inputGroup'>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"autoComplete='off' placeholder='Type...' />

        </div>

    
        <div className='inputGroup'>
       
       <button type='submit'>Update User</button>

        </div>


    </form>

</div>
  )
}

export default EditUser