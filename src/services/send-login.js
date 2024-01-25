const host = import.meta.env.VITE_API_HOST;

async function sendLogin(payload) {
    const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    };
    try {
        const response = await fetch(`${host}/login`, requestInit);

        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }

        const data = await response.json();
        return data.data;
    } catch (err) {
        console.error(err);
    }
}
export default sendLogin;
