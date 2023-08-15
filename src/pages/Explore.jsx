import Header from "../components/Header";
import LiveAuction from "../components/LiveAuction";
import Navbar from "../components/Navbar";
import pattern from '../../public/img/webp/patternHeader.webp';
import HowItWork from "../components/HowItWork";
import PopularCollection from "../components/PopularCollection";
import Category from "../components/Category";
import TopCreator from "../components/TopCreator";
import ReadyFor from "../components/ReadyFor";
import Footer from "../components/Footer";

const Explore = () => {
    return ( 
        <div className="scroll-smooth">
            <div className="fixed top-0 z-30">
                <Navbar/>
            </div>
            <div className="absolute top-0 z-10 w-full opacity-50 md:hidden">
                <img src={pattern} alt="" className="w-full"/>
            </div>
            <div className="relative z-20">
                <Header/>
            </div>
            <LiveAuction/>
            <HowItWork/>
            <PopularCollection/>
            <Category/>
            <TopCreator/>
            <ReadyFor/>
            <Footer/>
        </div>
     );
}
 
export default Explore;