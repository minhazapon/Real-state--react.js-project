
import { Link } from 'react-router-dom'
import '../src/assets/images/p1.jpg'

import '../src/assets/images/p2.webp'

import '../src/assets/images/p3.webp'

import '../src/assets/images/p4.jpg'

import '../src/assets/images/p5.jpg'

import '../src/assets/images/p6.jpg'

import Marquee from "react-fast-marquee";



const Properties = () => {
    return (
        <div className=" ml-10 mt-24 mr-10 mb-10 ">
              

              <div className=' mb-16'>
                 <h1 className=' text-8xl font-semibold'>Properties For Rent</h1>


              </div>

              <Marquee>

              
              <div className=' bg-violet-100  p-4 rounded-xl'>
              <div  className=" flex justify-center bg-no-repeat bg-contain h-[200px] w-[400px] rounded-xl"  style={{backgroundImage: 'url(../src/assets/images/p1.jpg)'}}   >

                   <div className=" text-black bg-slate-100 opacity-75 p-2 rounded-2xl mb-2 mt-32">
                   <h1 className=" text-xl font-bold">Price: $30000</h1>
                   <p className=" text-xl font-bold" >the Duplex house for sale</p>
                   </div>
              </div>
              </div>

               <div  className=' bg-violet-100 p-4 rounded-xl' >
               <div  className=" flex justify-center bg-no-repeat bg-contain h-[200px] w-[400px] rounded-xl"  style={{backgroundImage: 'url(../src/assets/images/p2.webp)'}}   >

                   <div className=" text-black bg-slate-100 opacity-75 p-2 rounded-2xl mb-2 mt-32">
                   <h1 className=" text-xl font-bold">Price: $40000</h1>
                   <p className=" text-xl font-bold" >the Duplex house for sale</p>
                   </div>
              </div>
              </div>
                

                <div  className=' bg-violet-100 p-4 rounded-xl'  >
               <div  className=" flex justify-center bg-no-repeat bg-contain h-[200px] w-[400px] rounded-xl"  style={{backgroundImage: 'url(../src/assets/images/p3.webp)'}}   >

                   <div className=" text-black bg-slate-100 opacity-75 p-2 rounded-2xl mb-2 mt-32">
                   <h1 className=" text-xl font-bold">Price: $50000</h1>
                   <p className=" text-xl font-bold" >the Duplex house for sale</p>
                   </div>
              </div>
              </div>

               <div  className=' bg-violet-100  p-4 rounded-xl' >
               <div  className=" flex justify-center bg-no-repeat bg-contain h-[200px] w-[400px] rounded-xl"  style={{backgroundImage: 'url(../src/assets/images/p4.jpg)'}}   >

                   <div className=" text-black bg-slate-100 opacity-75 p-2 rounded-2xl mb-2 mt-32 -ml-20 w-[280px]">
                   <h1 className=" text-xl font-bold">Price: $60000</h1>
                   <p className=" text-xl font-bold" >the Duplex house for sale</p>
                   </div>
              </div>
              </div>


               <div  className=' bg-violet-100 p-4 rounded-xl'  >
               <div  className=" flex justify-center bg-no-repeat bg-contain h-[200px] w-[400px] rounded-xl"  style={{backgroundImage: 'url(../src/assets/images/p5.jpg)'}}   >

                   <div className=" text-black bg-slate-100 opacity-75 p-2 rounded-2xl mb-2 mt-32">
                   <h1 className=" text-xl font-bold">Price: $70000</h1>
                   <p className=" text-xl font-bold" >the Duplex house for sale</p>
                   </div>
              </div>
              </div>

                <div   className=' bg-violet-100 p-4 rounded-xl' >
               <div  className=" flex justify-center bg-no-repeat bg-contain h-[200px] w-[350px] rounded-xl"  style={{backgroundImage: 'url(../src/assets/images/p6.jpg)'}}   >

                   <div className=" text-black bg-slate-100 opacity-75 h-[70px] p-2 rounded-2xl mb-2 mt-16">
                   <h1 className=" text-xl font-bold">Price: $20000</h1>
                   <p className=" text-xl font-bold" >the Duplex house for sale</p>
                   </div>
              </div>
              </div>

              </Marquee>

              <div>
                 <Link to="/Details"  >
                 
                 <button className=' mt-10 btn text-xl bg-blue-500 text-white'>view more</button>

                 </Link>

              </div>
 

            
        </div>
    );
};

export default Properties;