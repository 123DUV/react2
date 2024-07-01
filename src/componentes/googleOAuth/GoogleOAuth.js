import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode"


export default function GoogleOAuth() {
    const cookies = new Cookies()
  return (
    <div>
        <GoogleOAuthProvider clientId='240830551668-j5lqk4d6jrrto3pfrkac3bl1up8l7pe2.apps.googleusercontent.com'>
            <GoogleLogin
            onSuccess={credentialResponse =>{
                const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                cookies.set('email',credentialResponseDecode.email,{
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                //console.log(CredentialResponse);
                cookies.set('nombres',credentialResponseDecode.name,{
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                window.location.hash = '/sesioniniciada'
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
        </GoogleOAuthProvider>
      
    </div>
  )
}