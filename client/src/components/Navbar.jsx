import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function Navbar() {
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role)
    return (
        <div className="navbar bg-base-100 pl-10 pr-20  sticky top-0">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex sm:flex gap-4">
                {/* <ul className="menu menu-horizontal px-1 flex gap-4"> */}
                <NavLink className="btn bg-transparent border-none hover:text-[#0074e9] hover:bg-transparent" to="/">Home</NavLink>
                <NavLink className="btn bg-transparent border-none hover:text-[#0074e9] hover:bg-transparent" to="/courses">Courses</NavLink>
                <NavLink className="btn bg-transparent border-none hover:text-[#0074e9] hover:bg-transparent">Placement</NavLink>
                <NavLink className="btn bg-transparent border-none hover:text-[#0074e9] hover:bg-transparent">Blog</NavLink>
                <button className="btn bg-transparent border-none hover:text-[#0074e9] hover:bg-transparent">About Us</button>
                <NavLink className="btn bg-transparent border-none hover:text-[#0074e9] hover:bg-transparent">Contact Us</NavLink>
                {/* </ul> */}
            </div>
            {
                !isLoggedIn ? (
                    <div className="navbar-end flex gap-5">
                        <NavLink className="btn btn-ghost bg-transparent border-2 border-[#0074e9] text-[#0074e9]">Login</NavLink>
                        <NavLink className="btn text-white bg-[#0074e9] cursor-pointer hover:bg-[#1c4a78] transition-all ease-in-out duration-300">SignUp</NavLink>
                    </div>
                ) : (
                    <div className="navbar-end  dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar