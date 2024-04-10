
import { useEffect } from "react";
import { useState } from "react";
import DetailsInfo from "./DetailsInfo";


const EstateDetails = () => {

   const [details, setDetails] = useState([])

   useEffect( () => {
      fetch('estate.json')
      .then(res => res.json())
      .then(data => setDetails(data))
   }  , [])


 


    return (
        <div>

              <div className=" text-center  mb-10 mt-5">

                  <h1 className=" text-6xl font-bold">Our Estate Full Information</h1>

              </div>
            
            <div className=" mb-10 mt-10">

                 {
                    details.map( details => <DetailsInfo key={details.id} details={details}></DetailsInfo> )

                 }



            </div>


            
        </div>
    );
};

export default EstateDetails;