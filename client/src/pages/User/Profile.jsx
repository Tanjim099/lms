import { useDispatch, useSelector } from "react-redux"
import HomeLayout from "../../layouts/HomeLayout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserData } from "../../redux/slices/authSlice";

function Profile() {
    const dispatch = useDispatch();
    // const [userData, setUserData] = useState()
    const datas = useSelector((state) => state?.auth?.data);
    // console.log(userData)
    const data = localStorage.getItem("data");
    const allData = JSON.parse(data)
    const userData = allData.user

    console.log(userData?.subscription?.status)
    async function ongetProfile() {
        await dispatch(getUserData())
    }
    useEffect(() => {
        ongetProfile
    }, [])
    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="w-80 my-10 flex flex-col gap-4 rounded-lg p-4 text-white shadow-[0_0_10px_black]">
                    <img
                        src={userData?.avatar?.secure_url}
                        className="w-40 m-auto rounded-full border-black"
                        alt="" />
                    <h3 className="text-xl font-semibold text-center capitalize">
                        {userData?.fullName}
                    </h3>
                    <div className="grid grid-cols-2">
                        <p>Email : </p><span>{userData?.email}</span>
                        <p>Role : </p><span>{userData?.role}</span>
                        <p>Subsription : </p><span>{userData?.subscription?.status === "active" ? "Active" : "Inactive"}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Link
                            to="/changepassword"
                            className="w-1/2 text-center bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2"

                        >
                            <button>Change password</button>
                        </Link>
                        <Link
                            to="/user/editprofile"
                            className="w-1/2 text-center bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2"

                        >
                            <button>Edit profile</button>
                        </Link>
                    </div>
                    {
                        userData?.subscription?.status !== "active" && (
                            <button className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2">
                                Cancel Subscription
                            </button>
                        )
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default Profile