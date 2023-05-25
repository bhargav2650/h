import { useState } from "react";
export default function Regpage(){
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    async function register(ev)
    {
        ev.preventDefault();
        const res=await fetch("http://localhost:5000/Register",{
            method:'POST',
            body:JSON.stringify({username, password}),
            headers:{'Content-Type':'application/json'},
        });
        if(res.status==200)
        {
            console.log("success");
        }
        else{
            console.log("fail");
        }
    }
    return(
        <form onSubmit={register}>
            <div>Sign up</div>
            <div>
            <input type="text" placeholder="username" value={username} onChange={ev=>setUsername(ev.target.value)}/></div>
            <div>
            <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)}/>
            </div>
            <div>
                <button>Sign up</button>
            </div>
        </form>   
    );
}