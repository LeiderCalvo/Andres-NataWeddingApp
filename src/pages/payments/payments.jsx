import palm from "../../assets/palm.png"
import "./payments.css"

export const Payments = () => {
    return <article id="payments">
        <div className="first">
            <p><strong>PUEDES HACERLO A TRAVÉS DE NEQUI,<br />EFECTIVO O BANCOLOMBIA:</strong></p>

            <p>NEQUI:<br />BANCOLOMBIA</p>
            <img src={palm} alt="a palm" />
            <p><strong>PERO ESO NO ES TODO:</strong></p>
            <p>PUEDES ELEGIR ALGUNO DE LOS<br />SIGUIENTES PLANES DE PAGO PARA<br />MAYOR COMODIDAD:</p>
        </div>

        <div className="second">
            <p>TEN EN CUENTA QUE LOS VALORES<br />MOSTRADOS A CONTINUACIÓN YA TIENEN<br />DESCONTADO EL ABONO DE<br />CONFIRMACIÓN DE $175.000</p>

            <div className="option">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>UNA SOLA CUOTA</h3>
                </div>
                <p>UN SOLO PAGO: $1&apos;400.000<br /><strong>FECHA: 1/04/25</strong></p>
            </div>

            <div className="option">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>3 CUOTAS</h3>
                </div>
                <p>CUOTA 1: $400.000<br /><strong>FECHA 1: 1/04/25</strong><br />CUOTA 2 Y 3: $500.000 CADA UNA<br /><strong>FECHA 2: 1/07/25</strong><br /><strong>FECHA 3: 1/10/25</strong></p>
            </div>

            <div className="option">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>8 CUOTAS</h3>
                </div>
                <p>CADA CUOTA POR: $175.000<br /><strong>FECHA: EL PRIMERO DE CADA MES</strong></p>
            </div>
        </div>
    </article>
}