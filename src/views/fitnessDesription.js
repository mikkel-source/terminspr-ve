
import "./fitnessDescription.scss"
import axios from "axios"
import { useState, useEffect } from "react"
import Previous from "../component/previous"
import ButtonBurger from "../component/buttonBurger"
import Content from "../component/content"
import SubmitButtom from "../component/submitButton"
import { navigate } from "@reach/router"


export default function FitnessDescription({id, assetId, onclick}) {
    var [content, setcontent] = useState({})
    var [trainers, setTrainer] = useState({})

    useEffect(function () {
        axios.get(`http://localhost:4000/api/v1/classes/${id}`)
        .then(response => {
            setcontent(response.data)
            // console.log(response.data)
            assetId = response.data.assetId



            axios.get(`http://localhost:4000/api/v1/trainers/${assetId}`)
            .then(response =>{
                setTrainer(response.data)
        
                console.log(response.data)
            })
            
            })
        
    }, [id])
   
    return (
        <Content>
            <>

                <section className="fitnessDescription">

                    <img alt="" style={{width:"100%", height:"100%"}} src={content?.asset?.url} styleBtn={{ display: "none" }}/>
                    <article className="fitnessDescription__display">
<Previous style={{zIdex: -5, color:"white"}} />
<h1 className="fitnessDescription__title">{content.className}</h1>
</article>
<article  className="fitnessDescription__className">
<ButtonBurger style={{ color:"white" }} />

</article>



                
    




                </section>
                <section style={{ marginLeft:"1em", display:"flex", flexDirection:"column",height: "50vh"}}>
                    <article className="fitnessDescription__time" style={{display:"flex", gap:"10px" }}>
                    <p><time>{content.classDay}</time></p>
                    -
                    <p>{content.classTime}</p>

                    </article>
                    <article  style={{marginTop:"1em"}}>

                    <p className="fitnessDescription__text">{content.classDescription}</p>
                    </article>


                    <article style={{marginTop:"2em", display: "flex", flexDirection: "column"}}>
                        <h1 className="fitnessDescriptionTrainer" style={{textTransform: "capitalize"}}>trainer</h1>
                        <article style={{gap:"1em",alignItems:"center",height:"5em",display:"flex",marginTop:"1.5em" ,width:"100"}}>
                            
                                <>
                                <img style={{height:"100%", width:"20%", borderRadius:"20px"}} src={trainers?.asset?.url} />
                                </>
                                                    <p>{content.trainer?.trainerName}</p>
                        </article>
                        <article style={{display:"flex", marginTop:"1em", justifyContent:"center"}}>

                        <SubmitButtom onclick={()=> navigate(`/schedule`)} valueStyle=""  p="sign up"/>
                        </article>
                    </article>



                </section>


            </>
        </Content>
    )
}
