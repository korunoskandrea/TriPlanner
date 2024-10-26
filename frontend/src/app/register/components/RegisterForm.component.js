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
        <form onSubmit={handleRegister} className="register-form">
            <h2>Register</h2>
            <InputField
                label="Name"
                type="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <InputField
                label="Lastname"
                type="lastname"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
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
            <InputField
                label="Birthday"
                type="birthday"
                value={birthday}
                onChange={(event) => setBirthday(event.target.value)}
            />
            <AuthSubmitBtnComponent label="Register"/>
        </form>
    )

}