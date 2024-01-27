import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
  return (
    <div className='userTable'>

        <Link to={"/add"} className='addButton' >
                Add User
             </Link>
             <table border={1} cellPadding={10} cellSpacing={0}>

                <thead>

                    <tr>
                        <th>S.NO</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Atharv dalal</td>
                        <td>sangamdalal@gmail.com</td>
                        <td className='actionButtons'>
                            <button>delete</button>
                            <Link to={'/edit'}>Edit </Link>
                             </td>
                    </tr>
                </tbody>
             </table>
        

    </div>
  )
}

export default User