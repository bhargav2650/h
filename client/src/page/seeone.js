import {useState} from "react";
import {useParams} from "react-router-dom";
export default function Seepostone()
{
    var res;
    const {id}=useParams()
    function view()
    {
        
        fetch("http://localhost:5000/View/"+ String(id),{
        method:'GET',
            // body:JSON.stringify({title, description,likes:0}),
        headers:{'Content-Type':'application/json'},
        }).then(data=>{
            return data.json();
        }).then(post=>{
            console.log(post);
            res=post;
        })
    }
    return(
    <div>{view()}</div>
)}
