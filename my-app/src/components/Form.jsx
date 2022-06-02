import React from "react";
import axios from 'axios';
import "./css/Form.css";
// import userEvent from "@testing-library/user-event";

function Form() {

    const [error, setError] = React.useState("");
    const [formValue, setformValue] = React.useState({
        userName: '',
        email: '',
        dateOfBirth: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("userName", formValue.userName)
        loginFormData.append("email", formValue.email)
        loginFormData.append("dateOfBirth", formValue.dateOfBirth)
        loginFormData.append("password", formValue.password)

        e.preventDefault();

        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/user/save-user",
                data: loginFormData
            });
            alert("user created succesfully")
        } catch (error) {
            setError(error.response.data)
            console.log(error)
            alert(error.response.data)
        }
    }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }


    return (
        <div col-lg-6 col-md-6 col-sm-12>
            <h2>Pre-apply for an Account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        class="userName"
                        name="userName"
                        onChange={handleChange}
                        type="text"
                        value={formValue.userName}
                        maxLength={20}
                        required="true"
                    />
                </label>
                <br></br>
                <label>
                    E-mail:
                    <input
                        class="email"
                        name="email"
                        onChange={handleChange}
                        type="email"
                        value={formValue.email}
                        required="true"
                    />
                </label>
                <br></br>
                <label>
                    Date of Birth:
                    <input
                        class="dateOfBirth"
                        name="dateOfBirth"
                        onChange={handleChange}
                        type="date"
                        value={formValue.dateOfBirth}
                        required="true"
                    />
                </label>
                <br></br>
                <label>
                    Password:
                    <input
                        class="password"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={formValue.password}
                        minLength="8"
                    />
                </label>
                <br></br>
                <label>
                    Repeat Password:
                    <input
                        onChange={handleChange}
                        type="password"
                        // value={}
                        minLength="8"
                    />
                </label>
                <br></br>
                {/* <div style={{ color: "red" }}>{error}</div> */}
                <button
                    type="submit"
                >
                    Apply
                </button>
            </form>
            <div col-lg-6 col-md-6 col-sm-6>
                <h1>Pre-apply Benefits</h1>
                <p id="p2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
}

export default Form;

