import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from 'react-icons/bs';
import toast from "react-hot-toast";
import { isEmail, isValidPassword } from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [signupDetails, setSignupDetails] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: ""
    });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    };

    function handleImage(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (!uploadedImage) return;
        setSignupDetails({
            ...signupDetails,
            avatar: uploadedImage
        });

        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
            setPreviewImage(this.result);
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!signupDetails.fullName || !signupDetails.email || !signupDetails.password) {
            toast.error("Please fill all the details");
            return;
        }
        if (signupDetails.fullName < 5) {
            toast.error("Name should be atleast of 5 characters");
            return;
        }
        if (!isEmail(signupDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
        if (signupDetails.password < 5) {
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupDetails.fullName);
        formData.append("email", signupDetails.email);
        formData.append("password", signupDetails.password);
        formData.append("avatar", signupDetails.avatar);


        const response = await dispatch(createAccount(formData))
        console.log(response);
        if (response?.payload?.data) {
            navigate("/")
        }
        setSignupDetails(
            {
                fullName: "",
                email: "",
                password: "",
                avatar: ""
            }
        )
        setPreviewImage("")
    }

    const [previewImage, setPreviewImage] = useState("");
    return (
        <HomeLayout>
            <div className="h-[100vh] flex overflow-x-auto items-center justify-center">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col border w-1/4 justify-center gap-3 rounded-lg p-4 text-white">
                    <h1 className="text-2xl text-center font-bold">Registration Page</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img src={previewImage} className="w-24 h-24 rounded-full m-auto" alt="" />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={handleImage}
                        type="file"
                        className="hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input
                            onChange={handleUserInput}
                            value={signupDetails.fullName}
                            required
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="bg-transparent px-3 py-2 border"
                            placeholder="enter your username..."
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            onChange={handleUserInput}
                            value={signupDetails.email}
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
                            value={signupDetails.password}
                            required
                            type="password"
                            name="password"
                            id="password"
                            className="bg-transparent px-3 py-2 border"
                            placeholder="enter your password..."
                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-gl">
                        Create account
                    </button>
                    <p className="text-center">
                        Already have account ? <Link to="/login" className="text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Signup;