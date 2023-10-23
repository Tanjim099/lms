import { useLocation, useNavigate } from "react-router-dom"
import HomeLayout from "../../layouts/HomeLayout"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import HiringPartner from "../../components/HiringPartner";

function CourseDescription() {
    const navigate = useNavigate()
    const { state } = useLocation();
    const { role, data } = useSelector((state) => state.auth)
    console.log(data)
    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 flex flex-col items-center justify-center text-white w-[80%] m-auto">
                <div className="flex flex-row-reverse gap-10 py-10 relative w-[100%]">
                    <div className=" w-[30%] p-5 border rounded-xl">
                        <img
                            className="w-full h-54 rounded-xl"
                            src={state?.thumbnail?.secure_url}
                            alt=""

                        />
                        <div className="space-y-4">
                            <div className="flex flex-col justify-center text-xl">
                                <p className="font-semibold mt-4">
                                    <span className="text-[#0074e9] font-bold">Total Lectures : </span> {state?.numberOfLectures}
                                </p>
                                <p className="font-semibold">
                                    <span className="text-[#0074e9] font-bold">Instuctor : </span> {state?.createdBy}
                                </p>
                                <hr className="mt-4" />
                                <div className="mt-4 flex flex-col gap-2">
                                    <h3 className="text-lg font-bold text-gray-300">What's included</h3>
                                    <p className="text-base text-gray-400">100+ Question</p>
                                    <p className="text-base text-gray-400">Anlimited Assignment</p>
                                </div>
                            </div>
                            {
                                role === "ADMIN" || data?.subscription?.status === "active" ? (
                                    <button onClick={() => navigate("/course/displaylectures", { state: { ...state } })} className="bg-[#0074e9] text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-[#4c67ff] transition-all ease-in-out duration-300">
                                        Watch Lectures
                                    </button>
                                ) : (
                                    <button onClick={() => navigate("/checkout")} className="bg-[#0074e9] text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-[#4b94de] transition-all ease-in-out duration-300">
                                        Subscribe
                                    </button>
                                )
                            }
                        </div>

                    </div>

                    <div className="w-[70%] text-xl">
                        <h1 className="text-3xl font-bold text-[#0074e9] mb-5 text-center">
                            {state?.title}
                        </h1>
                        <p>
                            <span className="text-[#0074e9]">Course description : </span> {state?.description}
                        </p>
                    </div>
                </div>
                <HiringPartner />
            </div>
        </HomeLayout>
    )
}

export default CourseDescription


// grid grid-cols-2 gap-10 py-10 relative w-11/12