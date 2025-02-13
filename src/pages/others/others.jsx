import { ScreenContainer } from "../../components/screen-container/screen-container"
import others from "../../assets/others.png"
import "./others.css"

export const Others = () => {
    return <ScreenContainer bgImg={others}>
        <article className="others">
            <h1 className="josephine">Otras cosas para</h1>
            <h1 className="mahek">tener en cuenta</h1>
        </article>
    </ScreenContainer>
}