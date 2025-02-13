import palm from "../../assets/palm.png"
import happy from "../../assets/happy.png"
import "./celebration.css"

export const Celebration = () => {
    return <article className="celebration">
        <section>
            <h1 className="josephine">Celebra con nosotros</h1>
            <h1 className="mahek">el felices para siempre</h1>
        </section>
        <img id="celebration-happy" src={happy} alt="la pareja riendo" />
        <img id="celebration-palm" src={palm} alt="a palm" />
        <p><strong>SIN EMBARGO ANTES DE CONTINUAR<br />QUEREMOS QUE SEPAS:</strong></p>
        <p>QUE HEMOS DEDICADO MUCHO TIEMPO Y<br />AMOR PARA ELEGIR CADA DETALLE QUE<br />VERÁS Y DISFRUTARÁS EN ESOS 3 DÍAS.</p>
        <p>ES UN SUEÑO QUE SE NOS CUMPLE Y<br />QUEREMOS HACERLO SEGÚN NUESTRAS<br />CREENCIAS, POR ESO NUESTRA<br />CEREMONIA SERÁ CRISTIANA.</p>
        <p>NO HABRÁ LICOR NI BAILE, PERO SI<br />MOMENTOS ESPECIALES, RISAS, LÁGRIMAS<br />Y MUCHÍSIMA FELICIDAD.</p>
    </article>
}