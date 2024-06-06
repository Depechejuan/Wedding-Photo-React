
import sendPhoto from '../services/send-photo';

function FormUpload() {


    const handleImageSelect = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('photo', file);
                const send = await sendPhoto(formData);

                }
            catch (error) {
                console.error('Error al subir  la imagen:', error);
            }
        }
    };

    return (
        <form className="input-form">
            <input id="input-a" type="file" accept="image/*" onChange={handleImageSelect} />
            <input id="input-b" type="file" accept="image/*" onChange={handleImageSelect} />
            <input id="input-c" type="file" accept="image/*" onChange={handleImageSelect} />
            <input id="input-d" type="file" accept="image/*" onChange={handleImageSelect} />
            <input id="input-e" type="file" accept="image/*" onChange={handleImageSelect} />
        </form>
    );
}

export default FormUpload;