import popular1 from '../../public/img/webp/popular1.webp'
import popular2 from '../../public/img/webp/popular2.webp'
import profil2 from '../../public/img/webp/profil2.webp'

const PopularCollection = () => {
    return ( 
        <div className="pt-20 mt-12 md:mt-24 md:pt-20" id='popular'>
            <div className="relative text-center text-white">
                <div className="bg-[#E03054] w-14 h-14 absolute rounded-full md:left-80 md:ml-32 left-5 ml-2 -top-2 z-10"></div>
                <h2 className="relative z-20 text-4xl font-bold">Popular Collections</h2>
            </div>
            <div className="flex flex-col gap-3 mx-5 mt-12 text-white md:flex-row md:mx-12 md:mt-14">
                <CardPopular image={popular1}/>
                <CardPopular image={popular2}/>
                <CardPopular image={popular1}/>
            </div>
            <div className="mt-8 text-center text-white">
                <button className="px-16 py-3 font-bold border border-amber-400 hover:bg-amber-400 hover:text-black">View All</button>
            </div>
        </div>
     );
}

const CardPopular = ({image}) => {

    return ( 
        <div className=" bg-[#3D2942] p-5 w-full rounded-sm hover:scale-[1.02] transition-all cursor-pointer">
            <div className="relative">
                <img src={image} alt="card" className="rounded-sm"/>
            </div>
            <div className="flex items-center justify-between w-full mt-4">
                <div className="flex items-center gap-3">
                    <img src={profil2} alt="profil" className='w-14'/>
                    <div className="leading-tight">
                        <h3 className="text-lg font-bold">Virtual Art</h3>
                        <span>by @wizard</span>
                    </div>
                </div>
                <div className="">
                    <span>ERC-721</span>
                </div>
            </div>
        </div>
     );
}
 
export default PopularCollection;