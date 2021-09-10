import ClassMenu from "../component/classMenu"
import axios from "axios"
import { useEffect, useState } from "react"
import "./popularClasses.scss"
import FitnessCard from "../component/fitnessCards"
import Content from "../component/content"
import { navigate } from "@reach/router"
export default function PopularClasses(FitnessID) {
    var [content, setcontent] = useState([])
    var [random, setRandom] = useState({})

    useEffect(function () {
        axios.get("http://localhost:4000/api/v1/classes")
            .then(response => {
                setcontent(response.data)
                console.log(response.data)

                let randomassets = response.data[Math.floor(Math.random() * response.data.length)]
                console.log(randomassets)
                setRandom(randomassets)


            })

    }, [setcontent])
    return (
        <>
        <Content 
        styleContent={{ display:"flex", flexDirection: "column"}}>
            <div className="popularClassescontainer">
                <ClassMenu />



            </div>
            <div className="popularClassescontainer__galleri">


                <FitnessCard onclick={()=> navigate("/description/" + random.id)} src={random.asset?.url} styleBtn={{width:"66%"}} pcontent={random.className} /> 
              



            </div>
            <div className="popularClassesforYou">
                <div className="popularClassesforYou__heading">
                    <h1 className="popularClassesforYou__text">classes for you</h1>

                </div>
                <div className="popularClassesforYou__map">
                    
                    {content.map(hold => (
                        <>
                            <FitnessCard style={{height: "100%", width:"40vw"}} src={hold.asset?.url} styleBtn={{width:"100%"}} pcontent={hold.className} />

                        </>
                            ))}
                            

                </div>






            </div>

        </Content>
        </>



    )
}