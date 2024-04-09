

import '../src/assets/images/e1.jpg'
import '../src/assets/images/e2.jpg'
import '../src/assets/images/e3.jfif'
import '../src/assets/images/e4.webp'
import '../src/assets/images/e5.jpg'
import '../src/assets/images/e6.jpg'
import '../src/assets/images/e7.webp'
import '../src/assets/images/e8.webp'

const Estate = () => {
    return (
        <div className=" mt-10 mb-10 mr-5 ml-5">
             <div className=" text-center">
                  <h1 className=" text-6xl font-bold">Our Real EState Projects</h1>
                  <p className=" mt-5 text-xl text-slate-400">“Time is more valuable than money. You can get more money, but you cannot get more time.”</p>

             </div>
             <div className=' flex justify-center items-center'>
             <div id='hover' className=' mt-10 mb-10 grid  md:grid-cols-4 gap-5'>

              <img className=' h-[200px] w-[300px] rounded-2xl' src='../src/assets/images/e1.jpg' alt="" />
              <img className=' h-[200px] w-[300px] rounded-2xl' src= '../src/assets/images/e2.jpg'alt="" />
              <img className=' h-[200px] w-[300px] rounded-2xl' src='../src/assets/images/e3.jfif' alt="" />
              <img className=' h-[200px] w-[300px] rounded-2xl' src='../src/assets/images/e4.webp' alt="" />
              <img className=' h-[200px] w-[300px] rounded-2xl' src='../src/assets/images/e5.jpg' alt="" />
              <img className=' h-[200px] w-[300px] rounded-2xl' src='../src/assets/images/e6.jpg' alt="" />
              <img className=' h-[200px] w-[300px] rounded-2xl' src='../src/assets/images/e7.webp' alt="" />
              <img className=' h-[200px] w-[300px] rounded-2xl' src='../src/assets/images/e8.webp' alt="" />
           
              


             </div>
             </div>

            
        </div>
    );
};

export default Estate;