

const DetailsInfo = ({details}) => {

   const {Image, estate_title, name, description, price, 
      
    Status, Area, location, facilities

         } = details


    return (
        <div>
            <div>



            <div className=" bg-base-200 border-[1px] border-blue-600 rounded-2xl mt-5 ml-5 mr-5  ">
              <div className="hero-content flex-col lg:flex-row">
                <img  src={Image} className=  "  h-[300px] w-[300px]  max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold ">{estate_title}</h1>

                  <p className="py-6  text-xl"> {description} </p>
                  <p  className=" text-xl font-bold"  >Name: {name}  </p>
                  <p  className=" text-xl font-bold"  >Area: {Area}  </p>
                  <p  className=" text-xl font-bold"  >location: {location}  </p>
                  <p  className=" text-xl font-bold"  >facilities: {facilities}  </p>

                 
                </div>
              </div>
            </div>



















            </div>
            
        </div>
    );
};

export default DetailsInfo;