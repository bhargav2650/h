import {useContext,useState } from "react";
import{Navigate } from 'react-router-dom';
import { UserContext } from "../usercontext";
export default function Loginpage(){
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [redirect,setRedirect]= useState(false);
    const {setUserInfo}=useContext(UserContext);
    async function login(ev)
    {
        ev.preventDefault();
        const res=await fetch("http://localhost:5000/Login",{
            method:'POST',
            body:JSON.stringify({username, password}),
            headers:{'Content-Type':"application/json"},
            credentials:'include',
        });
        if(res.status==200)
        {
            console.log("successful login");
            res.json().then(userInfo=>{
                setUserInfo(userInfo)
                setRedirect(true);
            });
        }
        else{
            console.log("login failed");
        }
    }
    if(redirect)
    {
        return<Navigate to={"/"}/>
    }
    return(
        <form onSubmit={login}>
            <div>Login</div>
            <div>
            <input type="text" placeholder="username" value={username} onChange={ev=>setUsername(ev.target.value)}/></div>
            <div>
            <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}