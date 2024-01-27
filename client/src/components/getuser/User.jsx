import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {

    const [users, setUsers ]= useState([])

    useEffect(()=>{

        const fetchData = async()=>{
          const res = await axios.get("http://localhost:8000/api/getall")
          setUsers(res.data)
        }

        fetchData()
    },[])


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
                    {
                        users.map((user,index)=>{
                            return (
                                <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fullname} {user.lastname} </td>
                                <td>{user.email}</td>
                                <td className='actionButtons'>
                                    <button>delete</button>
                                    <Link to={`/edit/`+user._id}>Edit </Link>
                                     </td>
                            </tr>
                            )
                        })
                    }
                    
                </tbody>
             </table>
        

    </div>
  )
}

export default User