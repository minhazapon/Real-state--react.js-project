import { useEffect } from "react";
import { useState } from "react";
import StateInfo from "./StateInfo";

import Marquee from "react-fast-marquee";


const EstateSection = () => {
    

  const [build, setBuild] = useState([])

  useEffect( () => {

    fetch('estate.json')
    .then( res => res.json())
    .then(data => setBuild(data));
  } , [])




    return (
        <div className=" mt-10 mb-10">

            <div className=" bg-slate-200 p-5">
                   
               <Marquee>
               <h1 className=" text-6xl font-bold text-blue-500  text-center  ">Section properties</h1>

               </Marquee>


            </div>
            

            <div className=" flex justify-center">
            <div className=" mb-10 mt-10 grid grid-cols-3 gap-5"  > 



             {
                build.map( build => <StateInfo key={build.id} build={build} ></StateInfo> )


             }

            </div>

            </div>
        </div>
    );
};

export default EstateSection;