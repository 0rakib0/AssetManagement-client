import { useContext } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Package from "../Package/Package";
import { authContext } from "../../../Provider/AuthProvider/AuthProvider";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* banner section */}
            <Banner></Banner>
            {/* about us */}
            <AboutUs></AboutUs>
            {/* package section */}
            <Package></Package>
        </div>
    );
};

export default Home;