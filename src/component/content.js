import "./content.scss"
export default function Content({children, styleContent}) {
   return (
        <div style={styleContent} className="contentContainer">
            {children}
        </div>

    )
}