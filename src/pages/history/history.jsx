import { ScreenContainer } from "../../components/screen-container/screen-container"
import historia from "../../assets/historia.png"
import "./history.css"

export const History = () => {
    return <ScreenContainer bgImg={historia}>
        <article className="history">
            <h1 className="josephine">Nuestra</h1>
            <h1 className="mahek">historia...</h1>
        </article>
    </ScreenContainer>
}