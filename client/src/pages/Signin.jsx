import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from 'react-icons/bs';
import toast from "react-hot-toast";
import { isEmail, isValidPassword } from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

function Signin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [signinDetails, setSigninDetails] = useState({
        email: "",
        password: ""
    });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSigninDetails({
            ...signinDetails,
            [name]: value
        })
    };

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!signinDetails.email || !signinDetails.password) {
            toast.error("Please fill all the details");
            return;
        }
        // if (!isEmail(signinDetails.email)) {
        //     toast.error("Invalid email provided");
        //     return;
        // }
        // if (signinDetails.password < 5) {
        //     toast.error("Password should be 6 - 16 character long with atleast a number and special character");
        //     return;
        // }

        // if (signinDetails.email !== signinDetails.password) {
        //     toast.error("Password not match");
        //     return;
        // }


        // const formData = new FormData();
        // formData.append("fullName", signinDetails.fullName);
        // formData.append("email", signinDetails.email);
        // formData.append("password", signinDetails.password);
        // formData.append("avatar", signinDetails.avatar);


        const response = await dispatch(login(signinDetails))
        console.log(response);
        if (response?.payload?.data) {
            navigate("/")
        }
        setSigninDetails(
            {
                email: "",
                password: ""
            }
        )
    }
    return (
        <HomeLayout>
            <div className="h-[100vh] flex overflow-x-auto items-center justify-center">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col border w-1/4 justify-center gap-3 rounded-lg p-4 text-white">
                    <h1 className="text-2xl text-center font-bold">Login Page</h1>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            onChange={handleUserInput}
                            value={signinDetails.email}
                            required
                            type="email"
                            name="email"
                            id="email"
                            className="bg-transparent px-3 py-2 border"
                            placeholder="enter your email..."
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input
                            onChange={handleUserInput}
                            value={signinDetails.password}
                            required
                            type="password"
                            name="password"
                            id="password"
                            className="bg-transparent px-3 py-2 border"
                            placeholder="enter your password..."
                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-gl">
                        SingIn
                    </button>
                    <p className="text-center">
                        Do not hanve an account ? <Link to="/signup" className="text-accent">Signup</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Signin;