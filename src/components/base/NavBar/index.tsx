import appLogo from "../../../assets/chain.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = function () {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="flex justify-between items-center rounded-md bg-black mx-2 p-2">
      <div className="flex">
        <img
          src={appLogo}
          alt="company Logo"
          className="w-[20px] h-[20px]"
          data-aos="zoom-in-up"
        />
        <p
          className="text-white text-md font-semibold ml-2"
          data-aos="zoom-in-up"
        >
          ramos
        </p>
      </div>
      <div className="bg-[#252525] rounded-2xl p-4">
        <ul className="flex gap-4 items-center capitalize text-white justify-evenly">
          <li data-aos="zoom-in-up">Dashboard</li>
          <li data-aos="zoom-in-up">Reports</li>
          <li data-aos="zoom-in-up">Documents</li>
          <li data-aos="zoom-in-up">History</li>
          <li data-aos="zoom-in-up">Settings</li>
        </ul>
      </div>
      <button
        type="submit"
        className="text-black text-center bg-white px-6 py-4 rounded-2xl"
        data-aos="zoom-in-up"
      >
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
