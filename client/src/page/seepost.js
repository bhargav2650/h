import { useState } from "react";
export default function Seeposts()
{
    var data;
    var res;
    async function view()
    {
        res=await fetch("http://localhost:5000/View",{
        method:'GET',
            // body:JSON.stringify({title, description,likes:0}),
        headers:{'Content-Type':'application/json'},
        })
        data= await res.json()
        res=data
        console.log(res)
    }
    return(
    <div>
        <button onClick={view}> click to view all posts in the console</button>
        <table>
      <thead>
        <tr>
          {/* <th>ID</th>
          <th>Name</th>
          <th>Age</th> */}
        </tr>
      </thead>
      <tbody>
        {data && data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
)}
