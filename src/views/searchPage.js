import "./searchPage.scss"
import ButtonBurger from "../component/buttonBurger";
import Previous from "../component/previous";
import axios from "axios";
import { useState, useEffect } from "react"
import FitnessCard from "../component/fitnessCards";
import Content from "../component/content";
import TrainerImages from "../component/trainerImages";
import Images from "../component/trainerImages";

export default function SearchPage() {
    var [content, setcontent] = useState([])
    useEffect(function () {
        axios.get("http://localhost:4000/api/v1/classes")
            .then(response => {
                setcontent(response.data)
                // console.log(response.data)





            })
    }, [setcontent])



    return (
        <>
            <Content>

                <div className="searchContainer">
                    <div className="searchContainer__input">
                        <div className="saerchContainer__text">
                            <Previous />
                            <form className="searchContainer__form" action="">
                                <label className="searchContainer__formlabel" htmlFor="search">search</label>

                            </form>
                        </div>
                        <div className="searchContainer__burgerMenu">

                            <ButtonBurger />
                        </div>
                        <div className="searchContainer__burger">

                        </div>



                    </div>



                    <div className="searchContainerteams">
                        <button className="searchContainerteams__btn">
                            <i class="fas fa-search"></i>

                        </button>
                        <input placeholder=" search classes" id="search" className="searchContainerteams__input" type="search" />

                    </div>
                    <div className="containerClasses">
                        <div className="containerClasses__heading">
                            <h1>popular classes</h1>

                        </div>
                        <div className="containerClasses__images">
                            {content.map(hold => (
                                <>
                                    <FitnessCard style={{ height: "100", width: "100%" }} src={hold.asset.url} pcontent={hold.className} styleBtn={{ width: "100%" }} />
                                </>

                            ))}


                        </div>



                    </div>
                    <h1 style={{textTransform:"capitalize"}}>popular trainers</h1>

                <div style={{ display:"flex", }}>

                     <Images/>
                
                </div>
                </div>
            </Content>
            
        </>





    )
}