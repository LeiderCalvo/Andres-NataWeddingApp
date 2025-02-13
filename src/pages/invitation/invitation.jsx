import { ScreenContainer } from "../../components/screen-container/screen-container"
import logo from "../../assets/logo.svg"
import palms from "../../assets/palms.png"
import "./invitation.css"

export const Invitation = () => {
    return <ScreenContainer>
        <article
            className="invitation-section1"
            style={{ "background-image": `url(${palms})` }}
        >
            <p className="poppins-bold-italic">18 OCTUBRE 2025</p>
            <p>PLAYAS EL FRANCÉS, TOLÚ</p>
        </article>

        <article className="invitation-section2">
            <img src={logo} alt="iniciales de la pareja" />
            <p >
                TENEMOS EL PLACER DE INVITARTE<br />A CELEBRAR EL DÍA MÁS ESPECIAL<br />DE NUESTRAS VIDAS.
            </p>
            <p >
                PREPARA TUS MALETAS Y<br />ACOMPÁÑANOS A DAR EL SÍ EN<br />LA COSTA CARIBEÑA DE COLOMBIA.
            </p>
            <button>¡QUIERO IR!</button>
        </article>
    </ScreenContainer>
}