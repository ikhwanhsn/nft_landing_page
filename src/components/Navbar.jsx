import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../public/img/webp/logo.webp';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FaWindowClose} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [isClose, setIsClose] = useState(true);

    return ( 
        <div className="flex items-center justify-between md:px-12 py-2 bg-[#16091B] fixed top-0 w-screen shadow-sm shadow-[#16091B]">
            <div className="ml-3 md:ml-0">
                <a href="/">
                    <img src={logo} alt="logo" className='scale-[.75] hover:scale-[.85] transition-all'/>
                </a>
            </div>
            <div className="mr-5 md:mr-0 md:hidden" onClick={() => setIsClose(false)}>
                <FontAwesomeIcon icon={faBars} className='scale-150 text-amber-400'/>
            </div>
            <div className="items-center hidden gap-24 mr-12 text-white md:mr-5 md:flex">
                <ul className='flex gap-12 text-lg'>
                    <a href="#popular">
                        <li className='transition-all cursor-pointer hover:text-gray-300'>Explore</li>
                    </a>
                    <a href="#creator">
                        <li className='transition-all cursor-pointer hover:text-gray-300'>Creators</li>
                    </a>
                    <a href="#community">
                        <li className='transition-all cursor-pointer hover:text-gray-300'>Community</li>
                    </a>
                </ul>
                <button className='py-2 text-amber-400 border bg-[#594846] border-amber-400 px-7 hover:bg-amber-400 hover:text-black'>Connect Wallet</button>
            </div>
            <div className={`absolute flex flex-col justify-center w-full h-full text-white text-center bg-[#3D2942] pt-36 pb-32 text-lg leading-loose md:hidden ${isClose?'-top-80':'top-0'} transition-all ease-in-out duration-500`}>
                <FaWindowClose className='absolute z-40 text-white top-5 right-5' size='1.5rem' onClick={() => setIsClose(true)}/>
                <ul className='text-lg leading-loose '>
                    <a href="#popular" className='transition-all cursor-pointer'>
                        <li>Explore</li>
                    </a>
                    <a href="#creator">
                        <li className='transition-all cursor-pointer hover:text-gray-300'>Creators</li>
                    </a>
                    <a href="#community">
                        <li className='transition-all cursor-pointer hover:text-gray-300'>Community</li>
                    </a>
                </ul>
                <button className='py-1 mt-1 text-amber-400 border bg-[#594846] border-amber-400 hover:bg-amber-400 hover:text-black mx-24'>Connect Wallet</button>
            </div>
        </div>
     );
}
 
export default Navbar;