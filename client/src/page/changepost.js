import {useState} from "react";
import {useParams} from "react-router-dom";
export default function Changepost()
{
    const [title,setTitle]= useState('');
    // const [id,setid]= useState('');
    const [description,setDescription]= useState('');
    var res;
    const {id}=useParams()
    function view()
    {
        
        fetch("http://localhost:5000/Update/"+ String(id),{
        method:'POST',
        body:JSON.stringify({title, id,description}),
        headers:{'Content-Type':'application/json'},
        }).then(data=>{
            return data.json();
        }).then(post=>{
            console.log(post);
            res=post;
        })
    }
    return(
    <form onSubmit={view}>
    <div>make post</div>
    <div>
    <input type="text" placeholder="Title" value={title} onChange={ev=>setTitle(ev.target.value)}/></div>
    <div>
    <input type="text" placeholder="description" value={description} onChange={ev=>setDescription(ev.target.value)}/>
    </div>
    <div>
        <button>Create</button>
    </div>
</form>   
)}
