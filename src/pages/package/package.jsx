import logo from "../../assets/logo.svg"
import palm from "../../assets/palm.png"
import "./package.css"

export const Package = () => {
    return <article className="package">
        <img src={logo} alt="iniciales de la pareja" />
        <p>COMO TE MENCIONAMOS ANTERIORMENTE<br />TODO <strong>EL EVENTO SE LLEVARÁ A CABO EN<br />UN LUGAR PRIVADO,</strong> ES POR ESO, QUE<br />PARA PODER ASISTIR DEBES RESERVAR<br />CON NOSOTROS TODO EL PAQUETE.</p>

        <p>¿QUE QUIERE DECIR?</p>

        <p><strong>QUE NOS ASEGURAREMOS DE<br />GARANTIZAR TODO LO QUE NECESITAS<br />PARA QUE TU VIAJE SEA MARAVILLOSO</strong> Y<br />SIN PREOCUPACIONES NI LOGÍSTICA.</p>

        <p><strong>AL RESERVAR OBTENDRÁS:</strong></p>

        <ul>
            <li>- TIQUETES</li>
            <li>- HOSPEDAJE</li>
            <li>- TRASLADOS</li>
            <li>- ALIMENTACIÓN</li>
            <li>- DIVERSIÓN</li>
            <li>- PLAYA, BRISA Y MAR</li>
        </ul>

        <section>
            <h1 id="title-one" className="josephine">El presupuesto</h1>
            <h1 id="title-two" className="mahek">es de:</h1>

            <div className="price">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>ADULTOS</h3>
                </div>
                <div className="row value">
                    <h2 className="dm-serif-display-regular-italic">$1&apos;400.000</h2>
                    <h5 className="josephine">cop</h5>
                </div>
            </div>

            <div className="price">
                <div className="row">
                    <img src={palm} alt="a palm" />
                    <h3>NIÑOS</h3>
                </div>
                <div className="row value">
                    <h2 className="dm-serif-display-regular-italic">$1&apos;000.000</h2>
                    <h5 className="josephine">cop</h5>
                </div>
            </div>

            <li>NIÑOS MENORES DE 5 AÑOS</li>
        </section>

        <article>
            <p><strong>¿QUÉ INCLUYE?</strong></p>
            <p>TIQUETES DESDE TU CIUDAD DE ORIGEN<br />(DENTRO DE COLOMBIA), IDA Y VUELTA.</p>
            <p>TRASLADOS DEL AEROPUERTO HASTA LAS<br />CABAÑAS DE LA BODA.</p>
            <p>DESAYUNOS, COMIDAS, Y CENAS DE<br />LOS 3 DÍAS Y 2 NOCHES DENTRO<br />DE LAS CABAÑAS.</p>
            <p>SNACKS Y BEBIDAS DURANTE LA ESTADÍA.</p>
            <p>HOSPEDAJE 3 DÍAS Y 2 NOCHES.*</p>
            <p>PLAYA PRIVADA Y MAYORDOMO.</p>
            <h6>* LAS CABAÑAS CUENTAN CON 5 O 6<br />HABITACIONES PARA 20 PERSONAS, ESTO QUIERE<br />DECIR QUE ES PROBABLE QUE COMPARTAS EL<br />ESPACIO CON FAMILIA O AMIGOS.</h6>
        </article>
    </article>
}