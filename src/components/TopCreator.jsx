import profil2 from '../../public/img/webp/profil2.webp';
import profil1 from '../../public/img/webp/profil1.webp';
import profil3 from '../../public/img/webp/profil3.webp';
import profil4 from '../../public/img/webp/profil4.webp';
import pattern from '../../public/img/webp/patternCreator.webp';

const TopCreator = () => {
    return ( 
        <div className="relative pt-20 mt-12 text-white md:pt-28 md:mt-5" id='creator'>
            <img src={pattern} alt="background" className='absolute z-10 w-full -top-12 md:hidden'/>
            <div className="relative z-20 text-center text-white">
                <div className="bg-[#E03054] w-14 h-14 absolute rounded-full md:left-96 md:ml-32 left-16 ml-4 -top-2 z-10"></div>
                <h2 className="relative z-20 text-4xl font-bold">Top Creators</h2>
            </div>
            <div className="relative z-20 flex flex-col gap-3 mx-5 mt-12 md:grid md:grid-cols-2 md:mx-12 md:gap-5">
                <CreatorCard src={profil1} creator={'Wizard'} amount={'9.76 ETH'} item={'72'}/>
                <CreatorCard src={profil2} creator={'Alex'} amount={'8.53 ETH'} item={'71'}/>
                <CreatorCard src={profil3} creator={'Coboy'} amount={'8.44 ETH'} item={'52'}/>
                <CreatorCard src={profil4} creator={'Max'} amount={'4.89 ETH'} item={'31'}/>
            </div>
            <div className="mt-8 text-center text-white">
                <button className="px-16 py-3 font-bold border border-amber-400 hover:bg-amber-400 hover:text-black">View All</button>
            </div>
        </div>
     );
}

const CreatorCard = ({src, creator, amount, item}) => {
    return ( 
        <div className="flex bg-[#49374E] w-full justify-between p-5 items-center border-l-4 border-[#E03054]">
            <div className="flex items-center gap-3">
                <div className="">
                    <img src={src} alt="profil" width='64px'/>
                </div>
                <div className="">
                    <h3 className='font-bold leading-tight'>{creator}</h3>
                    <span>{amount}</span>
                </div>
            </div>
            <div className="pl-5 border-l-2">
                <div className="leading-tight text-center">
                    <h3 className='text-xl font-bold'>{item}</h3>
                    <span>Items</span>
                </div>
            </div>
        </div>
     );
}
 
export default TopCreator;
