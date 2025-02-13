import palm from "../../assets/palm.png"
import FB from "../../utils/firebase";
import "./form.css"

export const Form = () => {
    const handleSubmit = async (formData) => {
        const name = formData.get("name");
        const tel = formData.get("tel");
        const email = formData.get("email");
        const other = formData.get("other");
        console.log({ name, tel, email, other });

        if (!name || !tel || !email || !other) {
            return alert("Porfavor llena todos los campos")
        }


        await FB.writeData({
            name,
            tel,
            email,
            other
        })

        alert("Gracias por confirmar!...")
    }

    return <article className="form">
        <h1 className="josephine">Confirma tu</h1>
        <h1 className="mahek">asistencia</h1>

        <form action={handleSubmit}>
            <label className="poppins-bold" htmlFor="name">NOMBRE COMPLETO</label>
            <input className="poppins-bold" id="name" name="name" type="text" placeholder="NOMBRE Y APELLIDO" />

            <label className="poppins-bold" htmlFor="tel">NÚMERO TELEFÓNICO</label>
            <input className="poppins-bold" id="tel" name="tel" type="tel" placeholder="+57 333 3333333" />

            <label className="poppins-bold" htmlFor="email">CORREO ELECTRÓNICO</label>
            <input className="poppins-bold" id="email" name="email" type="email" placeholder="PEPITO@GMAIL.COM" />

            <label className="poppins-bold" htmlFor="other">NOMBRE COMPLETO</label>
            <input className="poppins-bold" id="other" name="other" type="text" placeholder="NOMBRE Y APELLIDO" />

            <button type="submit">¡QUIERO IR!</button>
        </form>

        <p><strong>AHORA QUE CONFIRMASTE ASISTENCIA:</strong></p>

        <div className="option">
            <div className="row">
                <img src={palm} alt="a palm" />
                <h3>¡SEPARA TU CUPO!</h3>
            </div>
            <p>ABONO DE CONFIRMACIÓN: $175.000<br /><strong>FECHA: 28/02/25</strong></p>
        </div>

        <p><strong>PUEDES HACERLO A TRAVÉS DE NEQUI,<br />EFECTIVO O BANCOLOMBIA:</strong></p>

        <p>NEQUI:<br />BANCOLOMBIA</p>
    </article>
}