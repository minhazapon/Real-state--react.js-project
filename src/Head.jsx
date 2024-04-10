
import '../src/assets/images/logo.png'

import Marquee from "react-fast-marquee";




const Head = () => {
    return (
        <div>
            
              <div className=' mt-10 flex justify-center items-center gap-3 '>

                  <img className=' h-[70px]' src='../src/assets/images/logo.png' alt="" />

                    <h1 className=" text-4xl font-bold "> 
                    <span className=" text-blue-500"> Apon</span>

                     <span className=" text-yellow-600"> Real EState</span></h1>
             </div>

             <div className=' mt-10 flex justify-center ml-10 mr-10 rounded-2xl'>
                
               <Marquee>
               <p className=' text-3xl'>“Owning a home is a keystone of wealth…both financial affluence and emotional security.”</p>

               </Marquee>


             </div>
     
             <hr className=' mt-10'></hr>



            
        </div>
    );
};

export default Head;