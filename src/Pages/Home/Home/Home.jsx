import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* banner section */}
            <Banner></Banner>
            {/* about us */}
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;