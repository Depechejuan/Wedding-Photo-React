const host = import.meta.env.VITE_API_HOST;

async function getUser(token) {
    const result = await fetch(`${host}/controlpanel`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });

    if (!result.ok) {
        throw new Error(`Error ${result.status}: ${result.statusText}`);
    }
    const users = await result.json();
    return users;
}

export default getUser;
