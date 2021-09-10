import "./secondPage.scss"
import Content from "../component/content";
import { useHistory } from "react-router";
import ButtonBurger from "../component/buttonBurger";

export default function Secondpage() {

    return (
        <Content>

        <div className="scheduleTrainingcontainer">
          <div className="scheduleTrainingcontainer__returnOption">
            <i class="fas fa-backspace"></i>
          </div>
          <div className="scheduleTrainingcontainer__options">
          <a className ="scheduleTrainingcontainer__link" href="/frontpage">home</a>
          <a className="scheduleTrainingcontainer__link" href="/search">search</a>
          <a className="scheduleTrainingcontainer__link" href="/schedule">my schedule</a>
          <a className="scheduleTrainingcontainer__link" href="/login">log in</a>
          </div>


        </div>
        </Content>

    )

}