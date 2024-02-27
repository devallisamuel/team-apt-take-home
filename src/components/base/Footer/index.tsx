import qrCode from "../../../assets/qr-code.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = function() {

    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <footer className="px-10 py-8 bg-black text-white ">
        <div className="flex justify-between mt-6 items-center">
          <ul
            className="flex gap-[3rem] text-[#4e4e4e]"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <li>About Us</li>
            <li>Why Us</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
          <h4
            className="font-bold text-4xl"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            hello@ramos.com
          </h4>
        </div>
        <div className="bg-[#4e4e4e] w-100 border mt-6"></div>
        <div className="flex justify-between mt-10">
          <div className="flex justify-between gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-white text-semibold capitalize">
                Warrensville heights
              </p>
              <p className="text-[#4e4e4e]">14418 Vineyard Drive,NC</p>
              <p className="text-[#4e4e4e]">44128</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-semibold capitalize">Saint Louis</p>
              <p className="text-[#4e4e4e]">1366 Penn Street</p>
              <p className="text-[#4e4e4e]">63101</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-2xl">
            <p className="text-white  capitalize">Linkedin</p>
            <p className="text-white">Instagram</p>
            <p className="text-white">Facebook</p>
          </div>
        </div>
        <div className="flex justify-between mt-10 items-center mb-10">
          <h4
            className="text-7xl font-semibold"
            data-aos="zoom-in-up"
          >
            Ramos&reg;{" "}
          </h4>
          <p className="text-[#4e4e4e]">Privacy Policy</p>
          <p className="text-[#4e4e4e]">License agreement </p>
          <img
            src={qrCode}
            alt="qr code"
            className="w-[100px] h-[100px]"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          />
        </div>
      </footer>
    );
}

export default Footer;