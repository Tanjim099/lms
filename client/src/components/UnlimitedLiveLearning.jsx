import learingImage from '../assets/Images/learningImage.png'
function UnlimitedLiveLearning() {
    return (
        <div className="sm:w-[90%] mt-10 m-auto flex flex-col py-4 px-6">
            <h1 className="sm:text-5xl text-3xl text-[#0074e9] font-bold">Unlimited LIVE Learning</h1>
            <div className="flex sm:flex-row flex-col-reverse py-4 px-6">
                <div className="flex flex-col gap-5 sm:w-[50%]">
                    <div className="mt-6">
                        <img src="https://cdn0.iconfinder.com/data/icons/design-thinking-and-3d-printing-modeling/512/716_Business_coach_course_instructor_mentor-512.png" alt="" className="w-[50px]" />
                        <h3 className="text-2xl font-['Source Sans Pro'] text-white font-semibold">Industry Leading Instructors</h3>
                        <p className="font-['Nunito'] font-regular text-[#FBFAFFE6] text-[12px] lg:text-[18px] mt-[8px]" >Learn from industry experts who have a plethora of experience <br /> with large-scale enterprises.</p>
                    </div>
                    <div className="mt-6">
                        <img src="https://cdn-icons-png.flaticon.com/512/4237/4237828.png" alt="" className="w-[50px]" />
                        <h3 className="text-2xl text-white font-semibold">Exclusively Live Classes</h3>
                        <p className="font-['Nunito'] font-regular text-[#FBFAFFE6] text-[12px] lg:text-[18px] mt-[8px]">Keep up with the newest technical breakthroughs with our live sessions <br /> as opposed to relying on depending on pre-recorded <br /> videos that lack real-time updates.</p>
                    </div>
                    <div className="mt-6">
                        <img src="https://www.freeiconspng.com/thumbs/courses-icon/courses-icon-6.png" alt="" className="w-[50px]" />
                        <h3 className="text-2xl text-white font-semibold">Large Selection of Courses</h3>
                        <p className="font-['Nunito'] font-regular text-[#FBFAFFE6] text-[12px] lg:text-[18px] mt-[8px]">Enhance your skills and expertise by choosing from a comprehensive <br /> range of courses available in different categories.</p>
                    </div>
                </div>
                <div className="sm:w-[50%] m-auto mb-5 h-auto">
                    <img src={learingImage} alt="" className="w-full m-auto" />
                </div>
            </div>
        </div>
    )
}

export default UnlimitedLiveLearning