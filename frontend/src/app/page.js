import Navbar from "@/app/common/components/Navbar.component";
import RotatingGlobeComponent from "@/app/common/components/RotatingGlobe.component";

export default function HomePage() {
    return (
        <div>
            <Navbar/>
            <h1>Welcome To TriPlanner!</h1>
            <h3>Lets plan your next trip</h3>
            <RotatingGlobeComponent/>
        </div>

    );
}