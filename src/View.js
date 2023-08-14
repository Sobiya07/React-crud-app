import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function View() {
    const {setid}=useParams();
    const [data, setData] = useState({});
  

    useEffect(()=>{
        axios.get(`http://localhost:5080/student/${setid}`)
        .then(res => setData(res.data))       
     .catch(err => console.log(err))    }, [setid]);
  
     const navigate = useNavigate();

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'> 
           <div className='w-50 border bg-dark text-white p-5'>  
           <h3>User Detail</h3>    
           <div className=' text-white'>        
           <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <p>Contact: {data.contact}</p>
          <button className='btn btn-primary' onClick={() => navigate('/')}>Back</button>
                           </div>  
           </div>
           </div>
  )
}
