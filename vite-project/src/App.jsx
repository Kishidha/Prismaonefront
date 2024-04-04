import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [users,setUsers]=useState([]);
  async function getUsers(){
    // import.meta.env.VITE_API_URL same as ProcessingInstruction.env in backend
    const response=await axios.get(import.meta.env.VITE_API_URL + "/users");
    const data=response.data;
    setUsers(data);
  }
  async function createUser(){
    const data={email,name};
    // data jo hm backend se nikal rhe h
    await axios.post(import.meta.env.VITE_API_URL + "/users",data);
    alert("User created");
  }
  return (
    
    <>
    <ul>
      {users.map(u => {
        return <li key={u.email}>{u.name}{u.email}</li>
      })}
  
    </ul>
    <button onClick={getUsers}>Get Users</button>
    <button onClick={createUser}>Create Users</button>
     <input placeholder="name" onChange={(e)=>setName(e.target.value)}/>{/*e.target.value (value nikalne ke liye event m se) */}
    <input placeholder="email"onChange={(e)=>setEmail(e.target.value)}/>
    </>
  )
}

export default App
