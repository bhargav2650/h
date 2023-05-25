import {useState} from "react";
import {useParams} from "react-router-dom";
export default function Delpost()
{
    var res;
    const {id}=useParams()

        fetch("http://localhost:5000/Delete/"+ String(id),{
        method:'GET',
            // body:JSON.stringify({title, description,likes:0}),
        headers:{'Content-Type':'application/json'},
        })
}
