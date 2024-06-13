import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:8000/user/usercheck";
        axios.post(url, { email, password })
            .then((res) => {
                if (!res.data.email || !res.data.name) {
                    alert("Invalid Credentials");
                } else {
                    window.localStorage.setItem("username", res.data.name);
                    window.localStorage.setItem("useremail", res.data.email);
                    navigate("/home");
                }
            })
            .catch((error) => {
                console.error("There was an error logging in:", error);
                alert("There was an error logging in. Please try again.");
            });
    };

    return (
        <div className="login-container">
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">User Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login Now</button>
            </form>
            <div className="additional-links">
                <Link to="/forgot-password">Forgot Password?</Link>
                <br />
                Not a Member? <Link to="/registration">Signup Now</Link>
            </div>
        </div>
    );
};

export default UserLogin;
