import ceremonia from "../../assets/ceremonia.png"
import "./ceremonia.css"

export const Ceremonia = () => {
    return <article className="ceremonia">
        <h1 id="ceremonia-title" className="title josephine">Ceremonia</h1>
        <div className="row">
            <h1 className="title josephine">y</h1>
            <h1 className="title mahek">Recepción</h1>
        </div>

        <p>
            QUEREMOS QUE CELEBRES CON NOSOTROS EL AMOR Y LA BENDICIÓN QUE DIOS HA TRAÍDO CON ESTA UNIÓN.
        </p>
        <p>
            POR ESO TE INVITAMOS A DISFRUTAR ESTE GRAN MOMENTO <strong>POR 3 DÍAS!!!</strong>
        </p>
        <p>
            ASÍ ES, HEMOS ELEGIDO UN LUGAR ÚNICO, PRIVADO Y MUY ESPECIAL, PARA QUE NOS ACOMPAÑES <strong>EL 17, 18, Y 19 DE OCTUBRE <br /> DE 2025.</strong>
        </p>
        <img src={ceremonia} alt="la pareja sonriendo" />
    </article >
}