import Form from "../components/Form-Input";
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
            <p>Pincha en &quot;Seleccionar Archivo&quot;, haz la foto ¡y listo!</p>
            <p>IMPORTANTE: Foto que hagas, foto que se sube. ¡No hay vuelta atrás!. ¡Ahí está la mágia!</p>
            <Form />
        </>
    )
}

export default UploadPhotos;