import { useLocation } from "react-router-dom"
import HomeLayout from "../../layouts/HomeLayout"
import { useEffect } from "react";
import { useSelector } from "react-redux";

function CourseDescription() {
    const { state } = useLocation();
    const { role, data } = useSelector((state) => state.auth)

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 flex flex-col items-center justify-center text-white">
                <div className="grid grid-cols-2 gap-10 py-10 relative w-11/12">
                    <div className="space-y-5">
                        <img
                            className="w-full h-64"
                            src={state?.thumbnail?.secure_url}
                            alt=""

                        />
                        <div className="space-y-4">
                            <div className="flex flex-col justify-center text-xl">
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">Total Lectures : </span> {state?.numbersOfLectures}
                                </p>
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">Instuctor : </span> {state?.createdBy}
                                </p>

                            </div>
                            {
                                role === "ADMIN" || data?.subscription?.status === "ACTIVE" ? (
                                    <button className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                        Watch Lectures
                                    </button>
                                ) : (
                                    <button className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                        Subscribe
                                    </button>
                                )
                            }
                        </div>

                    </div>

                    <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
                            {state?.title}
                        </h1>
                        <p>
                            <span className="text-yellow-500">Course description : </span> {state?.description}
                        </p>
                    </div>
                </div>

            </div>
        </HomeLayout>
    )
}

export default CourseDescription