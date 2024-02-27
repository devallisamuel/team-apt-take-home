import intersection from "assets/intersection.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MidSection = function () {
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
        <p className="text-8xl">
          Maximize <span className="text-[#ccc]">efficiency </span>
        </p>
        <p className="text-8xl">with our intuitive</p>
      </div>
      <div
        className="flex justify-between"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <img src={intersection} alt="midsection" className="w-[20%]" />
      </div>
      <div className="p-[2rem]">
        <div className="bg-slate-400 w-full h-[1px]"></div>
      </div>

      <div
        className="flex justify-between p-[2rem]"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex justify-center gap-8">
          <button className="px-4 py-2 rounded-xl text-black bg-[#B1B1B1]">
            Request a demo
          </button>
          <button className="px-4 py-2 rounded-xl text-white bg-[#FE4A23]">
            Start for free
          </button>
        </div>
      </div>
    </>
  );
};

export default MidSection;
