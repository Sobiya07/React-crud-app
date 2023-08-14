import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault()
    const input = { name, email, password, contact };

    axios.post('http://localhost:5080/student', input).then((res) => {
      alert('saved successfully!');
      navigate('/');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-dark text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              onChange={e => setName(e.target.value)}
              type='text'
              name='name'
              className='form-control'
              value={name}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              onChange={e => setEmail(e.target.value)}
              type='email'
              name='email'
              className='form-control'
              value={email}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              onChange={e => setPassword(e.target.value)}
              type='password'
              name='password'
              className='form-control'
              value={password}

            />
          </div>
          <div>
            <label htmlFor='contact'>Contact</label>
            <input
              onChange={e => setContact(e.target.value)}
              type='tel'
              name='tel'
              className='form-control'
              value={contact}
            />
          </div>
          <br />
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}
