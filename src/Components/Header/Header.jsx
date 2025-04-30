import { NavLink } from "react-router-dom";

const Header = () => {
  const Links = (

    <>
      <li className="font-bold text-base text-[#00000080]">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className="font-bold text-base text-[#00000080]">
        <NavLink to='/Statistics'>Statistics</NavLink>
      </li>
      <li className="font-bold text-base text-[#00000080]">
        <NavLink to="/AppliedJobs">Applied Jobs</NavLink>
      </li>
      <li className="font-bold text-base  text-[#00000080]">
        <NavLink to='/Blog'>Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="flex items-center mx-5 md:mx-40 justify-between">
      <div className="flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="text-3xl font-extrabold animate-pulse ">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="">
        <a className="btn rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold text-lg">Star Applying</a>
      </div>
    </div>
  );
};

export default Header;
