import { navigate } from "@reach/router"
import "./buttonBurger.scss"
export default function ButtonBurger({style}) {
    return (
        <button style={style} onClick={() => navigate(`/secondpage`)}  className="buttonBurger">
            <span className="buttonBurger__dot">
            </span>
            <span className="buttonBurger__dot">
            </span>
            <span className="buttonBurger__dot--half">

           </span>

        </button>
    ) 
    


}