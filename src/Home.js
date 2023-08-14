import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
const [data, setData]=useState([]);

useEffect(()=>{
    axios.get('http://localhost:5080/student')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
},[]);

const handleRemove =(id)=>{
    if( window.confirm('Do you want to Delete?')){
        axios.delete(`http://localhost:5080/student/${id}`).then
        (()=>{alert("Deleted successfully");
        setData(data.filter(student => student.id !== id));
    })
    .catch(err=> console.log(err));
    }
  };



  return (
    <div>
 <div className="container mt-3">
    <div className="card">
        <div className="card-title">
    <h2 className='m-2'>React Crud App</h2>
    </div>
    <div className="card-body">
    <Link to="/create" className='btn btn-success my-3'>Create</Link>
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
{data.map(student=>(
    <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.password}</td>
        <td>{student.contact}</td>
        <td>
        <Link className='text-decoration-none btn btn-sm btn-success'  to={`/update/${student.id}`}>Update</Link>     
         <button className='text-decoration-none btn btn-sm btn-danger mx-1' onClick={()=> handleRemove(student.id)}>Delete</button>                           
          <Link className='text-decoration-none btn btn-sm btn-primary'  to={`/view/${student.id}`}>View</Link> 

        </td>
    </tr>
))}
        </tbody>

    </table>
    </div>
    </div>
  
 </div>
 </div>
  );

}
