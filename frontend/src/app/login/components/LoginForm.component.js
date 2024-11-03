import {useState} from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";

export default function LoginForm({onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await onSubmit({
                email: email,
                password: password
            });

            if (response.error) {
                setError(response.error);
            }
        } catch (err) {
            setError('An unexpected error occurred. User does not exist or there are incorrect password and email.');
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form container mt-5 p-4 border rounded shadow-sm">
            <h2 className="mb-4 text-center">Log In</h2>
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
            <AuthSubmitBtnComponent label="Log in" className="btn btn-primary w-100"/>
        </form>

    );
}
