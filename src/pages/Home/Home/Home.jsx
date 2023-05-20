import Banner from "../Banner/Banner";
import SectionOne from "../Section/SectionOne";
import SectionTwo from "../Section/SectionTwo";
import GacTabs from "../Tabs/GacTabs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GacTabs></GacTabs>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;