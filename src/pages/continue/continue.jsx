import palms from "../../assets/palms.png"
import "./continue.css"

export const Continue = () => {
    return <article
        className="continue"
        style={{ "background-image": `url(${palms})` }}
    >
        <h3 className="poppins-bold-italic">A CONTINUACIÓN:</h3>
        <p>TE DEJAMOS TODOS LOS DETALLES<br />QUE NECESITAS SABER PARA PODER<br />ACOMPAÑARNOS ESTE <strong>17, 18 Y 19 DE<br />OCTUBRE DEL 2025</strong></p>
    </article>
}