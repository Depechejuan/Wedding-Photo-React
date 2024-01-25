import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import sendLogin from "../services/send-login.js";
import saveTokenLogin from "../services/token/save-token-login.js";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendLogin(formData);
            saveTokenLogin(response);
            navigate("/");
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <section className="form">
            <form className="login-form" method="post" onSubmit={handleSubmit}>
                <h3 className="login-title">Login</h3>
                <input
                    type="text"
                    name="email"
                    placeholder="e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="form-btn">
                    Log in
                </button>
            </form>
        </section>
    )
}

export default LoginForm