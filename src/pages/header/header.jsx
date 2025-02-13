import { ScreenContainer } from "../../components/screen-container/screen-container"
import background from "../../assets/header.png"
import logo from "../../assets/logo-full.svg"
import "./header.css"

export const Header = () => {
    return <ScreenContainer bgImg={background}>
        <article className="header-container">
            <img src={logo} alt="full logo" />
        </article>
    </ScreenContainer>
}