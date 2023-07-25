import logo from '../../public/img/webp/logoFooter.webp';
import {FaYoutube, FaTwitter, FaFacebook, FaGooglePlus} from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className="mt-24 text-[#96839B] bg-[#251928] md:flex md:items-start md:px-12 md:pb-12">
            <div className="text-center md:text-left md:flex md:basis-2/4 md:gap-5">
                <div className="pt-12">
                    <img src={logo} alt="logo" width='250px' className='mx-auto'/>
                </div>
                <div className="w-11/12 mx-auto mt-12 leading-loose">
                    <span className='text-lg '>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </span>
                    <div className="justify-center hidden gap-12 mt-12 mb-8 text-white md:justify-start md:flex md:ml-3 ">
                        <FaYoutube className='scale-[2.5] cursor-pointer hover:scale-[3] transition-all'/>
                        <FaTwitter className='scale-[2.5] cursor-pointer hover:scale-[3] transition-all'/>
                        <FaFacebook className='scale-[2.5] cursor-pointer hover:scale-[3] transition-all'/>
                        <FaGooglePlus className='scale-[2.5] cursor-pointer hover:scale-[3] transition-all'/>
                    </div>
                    <p className='hidden pb-3 md:block' >Created by <a href="" className='text-white hover:underline text-bold' target='_blank'>Ikhwan Dev</a> Design by <a href="https://www.figma.com/" target='_blank' className='text-white hover:underline text-bold'>Figma</a></p>
                </div>
            </div>
            <div className="float-left mt-12 ml-5 md:basis-1/4 md:justify-start md:pl-24">
                <h3 className='mb-3 text-lg font-bold text-white'>About Us</h3>
                <ul className='leading-loose'>
                    <a className='cursor-pointer hover:underline'>
                        <li>About NFTs</li>
                    </a>
                    <a className='cursor-pointer hover:underline'>
                        <li>Live Auctions</li>
                    </a>
                    <a className='cursor-pointer hover:underline'>
                        <li>NFT Blog</li>
                    </a>
                    <a className='cursor-pointer hover:underline'>
                        <li>Activity</li>
                    </a>
                </ul>
            </div>
            <div className="float-right mt-12 mb-12 mr-5 md:basis-1/4 md:justify-start md:pl-24">
            <h3 className='mb-3 text-lg font-bold text-white'>Support</h3>
                <ul className='leading-loose'>
                <a className='cursor-pointer hover:underline'>
                        <li>Help & Support</li>
                    </a>
                    <a className='cursor-pointer hover:underline'>
                        <li>Item Details</li>
                    </a>
                    <a className='cursor-pointer hover:underline'>
                        <li>Author Profile</li>
                    </a>
                    <a className='cursor-pointer hover:underline'>
                        <li>Collection</li>
                    </a>
                </ul>
            </div>
            <div className="clear-both md:hidden">
            <div className="w-11/12 mx-auto mt-24 leading-loose text-center">
                    <div className="flex justify-center gap-10 mt-12 mb-8 text-white">
                        <FaYoutube className='scale-[2] hover:scale-[2.5] transition-all'/>
                        <FaTwitter className='scale-[2] hover:scale-[2.5] transition-all'/>
                        <FaFacebook className='scale-[2] hover:scale-[2.5] transition-all'/>
                        <FaGooglePlus className='scale-[2] hover:scale-[2.5] transition-all'/>
                    </div>
                    <p className='block pb-3 md:hidden' >Created by <a href="" className='text-white hover:underline text-bold' target='_blank'>Ikhwan Dev</a> Design by <a href="https://www.figma.com/" target='_blank' className='text-white hover:underline text-bold'>Figma</a></p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;