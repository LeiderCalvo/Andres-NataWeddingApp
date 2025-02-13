import palm from "../../assets/palm.png"
import "./expenses.css"

export const Expenses = () => {
    return <article className="expenses">
        <h1 className="josephine">¿Gastos</h1>
        <h1 className="mahek">extras?</h1>

        <section>
            <div className="option">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>MAQUILLAJE</h3>
                </div>
                <p>UN SOLO PAGO: $270.000<br /><strong>FECHA: 1/09/25</strong></p>
            </div>

            <div className="option">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>PEINADO</h3>
                </div>
                <p>UN SOLO PAGO: $150.000<br /><strong>FECHA: 1/09/25</strong></p>
            </div>

            <div className="option">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>MAQUILLAJE Y PEINADO</h3>
                </div>
                <p>UN SOLO PAGO: $380.000<br /><strong>FECHA: 1/09/25</strong></p>
            </div>
        </section>
    </article>
}