import whiteCard from "assets/white-card.svg";
import blackCard from "assets/black-card.svg";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import React from "react";


const Hero = function () {
  const [isVisible, setIsVisible] = useState(false);
   const countUpRef = useRef(null);

  const onVisibilityChange = (isVisible: any) => {
    setIsVisible(isVisible);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="px-[2rem] py-[4rem] mt-[10rem] bg-[#F6F6F6] rounded-3xl">
      <div className="flex justify-between">
        <div>
          <p
            className="text-5xl font-medium"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            Your key to strategic
          </p>
          <p
            className="text-5xl mt-2 font-medium"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            success through analytics
          </p>
        </div>
        <div>
          <p
            className="text-2xl"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            Ready for exciting instantaneous,
          </p>
          <p
            className="text-2xl mt-2"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            all-accessible insights in real time
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-4">
        <div className="w-[60%]" data-aos="zoom-in-up" data-aos-duration="1500">
          <img src={whiteCard} alt="white card" className="w-full" />
        </div>
        <div className="w-[43%]" data-aos="zoom-in-up" data-aos-duration="1500">
          <img src={blackCard} alt="black card" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-4">
          <VisibilitySensor onChange={onVisibilityChange}>
        <div className="">
            <p>
              Up to{" "}
              <span className="font-bold text-8xl">
                {isVisible && <CountUp end={45} duration={2} />}%
              </span>
            </p>
        </div>
          </VisibilitySensor>
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
