import {Routes,Route,Link} from "react-router-dom";
import {useEffect, useState,useContext} from 'react';
import { UserContext } from "./usercontext";
export default function Header(){
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/profile',{
            credentials:'include',
        }).then(res=>{
            res.json().then(userInfo=>{
                setUserInfo(userInfo);
        });
        });
    },[]);
    async function logout(){
    await fetch("http://localhost:5000/logout",{
        credentials:'include',
        method:'POST',
    });
    setUserInfo(null);
    }
    const username=userInfo?.username;
    return(
    <header>
<Link to="/" className="logo">Blog</Link>
          <nav>
            {username && (
                <div>
                <Link to="/POST/posts">create new blog</Link>
                <a onClick={logout}>Logout</a>
                </div>
            )}
            {!username && (
            <div>            
            <Link to="/login"> Login</Link>
            <Link to="/Register"> Register</Link>
            </div>)}
          </nav>
    </header>
    );
}