import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../../redux/slices/courseSlice";
import HomeLayout from "../../layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: ""
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                })
            })
        }
    };

    function handelUserInput(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    };

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.title || !userInput.category || !userInput.createdBy || !userInput.description || !userInput.thumbnail) {
            toast.error("All fields are mandatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if (response?.payload?.success) {
            setUserInput({
                title: "",
                description: "",
                category: "",
                createdBy: "",
                thumbnail: null, // file
                previewImage: ""
            });
            navigate("/courses");
        }
    };
    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative"
                >
                    <Link className="absolute top-6 text-2xl link text-accent cursor-pointer">
                        <AiOutlineArrowLeft
                            onClick={() => navigate(-1)}
                        />
                    </Link>
                    <h1 className="text-center text-2xl font-bold">
                        Create New Course
                    </h1>
                    <main className="grid grid-cols-2 gap-x-10">
                        <div className="gap-y-6">
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {userInput.previewImage ? (
                                        <img
                                            className="w-full h-44 m-auto border"
                                            src={userInput.previewImage} alt="" />
                                    ) : (
                                        <div className="w-full h-44 m-auto flex items-center justify-center border">
                                            <h1 className="font-bold text-lg">Upload your course thumbnail</h1>

                                        </div>
                                    )}
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    name="image_uploads"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={handleImageUpload} />
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <label className="text-lg font-semibold" htmlFor="title">
                                    Course title
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter course title"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.title}
                                    onChange={handelUserInput}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1 mt-4">
                                <label className="text-lg font-semibold" htmlFor="createdBy">
                                    Course instructor
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter course instructor"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.createdBy}
                                    onChange={handelUserInput}
                                />
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <label className="text-lg font-semibold" htmlFor="category">
                                    Course category
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter course category"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.category}
                                    onChange={handelUserInput}
                                />
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <label className="text-lg font-semibold" htmlFor="description">
                                    Course description
                                </label>
                                <textarea
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter course description"
                                    className="bg-transparent px-2 py-1 h-24 overflow-y-auto resize-none border"
                                    value={userInput.description}
                                    onChange={handelUserInput}
                                />
                            </div>
                        </div>
                    </main>
                    <button type="submit" className="w-full py-2 text-lg font-semibold rounded-sm bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                        Create Course
                    </button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default CreateCourse