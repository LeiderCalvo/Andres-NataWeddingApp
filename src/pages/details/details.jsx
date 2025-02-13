import palm from "../../assets/palm.png"
import "./details.css"

export const Details = () => {
    return <article className="details">
        <img src={palm} alt="a palm" />
        <p style={{ textAlign: "center" }}>
            AUNQUE CADA UNO RECUERDA ALGUNOS<br />DETALLES DIFERENTE, ASÍ SUCEDIÓ TODO:
        </p>
    </article>
}