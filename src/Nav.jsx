import {  Link, NavLink } from "react-router-dom";


const Nav = () => {

    const links = <>
    
         <li className=" text-xl"><NavLink to="/" >Home</NavLink></li>
         <li className=" text-xl" ><NavLink to="/Estate" >Estate Section</NavLink></li>
         <li className=" text-xl" ><NavLink to="/Details" >Estate Details</NavLink></li>
       

        
     
    
    </>


    return (
        <div className=" ml-5 mr-5 mt-10">


               <div className="navbar bg-base-100">
                 <div className="navbar-start">
                   <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                     </div>
                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                       {links}

                     </ul>
                   </div>
                   <a className="btn btn-ghost text-xl"></a>
                 </div>
                 <div className="navbar-center hidden lg:flex">
                   <ul className="menu menu-horizontal px-1">
                       {links}
                   </ul>
                 </div>
                 
                 <div className="navbar-end">
                 <Link to="/login" >
                   <a className="btn w-[150px] bg-blue-600 text-xl text-white">login</a>
                   </Link>
                 </div>
                
              
               </div>

               <hr   className=" mb-5 mt-5"></hr>
                           
        </div>
    );
};

export default Nav;