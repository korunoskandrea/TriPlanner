import {useEffect, useState} from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";
import {useRouter} from "next/navigation";
import {router} from "next/client";

export default function RegisterForm({onSubmit}) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        onSubmit({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            birthday: birthday
        });

        router.push("/login")

    }

    return (
        <form onSubmit={handleRegister} className="register-form">
            <h2>Register</h2>
            <div>
                <InputField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
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
            <div>
                <InputField
                    label="Birthday"
                    type="date"
                    value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                />
            </div>
            <AuthSubmitBtnComponent label={loading ? "Registering..." : "Register"} onClick={handleRegister}
                                    disabled={loading}/>
        </form>
    );
}
