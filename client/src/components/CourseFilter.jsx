import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { getAllCourses } from "../redux/slices/courseSlice";

function CourseFilter() {
    const dispatch = useDispatch();

    const { courseData } = useSelector((state) => state.course);

    console.log(courseData)

    const [filteredData, setFilteredData] = useState([]);

    function handleFilter(e) {
        console.log(e.target.id);

        const newCourseData = courseData?.filter((course) => {

            return course.category == e.target.id
        })
        // setFilteredData((data) => [...data, ...newCourseData])
        newCourseData ? setFilteredData([...newCourseData]) : ""
    }

    function loadCourses() {
        dispatch(getAllCourses());


    }

    useEffect(() => {
        loadCourses();
    }, []);

    useEffect(() => {
        const obj = { target: { id: "DSA" } }
        handleFilter(obj)
    }, [courseData])
    return (
        <div className=" mt-5 m-auto py-4 px-6 bg-[#182238]">
            <div className="w-[90%] m-auto">
                <h1 className="text-[#0096ff] text-4xl font-semibold">Explore Courses</h1>
                <p className="py-5 text-white font-semibold text-xl">Master job relevant skills from our broad selection of courses</p>
                <div className="flex">
                    <div className=" w-[24%]">
                        <h3 className="text-2xl text-white font-semibold mb-4">Categories</h3>
                        <hr className="mt-5" />
                        <div className="mt-6 flex flex-col items-start gap-2">
                            <span className="bg-[#0096ff] py-1 px-2 rounded-3xl text-white" id="DSA" onClick={handleFilter}>Data Structures & Algorithms</span>
                            <span className="bg-[#0096ff] py-1 px-2  rounded-3xl text-white" id="program" onClick={handleFilter}>Programming language</span>
                            <span className="bg-[#0096ff] py-1 px-2  rounded-3xl text-white" id="database" onClick={handleFilter}>Database</span>
                            <span className="bg-[#0096ff] py-1 px-2 rounded-3xl text-white" id="Computer Science" onClick={handleFilter}>Data Science</span>
                            <span className="bg-[#0096ff] py-1 px-2  rounded-3xl text-white" id="webdevelopment" onClick={handleFilter}>Web Development</span>
                            <span className="bg-[#0096ff] py-1 px-2 rounded-3xl text-white" id="appdevelopment" onClick={handleFilter}>App Development</span>
                            <span className="bg-[#0096ff] py-1 px-2  rounded-3xl text-white" id="gamedevelopment" onClick={handleFilter}>Game Development</span>
                            <span className="bg-[#0096ff] py-1 px-2  rounded-3xl text-white" id="Digital Marketing" onClick={handleFilter}>Digital Marketing</span>
                        </div>
                    </div>
                    <div className="w-[76%]  flex flex-wrap gap-5">
                        {
                            filteredData?.map((element) => {
                                return <CourseCard key={element._id} data={element} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFilter