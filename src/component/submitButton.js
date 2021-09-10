import "./submitButton.scss"
export default function SubmitButtom({ p, onclick, valueStyle }) {
    return (
        <>
            <button onClick={onclick} className="submitButton" >

                <input className="submitButton__input" value={valueStyle} type="submit" />
                <p className="submitButton__inputText">{p}</p>
            </button>
        </>
    )
}