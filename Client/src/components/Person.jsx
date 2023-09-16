import { useState,useEffect } from "react";
import axios from "axios"

const Person=()=>{
    const [mesage,setmessage]=useState("Loading...")

    useEffect(()=>{
        axios.get("http://localhost:7000/api")
        .then((res)=>setmessage(res.data.mesage))
        .catch((err)=>console.log(err))
    },[])
    return(
        <>
            <h1>Message from  backend {mesage}</h1>
        </>
    )
}

export default Person;