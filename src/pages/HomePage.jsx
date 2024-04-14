import Form from "../components/Form-Input";
import Warning from "../components/Warning";

function UploadPhotos() {

    return (
        <>
            <h1>
                ¡Bienvenido a la JuangyBoda!
            </h1>
            <div className="instructions">
                <p>Es tu misión hacer las fotos del banquete de boda para poder crear un álbum entre todos. Lo único que tienes que hacer es:</p>
                <p>Pinchar en &quot;Seleccionar Archivo&quot;, hacer la foto, confirmar ¡Y listo!</p>
                <p><strong>IMPORTANTE</strong>: Foto que hagas, foto que se sube y no hay vuelta atrás. ¡Ahí está la mágia!</p>
            </div>
            <Form />
            <Warning />
            <p className="bottom">Juan y Ángela</p>
        </>
    )
}

export default UploadPhotos;