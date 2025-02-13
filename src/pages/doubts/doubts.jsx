import { ScreenContainer } from "../../components/screen-container/screen-container"
import dudas from "../../assets/dudas.png"
import "./doubts.css"

export const Doubts = () => {
    return <ScreenContainer bgImg={dudas}>
        <article className="doubts">
            <h1 className="josephine">¿No te quedan</h1>
            <h1 className="mahek">dudas?</h1>
        </article>
    </ScreenContainer>
}