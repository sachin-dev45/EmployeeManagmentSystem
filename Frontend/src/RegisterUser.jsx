import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterUser() {

    const [isregistration, setisregistration] = useState(false);
    const navigate = useNavigate();

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [comfirmpassword, setcomfirmpassword] = useState("");
    const [role, setrole] = useState("");
    const [contactno, setcontactno] = useState("");
    const [empid, setempid] = useState("");
    const [gender, setgender] = useState("");

    const [loading, setloading] = useState(false);

    let app=process.env.REACT_APP_SERVER_IP

   
    const registerValidation = () => {

        if (
            !firstname || !lastname || !email ||
            !username || !password || !comfirmpassword ||
            !contactno || !role || !empid || !gender
        ) {
            alert("All fields are required");
            return false;
        }

        if (!/^[A-Za-z\s]+$/.test(firstname)) {
            alert("First name must contain only alphabets");
            return false;
        }

        if (!/^[A-Za-z\s]+$/.test(lastname)) {
            alert("Last name must contain only alphabets");
            return false;
        }

        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            alert("Enter valid email");
            return false;
        }

        if (!/^[0-9]{10}$/.test(contactno)) {
            alert("Contact number must be 10 digits");
            return false;
        }

        if (username.length < 4) {
            alert("Username must be at least 4 characters");
            return false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return false;
        }

        if (password !== comfirmpassword) {
            alert("Passwords do not match");
            return false;
        }

        return true;
    };

    const loginValidation = () => {
        if (!username || !password) {
            alert("All fields are required");
            return false;
        }
        return true;
    };

   
    const registration = async (e) => {
        e.preventDefault();

        if (!registerValidation()) return;

        setloading(true);

        try {
           
            const empResponse = await axios.get(`http://localhost:8080/getempbyid?empid=${empid}`);

            if (!empResponse.data || Object.keys(empResponse.data).length === 0) {
                alert("Enter valid empid");
                setloading(false);
                return;
            }

            
            const user = {
                firstname,
                lastname,
                email,
                username,
                password,
                comfirmpassword,
                role,
                contactno,
                empid,
                gender
            };

            const response = await axios.post(`http://localhost:8080/register`, user);

            if (response.data === "Registration successfully") {
                alert("Registration successful");

                // Reset form
                setfirstname("");
                setlastname("");
                setemail("");
                setusername("");
                setpassword("");
                setcomfirmpassword("");
                setrole("");
                setcontactno("");
                setempid("");
                setgender("");

                setisregistration(true);
            } else {
                alert(response.data);
            }

        } catch (error) {
            console.error(error);
            alert("Server error during registration");
        }

        setloading(false);
    };

    let login = (event) => {
        event.preventDefault();
        let userdetails = { username, password };
        axios.post(`http://localhost:8080/login`, userdetails)
            .then((response) => {
                if (response.data) {
                    let user = response.data;
                    console.log(user);
                    alert("Welcome " + user.username);
                    localStorage.setItem("userinfo", JSON.stringify(response.data))
                    localStorage.setItem("isloggedin", "true")

                    if (user.role.toLowerCase() === "admin") {
                        navigate("/admindashboard");
                    }
                    else {
                        navigate("/employeedashboard");
                    }
                }
            })
            .catch((error) => {

                alert("invalid username password");
            })
    }
   
    
    return (
        <div className="container mt-5">

            {isregistration ? (
                <form onSubmit={login} className='card p-4 shadow d-flex flex-column align-items-center gap-3'>
                    <h2>User Login</h2>

                    <input
                        type='text'
                        placeholder='Username'
                        className='form-control w-50'
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />

                    <input
                        type='password'
                        placeholder='Password'
                        className='form-control w-50'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    <div className='d-flex gap-2'>
                        <button className='btn btn-primary' disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => setisregistration(false)}
                        >
                            New User? Register
                        </button>
                    </div>
                </form>
            ) : (
                <form onSubmit={registration} className='card p-4 shadow d-flex flex-column gap-3'>
                    <h2>User Registration</h2>

                    <div className='row'>
                        <div className='col'>
                            <label>First Name</label>
                            <input type='text' className='form-control'
                                value={firstname}
                                onChange={(e) => setfirstname(e.target.value)} />
                        </div>

                        <div className='col'>
                            <label>Last Name</label>
                            <input type='text' className='form-control'
                                value={lastname}
                                onChange={(e) => setlastname(e.target.value)} />
                        </div>

                        <div className='col'>
                            <label>Email</label>
                            <input type='email' className='form-control'
                                value={email}
                                onChange={(e) => setemail(e.target.value)} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <label>Username</label>
                            <input type='text' className='form-control'
                                value={username}
                                onChange={(e) => setusername(e.target.value)} />
                        </div>

                        <div className='col'>
                            <label>Password</label>
                            <input type='password' className='form-control'
                                value={password}
                                onChange={(e) => setpassword(e.target.value)} />
                        </div>

                        <div className='col'>
                            <label>Confirm Password</label>
                            <input type='password' className='form-control'
                                value={comfirmpassword}
                                onChange={(e) => setcomfirmpassword(e.target.value)} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <label>Role</label>
                            <select className='form-control'
                                value={role}
                                onChange={(e) => setrole(e.target.value)}>
                                <option value="">Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>

                        <div className='col'>
                            <label>Contact Number</label>
                            <input type='text' maxLength="10" className='form-control'
                                value={contactno}
                                onChange={(e) => setcontactno(e.target.value)} />
                        </div>

                        <div className='col'>
                            <label>Emp ID</label>
                            <input type='number' className='form-control'
                                value={empid}
                                onChange={(e) => setempid(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label>Gender :</label>

                        <input type="radio" name="gender" value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setgender(e.target.value)} /> Male

                        <input type="radio" name="gender" value="Female"
                            className="ms-3"
                            checked={gender === "Female"}
                            onChange={(e) => setgender(e.target.value)} /> Female
                    </div>

                    <div className='d-flex gap-2'>
                        <button type="submit" className='btn btn-success' disabled={loading}>
                            {loading ? "Registering..." : "Register"}
                        </button>

                        <button
                            type="button"
                            className='btn btn-secondary'
                            onClick={() => setisregistration(true)}
                        >
                            Already Registered? Login
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}