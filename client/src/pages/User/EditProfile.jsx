import { useState } from "react";
import { BsPersonCircle } from 'react-icons/bs';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { getUserData, updateProfile } from "../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";

function EditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    });
    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
        }
    };

    function handleInputChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    };

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!data.fullName || !data.avatar) {
            toast.error("All fields are mandatory");
            return;
        }
        if (data.fullName.length < 5) {
            toast.error("Name cannot be of less than 5 chars");
            return;
        }
        const formData = new FormData();
        formData.append("FullName", data.fullName);
        formData.append("avatar", data.avatar);
        console.log(formData)
        await dispatch(updateProfile([data.userId, formData]));

        await dispatch(getUserData())

        navigate("/user/profile")
    }
    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center rounded-lg text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold">Edit Profle</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {data.previewImage ? (
                            <img src={data.previewImage}
                                alt=""
                                className="w-24 h-24 rounded-full m-auto"
                            />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={handleImageUpload}
                        type="file"
                        id="image_uploads"
                        name="image_uploads"
                        accept=".jpg, .png, .svg, .jpeg"
                        className="hidden"
                    />
                    <div className="flex flex-col p-4 gap-4">
                        <label htmlFor="fullName" className="text-lg font-semibold"></label>
                        <input
                            required
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name"
                            className="bg-transparent px-2 py-1 border outline-none rounded-sm"
                            value={data.fullName}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 rounded-sm">
                            Update profile
                        </button>
                        <Link to="/user/profile">
                            <p className="link text-accent cursor-pointer flex items-center justify-center w-full">
                                <AiOutlineArrowLeft /> Go back to profle
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </HomeLayout>
    )
}

export default EditProfile