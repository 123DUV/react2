import React from 'react';
import {useState} from 'react'
import {auth, provider} from './FireBaseConfig'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
import GitHubIcon from '@mui/icons-material/GitHub';



export default function FireBaseAuth(){
    const [user, setUser] = useState(null)
    const cookies = new Cookies();

    const handleGithubLogin = () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            setUser(result.user)
            console.log("result user---->",result.user.email);
            cookies.set('email', result.user.email,{
                secure: true,
                sameSite: 'None',
                path: '/'
            })
            window.location.hash = '/sesioniniciada'
        })
        .catch((error) => {
        console.log(error)       
    })



    }
    return(
        <div>
            {user ?(<>{}</>)  : ( <button type="button" className="btn btn-secondary btn-sm" onClick={handleGithubLogin} > <GitHubIcon/> Acceder con GitHub</button>) }
        </div>
    )
}




