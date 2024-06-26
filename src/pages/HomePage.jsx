import Form from "../components/Form-Input";
import FormUpload from "../components/Form-Second";
import Warning from "../components/Warning";
import { useState, useEffect } from 'react';
const host = import.meta.env.VITE_API_HOST;

function UploadPhotos() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${host}/check`);
                const data = await response.json();
                if (data.success) {
                    setIsSuccess(true);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, []);

    return (
        <>
            <h1>
                ¡Bienvenido a la <br />JuangyBoda!
            </h1>
            <div className="instructions">
                <p>Te encargamos la importante misión de hacer fotos durante el convite y la fiesta para crear un álbum entre todos. Lo único que tienes que hacer es:</p>
                <p>Pinchar en &quot;Seleccionar Archivo&quot;, hacer la foto, confirmar ¡Y listo!</p>
                <p><strong>IMPORTANTE</strong>: Foto que hagas, foto que se sube y no hay vuelta atrás. ¡Ahí está la magia!</p>
                <p>No te preocupes, cuando uses los 5 botones, todos volverán a activarse de nuevo</p>
            </div>

            {isLoading ? (
                <>
                    <p>Cargando los botones...</p>
                    <progress />
                </>
            ) : (
                isSuccess ? <Form /> : <progress />
            )}
            <div className="instructions2">
                Si ya has hecho una foto fuera de la aplicación y la quieres subir, usa este formulario. ¡Se paciente! Puede ser que no funcione tan rápido :)
            </div>

            {isLoading ? (
                <>
                    <p>Cargando los botones...</p>
                    <progress />
                </>
            ) : (
                isSuccess ? <FormUpload /> : <progress />
            )}
            
            <Warning />
            <div className="bottom">
                <p>Gracias por acompañarnos en este día tan especial para nosotros.</p>
                <p className="capitalize">Juan y Ángela</p>
            </div>
        </>
    )
}

export default UploadPhotos;