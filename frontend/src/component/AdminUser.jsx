import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img_avatar2 from "../images/img_avatar2.png";
// import "./AdminUser.css"; // import the CSS file here

const AdminUser = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8000/admin/checkadmin";
        try {
            const result = await axios.post(url, { name, password });
            if (result.data === "Success") {
                window.localStorage.setItem("userName", name);
                navigate("/admindashboard");
            } else {
                alert("You are not registered to this service");
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
            alert("There was an error logging in. Please try again.");
        }
    };

    const handleCancel = () => {
        setName("");
        setPassword("");
        navigate("/");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="imgcontainer">
                    <img src={img_avatar2} alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname">Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="psw">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" defaultChecked name="remember" /> Remember me
                    </label>
                </div>

                <div className="container flex">
                    <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    );
};

export default AdminUser;

