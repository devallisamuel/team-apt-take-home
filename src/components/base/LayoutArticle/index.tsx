import snip1 from "assets/snip1.svg";
import snip2 from "assets/snip2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const LayoutArticle = function () {
      useEffect(() => {
        AOS.init();
      }, []);
    return (
      <>
        <div
          className="px-[2rem] mb-6 mt-[4rem]"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <p className="text-8xl">We give you full</p>
          <p className="text-8xl">
            <span className="text-[#ccc]">control </span>over your data
          </p>
        </div>
        <div
          className="flex justify-center  items-center gap-[10px] px-[2rem] mt-[4rem]"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div className="p-4 bg-[#D9D9D9] rounded-xl ">
            <img src={snip1} alt="" className="mx-auto w-[300px]" />
            <h4 className="font-semibold text-center mt-8">
              Improved Customer Service
            </h4>
            <p className="text-center mt-4 w-[30ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              suscipit architecto obcaecati ea.
            </p>
          </div>
          <div className="p-4 bg-[#D9D9D9] rounded-xl ">
            <img src={snip2} alt="" className="mx-auto w-[300px]" />
            <h4 className="font-semibold text-center mt-8">
              Monitoring Key Indicators
            </h4>
            <p className="text-center mt-4 w-[30ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              suscipit architecto obcaecati ea.
            </p>
          </div>
        </div>
      </>
    );
}

export default LayoutArticle;