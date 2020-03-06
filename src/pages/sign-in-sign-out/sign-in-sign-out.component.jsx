import React from 'react'

import './sign-in-sign-out.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from './../sign-in-sign-out/sign-in-sign-out.component'

const SignInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
         <SignIn /> 
         <SignUp /> 
         </div>
);

export default SignInAndSignUpPage;