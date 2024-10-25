import {useState} from "react";
import InputField from "@/app/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/components/AuthSubmitBtn.component";

export default function LoginForm({onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
            <h2>Log In</h2>
            <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <AuthSubmitBtnComponent label="Log in"/>
        </form>
    )
}