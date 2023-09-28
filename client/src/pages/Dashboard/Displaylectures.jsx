import { useEffect, useState } from "react"
import HomeLayout from "../../layouts/HomeLayout"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseLecture, getCourseLectures } from "../../redux/slices/LectureSlice";

function Displaylectures() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { lectures } = useSelector((state) => state.lecture);
    const { role } = useSelector((state) => state.auth)

    const [currentVideo, setCurrentVideo] = useState(0);

    async function onLectureDelete(courseId, lectureId) {
        console.log(courseId, lectureId)
        await dispatch(deleteCourseLecture({ courseId: courseId, lectureId: lectureId }))
        await dispatch(getCourseLectures(courseId))
    }
    useEffect(() => {
        console.log(state)
        if (!state) navigate("/courses");
        dispatch(getCourseLectures(state._id))
        // console.log(lectures[currentVideo]?.lecture?.title)
    }, [])
    return (
        <HomeLayout>
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-wihte mx-[5%]">
                <div className="text-center text-2xl font-semibold text-yellow-500">
                    Course Name : {state?.title}
                </div>
                {lectures && lectures.length > 0 && <div className="flex justify-center gap-10 w-full">
                    {/* left section for playing videos and displaying course details to admin */}
                    <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
                        <video src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                            className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                            controls
                            disablePictureInPicture
                            muted
                            controlsList="nodonwload"
                        >

                        </video>
                        {/* <img
                            src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                            alt=""
                            className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                        /> */}
                        <div>
                            <h1 className="flex gap-2">
                                <span className="text-yellow-500 line-clamp-4">Title :</span>
                                <p className="text-white">{lectures && lectures[currentVideo]?.title}</p>
                            </h1>
                            <p className="gap-2">
                                <span className="text-yellow-500 line-clamp-4">Description :</span>
                                <p className="text-white">{lectures && lectures[currentVideo]?.description}</p>
                            </p>
                        </div>
                    </div>
                    {/* right section for displaying list of lectres */}
                    <ul className="space-y-4 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
                        <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                            <p>Lectures List</p>
                            {role === "ADMIN" && (
                                <button onClick={() => navigate("/course/addlecture", { state: { ...state } })} className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                                    Add New lecture
                                </button>
                            )}
                        </li>
                        {lectures &&
                            lectures.map((lecture, idx) => {
                                return (
                                    <li key={lecture._id} className="space-y-2">
                                        <p className="cursor-pointer text-white" onClick={() => setCurrentVideo(idx)}>
                                            <span>
                                                {" "} Lecuter {idx + 1} : {" "}
                                            </span>
                                            {lecture?.title}
                                        </p>
                                        {role === "ADMIN" && (
                                            <button onClick={() => onLectureDelete(state?._id, lecture?._id)} className="btn-accent px-2 py-1 rounded-md font-semibold text-sm">
                                                Delete lecture
                                            </button>
                                        )}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>}
            </div>
        </HomeLayout>
    )
}

export default Displaylectures