import { ScreenContainer } from "../../components/screen-container/screen-container"
import waiting from "../../assets/waiting.png"
import "./waiting.css"

export const Waiting = () => {
    return <ScreenContainer bgImg={waiting}>
        <article className="waiting">
            <h1 className="josephine">¡Te</h1>
            <h1 className="mahek">esperamos!</h1>
        </article>
    </ScreenContainer>
}