import useTitle from "../../../Hooks/UseTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SectionOne from "../Section/SectionOne";
import SectionTwo from "../Section/SectionTwo";
import GacTabs from "../Tabs/GacTabs";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <GacTabs></GacTabs>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;