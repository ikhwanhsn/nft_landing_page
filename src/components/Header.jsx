import coinbase from '../../public/img/webp/coinbase.webp';
import blockchain from '../../public/img/webp/blockchain.webp';
import binance from '../../public/img/webp/binance.webp';
import bitmex from '../../public/img/webp/bitmex.webp';
import hero from '../../public/img/webp/heroImage.webp';
import bgBlur from '../../public/img/webp/bgBlurHeader.webp';
import {FaArrowDown} from 'react-icons/fa';

const Header = () => {
    return ( 
        <div className="relative">
            <DescExplore/>
            <img src={bgBlur} alt="background" className='absolute z-10 w-full md:w-1/2 md:h-[34rem] h-[34rem] mt-14 top-80 md:top-0 md:right-0'/>
            <ImageDemo/>
            <DataHistory/>
            <a href="#live" className=' scroll-smooth'>
                <div className="z-30 hidden cursor-pointer hover:bg-[#886692] transition-all p-3 text-white ml-72 bg-[#6D5B72] rounded-full bottom-28 left-80 md:absolute md:block">
                <FaArrowDown/>
                </div>
            </a>
            <Sponsor/>
        </div>
     );
}

const ImageDemo = () => {
    return ( 
        <div className="relative z-20 mx-5 md:-mt-12 md:mr-12 md:float-right md:scale-[.65]">
            <img src={hero} alt="image" />
        </div>
     );
}

const DescExplore = () => {
    return ( 
        <div className="relative z-20 text-center md:float-left md:w-[35rem]">
            <div className="pt-32 mx-3 text-5xl font-bold leading-tight md:pt-20 md:ml-12 md:text-left md:text-6xl md:leading-normal">
                <h1 className='text-white'>Explore, Buy and Sell the <span className="text-amber-400">Best NFTs!</span></h1>
            </div>
            <div className="flex justify-center gap-5 my-12 md:mt-7 md:justify-start md:ml-12">
                <button className='py-2 shadow-sm cursor-pointer px-7 bg-amber-400 hover:bg-amber-500'>Explore</button>
                <button className='py-2 text-white border bg-[#594846] border-amber-400 px-7 hover:bg-amber-400 hover:text-black cursor-pointer'>Create</button>
            </div>
        </div>
     );
}

const DataHistory = () => {
    return (     
        <div className="flex justify-center gap-8 my-12 mt-20 text-white md:mt-0 md:float-left md:text-2xl md:ml-12 md:gap-12">
            <div className="leading-tight text-center">
                <h2 className='text-2xl font-bold md:text-4xl'>32k+</h2>
                <p>Artworks</p>
            </div>
            <div className="leading-tight text-center">
                <h2 className='text-2xl font-bold md:text-4xl'>20k+</h2>
                <p>Auctions</p>
            </div>
            <div className="leading-tight text-center">
                <h2 className='text-2xl font-bold md:text-4xl'>12k+</h2>
                <p>Creators</p>
            </div>
        </div>
     );
}

const Sponsor = () => {
    return ( 
        <div className="grid items-center grid-cols-2 mx-5 mt-24 md:mx-24 md:flex md:justify-between gap-y-5 md:clear-both">
            <img src={coinbase} alt="coinbase" className='scale-75'/>
            <img src={blockchain} alt="blockchain"  className='scale-115'/>
            <img src={binance} alt="binance"  className='scale-75'/>
            <img src={bitmex} alt="bitmex"  className='scale-50'/>
        </div>
     );
}
 
export default Header;