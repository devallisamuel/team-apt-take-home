import whiteCard from "assets/white-card.svg";
import blackCard from "assets/black-card.svg";

const Hero = function () {
    return (
      <section className="px-[2rem] py-[4rem] mt-[10rem] bg-[#F6F6F6] rounded-3xl">
        <div className="flex justify-between">
          <div>
            <p className="text-5xl font-medium">Your key to strategic</p>
            <p className="text-5xl mt-2 font-medium">
              success through analytics
            </p>
          </div>
          <div>
            <p className="text-2xl">Ready for exciting instantaneous,</p>
            <p className="text-2xl mt-2">
              all-accessible insights in real time
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-4">
          <div className="w-[60%]">
            <img src={whiteCard} alt="white card" className="w-full" />
          </div>
          <div className="w-[43%]">
            <img src={blackCard} alt="black card" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-4">
          <div className="">
            <p>
              Up to <span className="font-bold text-8xl">45%</span>
            </p>
          </div>
          <div className="">
            <p>Increase your analytics efficiency ny up to 45%. Unique</p>
            <p>provide insight from data, reduce time for analysis</p>
            <p>and save time making informed decision</p>
          </div>
        </div>
      </section>
    );
};

export default Hero;