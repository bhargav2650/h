import { useState } from "react";
export default function Createpost()
{
    const [title,setTitle]= useState('');
    const [id,setid]= useState('');
    const [description,setDescription]= useState('');
    async function create(ev)
    {
        ev.preventDefault();
        const res=await fetch("http://localhost:5000/Create",{
            method:'POST',
            body:JSON.stringify({title,id,description,likes:0}),
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
        <form onSubmit={create}>
            <div>make post</div>
            <div>
            <input type="text" placeholder="Title" value={title} onChange={ev=>setTitle(ev.target.value)}/></div>
            <div>
            <input type="number" placeholder="id" value={id} onChange={ev=>setid(ev.target.value)}/></div>
            <div>
            <input type="text" placeholder="description" value={description} onChange={ev=>setDescription(ev.target.value)}/>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>   
    );
}