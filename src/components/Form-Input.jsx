import { useState } from 'react';

function Form() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [mediaStream, setMediaStream] = useState(null);

    const openCamera = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setMediaStream(stream);
    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
    }
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImages([...selectedImages, file]);
        }
    };

    return(
        <form className="input-form">
            <button onClick={openCamera}>Foto 1</button>
            <input type="file" accept="image/*" onChange={handleImageSelect} />
            <input type="file" accept="image/*" onChange={handleImageSelect} />
            <input type="file" accept="image/*" onChange={handleImageSelect} />
            <h3>Imágenes Subidas:</h3>
            <ul>
            {selectedImages.map((image, i) => (
                <li key={i.id}>{image.name}</li>
            ))}
            </ul>
        </form>
        );
}

export default Form