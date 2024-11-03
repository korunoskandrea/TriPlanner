import LoginPage from "@/app/login/components/LoginPage.component";
import Navbar from "@/app/common/components/Navbar.component";

export default function Login() {
    return (
        <div className="login-page">
            <Navbar/>
            <LoginPage/>
        </div>
        );
}