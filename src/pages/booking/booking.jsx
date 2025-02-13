import { ScreenContainer } from "../../components/screen-container/screen-container"
import reservar from "../../assets/reservar.png"
import "./booking.css"

export const Booking = () => {
    return <ScreenContainer bgImg={reservar}>
        <article className="booking">
            <h1 className="josephine">¿Cómo puedes</h1>
            <h1 className="mahek">hacerlo?</h1>
        </article>
    </ScreenContainer>
}