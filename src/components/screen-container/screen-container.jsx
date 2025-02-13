import "./screen-container.css"

export const ScreenContainer = ({ children, bgImg }) => {
    return <section className="screen-container" style={bgImg ? { "background-image": `url(${bgImg})` } : {}}>
        {children}
    </section>
}