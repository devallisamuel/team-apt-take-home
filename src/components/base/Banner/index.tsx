import CBar from "assets/CBar.svg";
import EN from "assets/EN.svg";
import BannerImg from "assets/Banner-img.svg";

const Banner = function () {
  return (
    <section className="mb-8 mt-[6rem] px-[2rem]">
      <div className="flex justify-between text-9xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center mx--auto">
            <img src={EN} alt="circular graph  ml-4" />
            <span>Analytics</span>
          </div>
          <div className="flex mt-4 ">
            <p className="inline ">
              That
              <span className="inline text-[#ccc]"> helps </span>
              you
            </p>
          </div>
        </div>
        <div className="w-[30%]">
          <img src={BannerImg} alt="Banner" className="w-full" />
        </div>
      </div>
      <div className="text-9xl flex mt-4 ml-auto">
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
