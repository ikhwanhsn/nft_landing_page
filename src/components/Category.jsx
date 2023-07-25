import { useState } from 'react';
import popular1 from '../../public/img/webp/popular1.webp'
import popular2 from '../../public/img/webp/popular2.webp'
import profil3 from '../../public/img/webp/profil3.webp'

const Category = () => {
    return ( 
        <div className="mt-24 bg-[#251928] py-12">
            <div className="relative text-center text-white">
                <div className="bg-[#8613A5] w-14 h-14 absolute rounded-full left-24 md:left-96 md:ml-12 ml-2 -top-2 z-10"></div>
                <h2 className="relative z-20 mx-5 text-4xl font-bold">Explore By Categories</h2>
            </div>
            <div className="flex flex-col gap-3 mx-5 mt-12 text-white md:flex-row md:mx-12 md:mt-14">
                <CardCategories image={popular1}/>
                <CardCategories image={popular2}/>
                <CardCategories image={popular1}/>
            </div>
            <div className="mt-8 text-center text-white">
                <button className="px-16 py-3 font-bold border border-amber-400 hover:bg-amber-400 hover:text-black">View All</button>
            </div>
        </div>
     );
}

const CardCategories = ({image}) => {
    const [isLike, setIsLike] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return ( 
        <div className={`bg-[#3D2942] p-5 w-full rounded-sm`}>
            <div className="relative flex items-center justify-center" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <img src={image} alt="card" className="rounded-sm"/>
                <div className={`absolute z-20 ${isHover?'opacity-100':'opacity-0'} transition-all`}>
                    <button className="py-3 font-bold text-black w-44 bg-amber-400 hover:bg-amber-500">Place a bid</button>
                </div>
                <div className={`absolute transition-all z-10 w-full h-full bg-black ${isHover?'opacity-50':'opacity-0'}`}></div>
            </div>
            <div className="flex items-center justify-between w-full mt-4">
                <div className="flex items-center gap-3">
                    <img src={profil3} alt="profil" className='w-14'/>
                    <div className="leading-tight">
                        <h3 className="text-lg font-bold">Virtual Art</h3>
                        <span>by @wizard</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,${isLike?1:0},0`} />
                    <span className="material-symbols-outlined" onClick={() => !isLike?setIsLike(true):setIsLike(false)}>favorite</span>
                    <span>92</span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-5">
                <span>Current Bid</span>
                <span className="text-lg font-bold">4.89 ETH</span>
            </div>
        </div>
     );
}
 
export default Category;