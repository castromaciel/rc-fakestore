import React, { useState } from 'react'

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = loginData
  
  const onChange = (event) => {
    setLoginData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className='form-page mt-5 text-white'>
      <h1>Login</h1>
      <form autoComplete='off'>
        <input 
          type='email'
          name='email'
          placeholder='example@example.com'
          onChange={onChange}
          value={email}
        />
        <input 
          type='password'
          name='password'
          placeholder='Ingrese su clave'
          value={password}
        />

        <button type='submit' className='btn btn-outline-light'>
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default Login
