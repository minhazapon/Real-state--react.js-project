import { Link } from "react-router-dom";

const StateInfo = ({build}) => {

    const {Image, estate_title, name, price} = build


    return (
        <div className=" ">


          <div className="card w-[400px] bg-base-100 shadow-xl border-[1px] border-blue-400  ">
            <figure className="px-10 pt-10">
              <img className=" h-[200px] w-[300px] rounded-xl" src={Image} alt="Shoes"  />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold"> {estate_title}  </h2>
              <p className=" text-2xl font-bold" > {name} </p>
              <p className=" text-2xl text-slate-400"> Price:  {price} </p>
              <div className="card-actions">

               <Link to="/Details"  >
               <button className="btn btn-primary w-[300px] text-xl text-white  ">View Properties</button>
               
               </Link>

               
              </div>
            </div>
          </div>
                      
        </div>
    );
};

export default StateInfo;