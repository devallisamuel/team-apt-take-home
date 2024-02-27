import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CBar from "assets/CBar.svg";
import EN from "assets/EN.svg";
import BannerImg from "assets/Banner-img.svg";

const Banner = function () {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mb-8 mt-[6rem] px-[2rem]">
      <div className="flex justify-between text-9xl">
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex justify-center mx--auto"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <img src={EN} alt="circular graph  ml-4" />
            <span>Analytics</span>
          </div>
          <div
            className="flex mt-4 "
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <p className="inline ">
              That
              <span className="inline text-[#ccc]"> helps </span>
              you
            </p>
          </div>
        </div>
        <div className="w-[30%]" data-aos="zoom-in-up">
          <img src={BannerImg} alt="Banner" className="w-full" />
        </div>
      </div>
      <div
        className="text-9xl flex mt-4 ml-auto"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <p className="ml-auto flex items-center ">
          shapes{" "}
          <span className="inline">
            {" "}
            <img
              src={CBar}
              alt="circular graph"
              className="mx-2 w-[50px] h-[50px] inline"
            />
          </span>{" "}
          the future
        </p>
      </div>
    </section>
  );
};

export default Banner;
