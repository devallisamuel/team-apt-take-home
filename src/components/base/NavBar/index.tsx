import appLogo from "../../../assets/chain.png"

const Navbar = function () {
    return (
      <nav className="flex justify-between items-center rounded-md bg-black mx-2 p-2">
        <div className="flex">
          <img src={appLogo} alt="company Logo" className="w-[20px] h-[20px]" />
          <p className="text-white text-md font-semibold ml-2">ramos</p>
        </div>
        <div className="bg-[#252525] rounded-2xl p-4">
          <ul className="flex gap-4 items-center capitalize text-white justify-evenly">
            <li>Dashboard</li>
            <li>Reports</li>
            <li>Documents</li>
            <li>History</li>
            <li>Settings</li>
          </ul>
        </div>
        <button
          type="submit"
          className="text-black text-center bg-white px-6 py-4 rounded-2xl"
        >
          Sign Up
        </button>
      </nav>
    );
}


export default Navbar;