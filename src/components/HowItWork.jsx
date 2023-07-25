import work1 from '../../public/img/webp/work1.webp'
import work2 from '../../public/img/webp/work2.webp'
import work3 from '../../public/img/webp/work3.webp'
import work4 from '../../public/img/webp/work4.webp'
import arrowBot from '../../public/img/webp/arrowBot.webp'

const HowItWork = () => {
    return ( 
        <div className="mt-24 md:mt-40">
            <div className="text-center text-white">
                <h2 className="relative z-20 text-4xl font-bold">How it works</h2>
            </div>
            <div className="mt-12 text-center md:mt-28 md:flex md:items-center md:mx-12">
                <IconWork img={work1}>Set up your wallet</IconWork>
                <img src={arrowBot} alt="arrow" className='mx-auto my-7 md:-rotate-90 md:-mt-5'/>
                <IconWork img={work2}>Create your collection</IconWork>
                <img src={arrowBot} alt="arrow" className='mx-auto my-7 md:-rotate-90 md:-mt-5'/>
                <IconWork img={work3}>Add your NFTs</IconWork>
                <img src={arrowBot} alt="arrow" className='mx-auto my-7 md:-rotate-90 md:-mt-5'/>
                <IconWork img={work4}>List them for sale</IconWork>
            </div>
        </div>
     );
}

const IconWork = ({img, children}) => {
    return ( 
        <div className="text-center">
            <div className="bg-[#372839] w-14 h-14 mx-auto flex hover:scale-110 transition-all justify-center rounded-full items-center mb-5">
                <img src={img} alt="icon" className='w-9 h-9'/>
            </div>
            <span className='text-2xl font-bold text-amber-400'>{children}</span>
        </div>
     );
}
 
export default HowItWork;