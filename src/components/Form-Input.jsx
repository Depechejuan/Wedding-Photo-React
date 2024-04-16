import { useState, useEffect } from 'react';
import sendPhoto from '../services/send-photo';

function Form() {
    const [formDisabled, setFormDisabled] = useState(false);
    const [count, setCount] = useState(0); 
    
    useEffect(() => {
        const disabledInputs = JSON.parse(localStorage.getItem('disabledInputs')) || {};
        let newCount = 0;
        for (let i = 0; i < 5; i++) {
            if (disabledInputs[i]) {
                document.getElementById(`input-${i}`).disabled = true;
                setCount(newCount++);
            }
            if (newCount === 5) {
                setCount(0);
                localStorage.removeItem("disabledInputs");
            }
        }
    }, []);


    const handleImageSelect = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('photo', file);
                await sendPhoto(formData);
                const inputIndex = parseInt(e.target.id.split('-')[1]);
                const disabledInputs = JSON.parse(localStorage.getItem('disabledInputs')) || {};
                disabledInputs[inputIndex] = true;
                localStorage.setItem('disabledInputs', JSON.stringify(disabledInputs));
                e.target.disabled = true;
    
                setCount(prevCount => {
                    const newCount = prevCount + 2;
                    if (newCount === 5) {
                        for (let i = 0; i < 5; i++) {
                            document.getElementById(`input-${i}`).disabled = false;
                        }
                        setCount(0);
                        localStorage.removeItem("disabledInputs");
                    }
                    console.log("New Count: ", newCount);
                    return newCount;
                });
            } catch (error) {
                console.error('Error al enviar la imagen:', error);
            }
        }
    };

    return (
        <form className="input-form">
            <input id="input-0" type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />
            <input id="input-1" type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />
            <input id="input-2" type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />
            <input id="input-3" type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />
            <input id="input-4" type="file" accept="image/*" capture="camera" onChange={handleImageSelect} />
        </form>
    );
}

export default Form;