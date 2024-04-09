

import '../src/assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className=" ml-5 mr-5 mb-10 mt-10">
             
             <div>



             <div className="hero h-[550px]" style={{backgroundImage: 'url(../src/assets/images/banner.jpg)'}}>
             <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content">
               <div className="">
                 <h1 className="mb-5 text-5xl font-bold text-white">Easy Way to Find a <br></br> Perfect Property</h1>
                 <p className="mb-5 text-xl text-white">“Owning a home is a keystone of wealth…both financial affluence and emotional security.”

                </p>

                 <div className=' flex items-center gap-3'>

                 <input className=' p-2 w-[400px] h-[50px] rounded-2xl border-[1px] border-blue-700' type="email" name="" id="" placeholder='Enter a valid email address' />
           
                 <input className="btn  bg-blue-600 w-[150px] text-white text-xl" type="submit" value="Submit" />

                 </div>
               </div>
             </div>
           </div>






















             </div>
            
        </div>
    );
};

export default Banner;