import { faArrowLeft, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgLive1 from '../../public/img/webp/imgLive1.webp';
import imgLive2 from '../../public/img/webp/imgLive2.webp';
import imgLive3 from '../../public/img/webp/imgLive3.webp';
import profil1 from '../../public/img/webp/profil1.webp';
import { useState } from "react";

const LiveAuction = () => {
    return ( 
        <div className="relative h-full mt-24 text-center text-white bg-[#251928] py-12 md:pt-24" id="live">
            <div className="relative">
                <div className="bg-[#8613A5] w-14 h-14 absolute rounded-full left-16 md:left-80 md:ml-44 ml-2 -top-2 z-10"></div>
                <h2 className="relative z-20 text-4xl font-bold">Live Auctions</h2>
            </div>
            <div className="absolute hidden gap-3 scale-125 md:flex right-14 top-40">
                <div className="w-6 h-6 text-black transition-all bg-white rounded-full cursor-pointer hover:bg-gray-300">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="w-6 h-6 text-black transition-all bg-white rounded-full cursor-pointer hover:bg-gray-300">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <div className="flex flex-col w-screen gap-3 px-5 mt-12 md:mt-16 md:px-12 md:flex-row md:w-full">
                <CardLive image={imgLive3}/>
                <CardLive image={imgLive2}/>
                <CardLive image={imgLive1}/>
            </div>
            <div className="mt-8">
                <button className="px-16 py-3 font-bold border border-amber-400 hover:bg-amber-400 hover:text-black">View All</button>
            </div>
        </div>
     );
}

const CardLive = ({image}) => {
    // const [isLike, setIsLike] = useState(false);

    return ( 
        <div className=" bg-[#3D2942] p-5 w-full rounded-sm md:w-96">
            <div className="relative">
                <img src={image} alt="card" className="rounded-sm md:h-80"/>
                <span className="absolute bottom-0 left-0 px-5 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">03:18:24</span>
            </div>
            <div className="flex items-center justify-between w-full mt-4">
                <div className="flex items-center gap-3">
                    <img src={profil1} alt="profil" />
                    <div className="leading-tight">
                        <h3 className="text-lg font-bold">Virtual Art</h3>
                        <span>by @wizard</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0`} />
                    <span className=" material-symbols-outlined">favorite</span>
                    <span>92</span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-5">
                <span>Current Bid</span>
                <span className="text-lg font-bold">4.89 ETH</span>
            </div>
            <div className="mt-3">
                <button className="w-full py-3 font-bold border hover:bg-amber-400 hover:text-black">Place a bid</button>
            </div>
        </div>
     );
}
 
export default LiveAuction;