import "./fitnessCard.scss"
export default function FitnessCard({backgroundImage, onclick, stylep, style, styleBtn, pcontent, src}) {
  
    return (
        <div style={style} backgroundImage={backgroundImage} className="fitnessCard">
            <img onClick={onclick} className="fitnessCard__card" src={src} alt="" />
             <div style={styleBtn} className="fitnessCard__goPro">
                <p style={stylep}>{pcontent}</p>

            </div>
        </div>
    )
}