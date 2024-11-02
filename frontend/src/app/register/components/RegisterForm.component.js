import {useState} from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";

export default function RegisterForm({onSubmit}) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        onSubmit({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            birthday: birthday
        });
    }

    return (
        <form onSubmit={handleRegister} className="register-form container mt-5 p-4 border rounded shadow-sm" style={{ maxWidth: "500px" }}>
            <h2 className="mb-4 text-center">Register</h2>
            <div className="mb-3">
                <InputField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <InputField
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <InputField
                    label="Birthday"
                    type="date"
                    value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                    className="form-control"
                />
            </div>
            <AuthSubmitBtnComponent label="Register" className="btn btn-primary w-100" />
        </form>
    );
}