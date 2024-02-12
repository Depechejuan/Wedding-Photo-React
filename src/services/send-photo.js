const host = import.meta.env.VITE_API_HOST;

async function sendPhoto(formData) {
    const requestInit = {
        method: "POST",
        body: formData,
    };
    try {
        const response = await fetch(`${host}/depeche`, requestInit);
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default sendPhoto;
