import women from "../../assets/women.png"
import men from "../../assets/men.png"
import "./dressing.css"

export const Dressing = () => {
    return <article className="dressing">
        <h1 className="josephine">Código de</h1>
        <h1 className="mahek" id="title2">vestimenta</h1>
        <p>PARA HACER TODO AUN MÁS ESPECIAL<br />QUEREMOS QUE NOS ACOMPAÑES CON EL<br />ATUENDO QUE MAS TE GUSTE, PERO SOLO<br />PEDIMOS UNA COSA: DEBE SER COLOR...</p>

        <h2 className="mahek">beige</h2>

        <p>NO BLANCO, NO CAFÉ, NO AMARILLO, NO<br />COLORES DIFERENTES, SOLO <strong>BEIGE</strong></p>

        <h2 className="mahek">mujeres</h2>
        <p>VESTIDO LARGO O CORTO, <strong>SIN BRILLANTES.<br />NADA DE BLANCO.</strong></p>
        <img src={women} alt="vestidos de mujer" />

        <h2 className="mahek">hombres</h2>
        <p>CAMISA MANGA LARGA O CORTA, CON<br />PANTALÓN LARGO, <strong>SIN SACO.<br />NADA DE BLANCO.</strong></p>
        <img src={men} alt="camisas de hombre" />
    </article>
}