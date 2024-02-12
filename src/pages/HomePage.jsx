import Form from "../components/Form-Input";
import createGuest from "../services/create-guest";
import { v4 as uuidv4 } from 'uuid';

function UploadPhotos() {
    // const wedding = uuidv4();
    const user = uuidv4();
    createGuest("JUANGY", user)

    
    return (
        <>
            <h1>
                Retro Photo for Weddings
            </h1>
            <p>Take first picture</p>
            <p>IMPORTANTE: Foto que hagas, foto que se sube. ¡Ahí está la mágia!</p>
            <Form />
        </>
    )
}

export default UploadPhotos;