import ButtonBurger from "../component/buttonBurger";
import Content from "../component/content";

export default function MySchedule() {
    return (
        <>
      <Content>

        <div className="mySchedule__container">
            <div style={{display:"flex",  alignItems:"center",
             justifyContent:"space-evenly", paddingTop:"1em"}} className="mySchedule__containerHeader">
            <i class="fas fa-arrow-left"></i>
            <h1 className="mySchedule__containerHeadertext">my schedule</h1>

            <ButtonBurger/>
            </div>
            <div className="mySchedule__burger">

            </div>


        <div className="mySchedule__classes">

        </div>
        </div>
      </Content>
        </>
    )

}