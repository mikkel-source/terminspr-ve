import "./frontPage.scss"
import BelieveYourself from "../component/believeYourself"
import Content from "../component/content"
import image from "../images/image-resized.jpg"
import image2 from "../images/image2.jpg"
import {navigate} from "@reach/router"
export default function FrontPage() {

    return (
      <Content>

<>
        <div style={{ backgroundImage: `url("${image}")` }} className="brandContainer" >
          <BelieveYourself stylespan={{width:"3em"}}/>
          <p className="brandContainer__textmin">train like a pro</p>
        </div>
        <div style={{ backgroundImage: `url("${image2}")` }} className="startTrainingcontainer">

          <button onClick={()=> navigate(`/home`)} className="startTrainingcontainer__btn">
            <p className="startTrainingcontainer__btnText">start training</p>

          </button>

        </div>
        </>
      </Content>

    )

    
}