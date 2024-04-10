



const Banner = () => {
    return (
        <div className=" ml-5 mr-5 mb-10 mt-10">


          <div className=' grid  md:grid-cols-1'>
             
             <div  className=' flex md:flex-col lg:flex-row  '>



             <div className="hero h-[550px] " style={{backgroundImage: 'url(https://i.ibb.co/qm7ZXc8/banner.jpg)'}}>
             <div className="hero-overlay bg-opacity-60 flex md:flex-col lg:flex-row  "></div>
             <div className="hero-content  flex md:flex-col lg:flex-row">
               <div className="">
                 <h1 className="flex md:flex-col lg:flex-row mb-5 text-5xl font-bold text-white">Easy Way to Find a <br></br> Perfect Property</h1>
                 <p className="flex md:flex-col lg:flex-row  mb-5 text-xl text-white">“Owning a home is a keystone of wealth…both financial affluence and emotional security.”

                </p>

                 <div className=' flex items-center gap-3  flex md:flex-col lg:flex-row'>

                 <input className=' p-2 w-[400px] h-[50px] rounded-2xl border-[1px] border-blue-700' type="email" name="" id="" placeholder='Enter a valid email address' />
           
                 <input className="btn  bg-blue-600 w-[150px] text-white text-xl" type="submit" value="Submit" />

                 </div>
               </div>
             </div>
           </div>


             </div>


             </div>
            
        </div>
    );
};

export default Banner;