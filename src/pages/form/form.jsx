import { useRef, useState } from "react";
import palm from "../../assets/palm.png"
import FB from "../../utils/firebase";
import "./form.css"
import { invitees } from "./invitess";

const BUTTONS = [1, 2, 3, 4, 5, 6]

const Capacity = ({ max, r }) => {
    const [selected, setSelected] = useState();

    console.log({ max, selected });

    return <div>
        {BUTTONS.map(key =>
            <button
                key={key}
                className={selected === key ? "selected" : ""}
                onClick={() => { setSelected(key); r.current = key }}
                type="button"
                disabled={key > max}>
                {key}
            </button>
        )}
    </div>
}

export const Form = () => {
    const capacityRef = useRef()
    const [family, setFamily] = useState("")

    const handleSubmit = async (formData) => {
        const name = formData.get("name");
        const tel = formData.get("tel");
        const email = formData.get("email")
        console.log({ name, tel, email });

        if (!name || !tel || !email || !capacityRef.current) {
            return alert("Porfavor llena todos los campos")
        }


        await FB.writeData({
            name,
            tel,
            email,
            capacityRef: capacityRef.current
        })

        alert("Gracias por confirmar!...")
    }

    return <article className="form">
        <h1 className="josephine">Confirma tu</h1>
        <h1 className="mahek">asistencia</h1>

        <form action={handleSubmit}>
            <label className="poppins-bold" htmlFor="name">NOMBRE COMPLETO</label>
            <select name="name" id="name" required className="poppins-medium" onChange={e => setFamily(e.target.value)}>
                <option disabled selected value="">SELECCIONA TU FAMILIA</option>
                {Object.keys(invitees).map(family => <option key={family} value={family}>{family}</option>)}
            </select>
            {/* <input className="poppins-bold" id="name" name="name" type="text" placeholder="NOMBRE Y APELLIDO" /> */}

            <label className="poppins-bold" htmlFor="tel">NÚMERO TELEFÓNICO</label>
            <input className="poppins-medium" id="tel" name="tel" type="tel" placeholder="+57 333 3333333" />

            <label className="poppins-bold" htmlFor="email">CORREO ELECTRÓNICO</label>
            <input className="poppins-medium" id="email" name="email" type="email" placeholder="PEPITO@GMAIL.COM" />

            <label className="poppins-bold" htmlFor="other">CANTIDAD</label>
            <Capacity max={Number(invitees[family])} r={capacityRef} />
            {/* <input className="poppins-bold" id="other" name="other" type="number" placeholder="2" /> */}

            <button type="submit">¡QUIERO IR!</button>
        </form>

        <p><strong>AHORA QUE CONFIRMASTE ASISTENCIA:</strong></p>

        <div className="option">
            <div className="row">
                <img src={palm} alt="a palm" />
                <h3>¡SEPARA TU CUPO!</h3>
            </div>
            <p>ABONO DE CONFIRMACIÓN: $175.000<br /><strong>FECHA: 08/03/25</strong></p>
        </div>


    </article>
}