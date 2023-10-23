import React, { useState } from 'react'

const Contact = () => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handelChange = (e) => {
    console.log(e.target.value, e.target.name);
    const { name, value } = e.target;
    setLogin(() => {
      return {
        ...login,
        [name]: value
      }
    })
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:4500/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setLogin({
      username: "",
      email: "",
      password: "",
    })
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className='contact'>
      <form onSubmit={handelSubmit}>
        <h1>Contact Us</h1>
        <label>Name</label>
        <input type="text"
          placeholder='name'
          value={login.username}
          onChange={handelChange}
          name='username' />

        <label>Email</label>
        <input type="text"
          placeholder='email'
          value={login.email}
          onChange={handelChange}
          name='email' />

        <label>Password</label>
        <input type="password"
          placeholder='password'
          value={login.password}
          onChange={handelChange}
          name='password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact