

import '../src/assets/images/s1.webp'
import '../src/assets/images/s2.webp'
import '../src/assets/images/s3.png'
import '../src/assets/images/s4.jpg'
import '../src/assets/images/s5.jpeg'
import '../src/assets/images/s6.webp'
import '../src/assets/images/s7.png'
import '../src/assets/images/s8.webp'



const Slider = () => {
    return (
        <div className=" mb-10 mt-10 ml-5  mr-5">

            <div>

        
                    <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src='../src/assets/images/s1.webp' className="w-full h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src='../src/assets/images/s2.webp'className="w-full h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src='../src/assets/images/s3.png' className="w-full h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div> 

          <div id="slide4" className="carousel-item relative w-full">
            <img src='../src/assets/images/s4.jpg' className="w-full h-[500px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        
         </div>
            
        </div>
    );
};

export default Slider;