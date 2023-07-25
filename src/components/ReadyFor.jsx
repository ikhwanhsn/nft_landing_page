import pattern from '../../public/img/webp/patternReady.webp';

const ReadyFor = () => {
    return ( 
        <div className="relative pt-20 mt-12 text-center text-white md:mt-24 md:pt-24" id='community'>
            <img src={pattern} alt="background" className='absolute h-44 -top-2 md:w-full md:h-96 md:-top-24 md:z-10'/>
            <div className="">
                <h2 className="relative z-20 mx-12 text-4xl font-bold">Ready for Next NFT Drop?</h2>
            </div>
            <div className="relative z-20 flex flex-col gap-3 mt-12 md:gap-0 md:flex-row md:justify-between md:w-full md:px-12">
                <input type="email" name="email" id="email" className="p-3 mx-5 md:mx-0 md:w-full md:bg-[#251928] bg-transparent border border-amber-400" placeholder="info@gmail.com"/>
                <button className="py-3 mx-auto font-bold text-black w-44 bg-amber-400 hover:bg-amber-500">Subscribe</button>
            </div>
        </div>
     );
}
 
export default ReadyFor;