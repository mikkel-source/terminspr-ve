import axios from "axios"
import { useEffect, useState } from "react"

export default function Images() {
    var [image, setImage] = useState({})
    useEffect(function(){
        axios.get("http://localhost:4000/api/v1/trainers")
        .then(response =>{
            setImage(response.data)
            console.log(response.data)
        })
    }, [setImage])
    return (
        <>
        <div style={{height:"20em", justifyContent: "space-around", display:"flex", alignItems:"center", flexDirection:"column", width:"30%"}}>
            <img style={{height:"5em", width:"4em", borderRadius:"10px"}} src={image[0]?.asset?.url} alt="" />
            <img style={{height:"5em", width:"4em"}}  src={image[1]?.asset?.url} alt="" />
            <img style={{height:"5em", width:"4em"}}  src={image[2]?.asset?.url} alt="" />

            

        </div>
        <div style={{display:"flex", marginLeft:"1em",flexDirection: "column", justifyContent:"space-around"}}>
            <p>{image[1]?.trainerName}</p>
            <p>{image[2]?.trainerName}</p>
            <p>{image[3]?.trainerName}</p>
        </div>
        </>

    ) 
    
}