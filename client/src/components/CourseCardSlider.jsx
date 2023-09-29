import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/slices/courseSlice";

function CourseCardSlider({ data }) {
    return (
        <section class="hollywoodmovies">
            <i class='fa fa-angle-right' id="hmarrow_right"></i>
            <i class='fa fa-angle-left' id="hmarrow_left"></i>
            <div className="flex flex-col">
                <div
                    onClick={() => navigate("/course/description", { state: { ...data } })}
                    className="text-white w-[20rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700"
                >
                    <div className="overflow-hidden">
                        <img
                            className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out duration-300"
                            src={data?.thumbnail?.secure_url}
                            alt="Course thumbnail"
                        />
                        <div className="p-3 space-y-1 text-white">
                            <h1 className="text-xl font-bold text-yellow-500 line-clamp-2">
                                {data?.title}
                            </h1>
                            <p className="line-clamp-2">
                                {data?.description}
                            </p>
                            <p className="font-semibold">
                                <span className="text-yellow-500 font-bold">Category : </span>
                                {data?.category}
                            </p>
                            <p className="font-semibold">
                                <span className="text-yellow-500 font-bold">Number Of Lectures : </span>
                                {data?.numberOfLectures}
                            </p>
                            <p className="font-semibold">
                                <span className="text-yellow-500 font-bold">Instructor : </span>
                                {data?.createdBy}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseCardSlider