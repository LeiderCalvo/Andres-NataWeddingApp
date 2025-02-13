import { ScreenContainer } from "../../components/screen-container/screen-container"
import union from "../../assets/union.png"
import "./vers.css"

export const Vers = () => {
    return <ScreenContainer bgImg={union}>
        <article className="vers">
            <p className="poppins-medium-italic ">“MÁS VALEN DOS QUE UNO, PORQUE<br />OBTIENEN MÁS FRUTO DE SU ESFUERZO.<br />SI CAEN, EL UNO LEVANTA AL OTRO”</p>
            <p className="poppins-medium">ECLESIASTÉS 4:9-10</p>
        </article>
    </ScreenContainer>
}