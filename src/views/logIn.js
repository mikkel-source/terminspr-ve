
import BelieveYourself from "../component/believeYourself"
import "./logIn.scss"
import Content from "../component/content"
import SubmitButtom from "../component/submitButton"
import loginContext from "../component/context/loginContext"
import { useContext } from "react"
import axios from "axios"
import ButtonBurger from "../component/buttonBurger"


export default function LogIn() {

    var [login, setLogin] = useContext(loginContext);



    function handleSubmit(event) {
        event.preventDefault()
        // axios.post("http://localhost:4000/auth/token", {
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     "body": "username=user1&password=1234"
        fetch("http://localhost:4000/auth/token", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": "username=user1&password=1234"
        })
            .then(function (response){
                console.log(response.data)
                setLogin(response.data)

            })
            .catch(err => console.error(err));
    }


    return (
        <Content>
            <>
                <div className="logIncontainer">
                    <ButtonBurger />
                    <BelieveYourself stylespan={{ display: "none" }} />
                    <div className="logIncontainer__component">
                        <span className="logIncontainer__componentDot">

                        </span>

                        <h1 className="logIncontainer__headline">train like a pro</h1>

                    </div>
                    <div className="logIn">
                        <h1 className="logIn__text">log in with your credentials</h1>
                        <form onSubmit={handleSubmit} className="login__submitForm" action="">
                            <input placeholder="enter your email..." className="logIn__input" type="text" />
                            <input placeholder="enter your password..." className="logIn__input" type="password" />
                            <SubmitButtom valueStyle="" p="log in" />


                        </form>
                    </div>


                </div>
            </>
        </Content>
    )

}