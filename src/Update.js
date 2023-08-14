import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import{useNavigate, useParams} from "react-router-dom";

export default function Update() {
const {setid}=useParams();
console.log(setid)


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [contact, setContact] = useState('');

const navigate= useNavigate();

const handleSubmit=(event)=>{

    event.preventDefault();
    const input= {name,email,password,contact};

    axios.put(`http://localhost:5080/student/${setid}`,input).then(()=>
    {alert("Updated successfully!");
    navigate('/');
})
.catch(err => console.log(err));
}

useEffect(()=>{
    axios.get(`http://localhost:5080/student/${setid}`).then(res=>{
        const studentData = res.data;
        setName(studentData.name);
        setEmail(studentData.email);
        setPassword(studentData.password);
        setContact(studentData.contact);
    })
    .catch(err => console.log(err))    }, [setid])

   

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>  
    <div className='w-50 border bg-dark text-white p-5'> 
    <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Name</label>
          <input onChange={(e)=>setName(e.target.value)} type="text" name="name" className='form-control' value={name} />
      </div>
      <div>
          <label htmlFor="email">Email</label>
          <input onChange={e=>setEmail(e.target.value)} type="email" name="email" value={email}
          className='form-control' />
      </div>
      <div>
          <label htmlFor="password">Password</label>
          <input onChange={e=>setPassword(e.target.value)} type="password" name="password" value={password} className='form-control' />
      </div>
      <div>
          <label htmlFor="contact">Contact</label>
          <input onChange={e=>setContact(e.target.value)} type="tel" name="tel" value={contact} className='form-control' />
      </div>
      <br/>
      <button type='submit' className='btn btn-info'>Update</button>
    </form>
    </div>
    </div>
  )
}
