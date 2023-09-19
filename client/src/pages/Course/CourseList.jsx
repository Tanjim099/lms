import { useDispatch, useSelector } from "react-redux";
import courseSlice, { getAllCourses } from "../../redux/slices/courseSlice";
import { useEffect } from "react";
import HomeLayout from "../../layouts/HomeLayout";
import CourseCard from "../../components/CourseCard";

function CourseList() {
    const dispatch = useDispatch();

    const { courseData } = useSelector((state) => state.course);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourses();
        courseData
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-center text-3xl font-semibold">
                    Explore the courese made by <span className="font-blod text-yellow-600">
                        Industry experts
                    </span>
                </h1>
                <div className="mb-10 flex flex-wrap gap-10">
                    {
                        courseData?.map((element) => {
                            return <CourseCard key={element._id} data={element} />
                        })
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default CourseList