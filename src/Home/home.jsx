import "./home.css"
import { Link } from "react-scroll"
import bg from "../assets/Wallpaper.png";

const Home = () => {
    return (
        <section id="home">

                <div className="homeContent">
                    <span className="introHighlight">Mount Allison Open 2025</span>
                    <p className="introPara">
                        Come join our annual CFC rated tournament!
                    </p>
                    <Link>
                        <button className="btn">Learn More</button>
                    </Link>
                </div>
        </section>
    );
};

export default Home;