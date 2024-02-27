import orangeLogo from "assets/orange-logo.svg";

const Contact = function () {
    return (
      <section className="mb-8 mt-14">
        <img src={orangeLogo} alt="orange logo"  className="mx-auto w-[100px] rounded-2xl shadow-xl" />
        <p className="mx-auto text-center text-5xl">Get Started</p>
        <p className="mx-auto mt-4 text-center text-[#B1B1B1]">
          Turn information into advantage! Start Using
        </p>
        <p className="mx-auto text-center text-[#B1B1B1]">
          Ramos today, Sign up for a free trial
        </p>
        <div className="mt-8 flex justify-center gap-8">
          <button className="px-6 py-2 rounded-xl text-black bg-[#B1B1B1]">
            Request a demo
          </button>
          <button className="px-6 py-2 rounded-xl text-white bg-[#FE4A23]">
            Request a demo
          </button>
        </div>
      </section>
    );
}

export default Contact;