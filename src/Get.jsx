

const Get = () => {
    return (
        <div className=" mt-10 bg-slate-200 p-5">

             <div>
                 <h1 className=" text-6xl font-bold">Get Your Dream House</h1>
                 <p className=" mt-5 text-xl text-slate-400">“Time is more valuable than money. You can get more money, but you cannot get more time.”</p>

             </div>

             <div className=" flex items-center gap-7 mt-20 mb-10">
                <p className=" text-2xl font-bold"> Name: <input className=" p-2 h-[50px] w-[300px] rounded-2xl border-[1px] border-black" placeholder="Enter Your Name" type="text" /> </p>
                <p className=" text-2xl font-bold"> Email: <input  className=" p-2 h-[50px] w-[300px] rounded-2xl border-[1px] border-black" placeholder="Enter Your Email" type="email" name="Email" id="" /> </p>
                <input className=" btn bg-black text-xl text-white"  type="submit" value="Submit" />

             </div>

            
        </div>
    );
};

export default Get;