import HomeLayout from "../layouts/HomeLayout"

function CourseCardSlider({ data }) {
    console.log(data?.title)
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="w-[400px]">
                    <img
                        className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out duration-300"
                        src={data?.thumbnail?.secure_url} alt="" />
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
                            {data?.numbersOfLectures}
                        </p>
                        <p className="font-semibold">
                            <span className="text-yellow-500 font-bold">Instructor : </span>
                            {data?.createdBy}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCardSlider