import Form from "../components/Form-Input";
import Warning from "../components/Warning";
import createGuest from "../services/create-guest";
import { v4 as uuidv4 } from 'uuid';

function UploadPhotos() {
    // const wedding = uuidv4();
    const user = uuidv4();
    createGuest("WEDDING", user)

    
    return (
        <>
            <h1>
                ¡Bienvenidos a la JuangyBoda!
            </h1>
            <div className="instructions">
                <p>Es vuestra misión hacer las fotos del banquete de boda, para poder crear un álbum entre todos. Lo único que tenéis que hacer es:</p>
                <p>Pinchar en &quot;Seleccionar Archivo&quot;, hacer la foto, confirmar ¡y listo!</p>
                <p>IMPORTANTE: Foto que hagas, foto que se sube. ¡Y no hay vuelta atrás!. ¡Ahí está la mágia!</p>
            </div>
            <Form />
            <Warning />

            <p className="bottom">Juan y Ángela</p>
        </>
    )
}

export default UploadPhotos;