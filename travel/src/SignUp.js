import React from 'react'
import { AuthProvider } from './Components/AuthenticationContext';
import Login from '../src/Components/Login';
import HeroImage from '../src/Components/HeroImage'

function SignUp() {
  return (
    <div>
  <HeroImage/>
  <h1 className='login-text'>Sign In Here</h1>
  <p></p>
<AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  )
}

export default SignUp
