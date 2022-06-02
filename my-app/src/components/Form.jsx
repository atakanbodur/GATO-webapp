import React from "react";
import axios from 'axios';
// import userEvent from "@testing-library/user-event";

function Form() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [date, setDate] = useState("");
    // const [password, setPassword] = useState("");
    // const [rpassword, setRpassword] = useState("");

    const [formValue, setformValue] = React.useState({
        userName: '',
        email: '',
        dateOfBirth: '',
        password: ''
    });

    const handleSubmit = async() => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("username", formValue.userName)
        loginFormData.append("email", formValue.email)
        loginFormData.append("dateOfBirth", formValue.dateOfBirth)
        loginFormData.append("password", formValue.password)
      
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "localhost:8080/user/save-user",
            data: loginFormData
          });
        } catch(error) {
          console.log(error)
        }
      }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    // function handleNameChange(event) {
    //     setName(event.target.value);
    // }

    // function handleEmailChange(event) {
    //     setEmail(event.target.value);
    // }

    // function handleDateChange(event) {
    //     setDate(event.target.value);
    // }

    // function handlePasswordChange(event) {
    //     setPassword(event.target.value);
    // }
    // function handleRpasswordChange(event) {
    //     setRpassword(event.target.value);
    // }

    return (
        <div>
            <h2>Pre-apply for an Account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
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
                <button
                    type="submit"
                >
                    Apply
                </button>
            </form>
        </div>
    );
}

export default Form;

