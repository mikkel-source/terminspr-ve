import { navigate } from "@reach/router";


export default function Previous({style}) {
    return (
        <i style={style} onClick={()=> navigate(window.history.back)} class="fas fa-arrow-left"></i>

    )

} 