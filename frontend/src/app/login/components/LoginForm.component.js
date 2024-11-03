"use client";
import { useState } from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";
import { useRouter } from "next/navigation";

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await onSubmit({
                email,
                password
            });

            router.push("/trip/plan");
        } catch (err) {
            setError('An unexpected error occurred. User does not exist or there are incorrect password and email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
            <h2>Log In</h2>
            {error && <div className="error-message">{error}</div>}
            <div>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <AuthSubmitBtnComponent label={loading ? "Logging in..." : "Log in"} onClick={handleLogin} disabled={loading} />
        </form>
    );
}
