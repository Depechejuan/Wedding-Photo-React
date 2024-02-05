import { useState } from 'react';

function Form() {
    const [selectedImages, setSelectedImages] = useState([]);


    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImages([...selectedImages, file]);
        }
    };



    return (
    <form className="input-form">
        {/* Este es el que funciona, ahora falta enfrentarse a quitar el preview */}
        <input type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />
        <input type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />
        <input type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />


    </form>
    );
}

export default Form;