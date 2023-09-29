import { useLocation, useNavigate } from "react-router-dom"
import HomeLayout from "../../layouts/HomeLayout"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addCourseLecture } from "../../redux/slices/LectureSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";

function AddLecture() {
    const courseDetails = useLocation().state;
    // console.log(courseDetails)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        id: courseDetails?._id,
        lecture: undefined,
        title: "",
        description: "",
        videoSrc: ""
    });

    // console.log(userInput)

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    function handleVideo(e) {
        const video = e.target.files[0];
        const source = window.URL.createObjectURL(video);
        console.log(source)
        setUserInput({
            ...userInput,
            lecture: video,
            videoSrc: source
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.lecture || !userInput.title || !userInput.description) {
            toast.error("All fields are mandatory");
            return;
        }
        const response = await dispatch(addCourseLecture(userInput));
        if (response?.payload?.success) {
            navigate(-1)
            setUserInput({
                id: courseDetails?._id,
                lecture: undefined,
                title: "",
                description: "",
                videoSrc: ""
            })
        }
    }

    useEffect(() => {
        if (!courseDetails) navigate("/courses")
    }, [])
    return (
        <HomeLayout>
            <div className="h-[90vh] text-white flex flex-col items-center justify-center gap-10 mx-16">
                <div className=" flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-96 rounded-lg">
                    <header className="flex items-center justify-center relative">
                        <button
                            onClick={() => navigate(-1)}
                            className=" absolute left-2 text-xl text-green-500">
                            <AiOutlineArrowLeft />
                        </button>
                        <h1 className=" text-xl text-yellow-500 font-semibold">Add new lecture</h1>
                    </header>
                    <form
                        onSubmit={onFormSubmit}
                        className=" flex flex-col gap-3"
                    >
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter the title of the lecture"
                            className=" bg-transparent px-3 py-1 border"
                            onChange={handleInputChange}
                            value={userInput.title}
                        />
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Enter the description of the lecture"
                            className="bg-transparent px-3 py-1 border resize-none overflow-y-scroll h-36"
                            onChange={handleInputChange}
                            value={userInput.description}
                        />
                        {userInput.videoSrc ? (
                            <video
                                muted
                                controls
                                controlsList="nondownload nofullscreen"
                                disablePictureInPicture
                                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                                src={userInput.videoSrc}
                            >

                            </video>
                        ) : (
                            <div className="h-48 border flex items-center justify-center cursor-pointer">
                                <label className="font-semibold text-xl" htmlFor="lecture">Choose your video</label>
                                <input type="file" className="hidden" id="lecture" name="lecture" onChange={handleVideo} accept="video/mp4 video/x-mp4 video/*" />
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary py-1 font-semibold text-xl">
                            Add new lecture
                        </button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AddLecture