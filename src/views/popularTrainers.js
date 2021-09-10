import FitnessCard from "../component/fitnessCards";
import axios from "axios";
import { useState, useEffect } from "react";
import Content from "../component/content";
import { navigate } from "@reach/router";

export default function PopularTrainer(fitnessID) {
    var [trainers, setTrainers] = useState([])
    useEffect(function () {
        axios.get("http://localhost:4000/api/v1/trainers/1")
            .then(response => {
                setTrainers(response.data)
                console.log(response.data)
            })

    }, [setTrainers])

    return (
        <Content>

        <div className="popularTrainer__container">
            <div className="popularTrainer__containerText">
            <h1>popular trainers</h1>
            </div>
            <div className="popularTrainer__containerTrainers">
                <div onclick={()=> navigate(`/description`)} className="popularTrainers__containerImages">

                <FitnessCard onclick={()=> navigate(`/description`)} style={{ width: "100%", height:"6em" }} styleBtn={{ display: "none" }} src={trainers.asset?.url} />
                </div>
            <div className="popularTrainer__containerName">
                <p>{trainers.trainerName}</p>
            </div>

            </div>

        </div >
        </Content>
    )
}