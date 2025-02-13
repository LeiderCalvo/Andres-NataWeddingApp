import palms from "../../assets/palms.png";
import heart from "../../assets/heart.png";
import logo from "../../assets/logo-full.svg";
import "./ending.css"

export const Ending = () => {
    return <article className="ending">
        <section
            className="palms"
            style={{ "background-image": `url(${palms})` }}
        >
            <p>ESTAMOS ANHELANDO QUE LLEGUE EL GRAN<br />DÍA Y PODER COMPARTIRLO JUNTOS.</p>

            <p>GRACIAS POR HACER PARTE DE NUESTRA<br />GRAN HISTORIA.</p>

            <p className="poppins-bold-italic">¡NOS VEMOS PRONTO!</p>

        </section>
        <img src={logo} alt="" />
        <img src={heart} alt="" />
    </article>
}