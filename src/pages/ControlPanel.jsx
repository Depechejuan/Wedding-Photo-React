import { useEffect, useState } from "react";
import UserInfo from "../components/User-Info";
import WeddingInfo from "../components/Wedding-Info";
import getToken from "../services/token/get-token";
import getUser from "../services/get-user";


function ControlPanel() {
    const [user, setUser] = useState(null);
    const token = getToken();

    useEffect(() => {
    async function fetchUser(token) {
        try {
        const data = await getUser(token);
        setUser(data);
        } catch (err) {
        console.error(err);
        }
    }
    fetchUser(token);
    }, [token]);

    const userData = user?.data[0];
    const weddingData = user?.data[1];
    console.log(userData);
    console.log(weddingData);
    return (
    <>
        <h2>Panel de Control</h2>
        <UserInfo user={userData} />
        <WeddingInfo wedding={weddingData}/>
    </>
    );
}

export default ControlPanel;
