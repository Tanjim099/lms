import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { BsBack, BsFillBagCheckFill, BsTrash } from "react-icons/bs"
import { FiAnchor, FiFacebook, FiGitMerge, FiInstagram, FiLinkedin, FiThumbsUp, FiUserX, FiUsers } from "react-icons/fi"
import { NavLink } from "react-router-dom"

function Mentors() {
    const [mentorsData, setMentorsData] = useState([
        {
            name: "Aman Jain",
            image: "https://cdn.pwskills.com/user/profile_pictures/63089ac2f5fba7342f9c1569.jpg",
            role: "CEO",
            reference: "Amazon",
            workExperience: "5+ Years",
            teachingExperience: "4+ Years",
            socialMedia: {
                in: "https://www.linkedin.com/in/#",
                fb: "https://www.linkedin.com/in/#",
                ig: "https://www.instagram.com/#"
            },
            about: " Tech Wallah CEO | 5yrs teaching | 100K+ mentored | Bridging academia & industry for tech."
        },
        {
            name: "Neha Soll",
            image: "https://pwskills.com/images/courseDescription/counsellor.png",
            role: "Senior Data Scientist",
            reference: "Paypal",
            workExperience: "7+ Years",
            teachingExperience: "7+ Years",
            socialMedia: {
                in: "https://www.linkedin.com/in/#",
                fb: "https://www.linkedin.com/in/#",
                ig: "https://www.instagram.com/#"
            },
            about: "AI M.Tech | IIT Hyderabad | Data Structures | Problem Solving | Programming Languages Pro"
        },
        {
            name: "Deval Dhur",
            image: "https://pwskills.com/images/courseDescription/counsellor.png",
            role: "Senior Java Developer",
            reference: "Amazon",
            workExperience: "5+ Years",
            teachingExperience: "4+ Years",
            socialMedia: {
                in: "https://www.linkedin.com/in/#",
                fb: "https://www.linkedin.com/in/#",
                ig: "https://www.instagram.com/#"
            },
            about: "Experienced Dev |Java, JEE,SpringBoot| 5yrs teaching EdTech|Passionate about code & teaching"
        },
        {
            name: "Aman Jain",
            image: "https://pwskills.com/images/courseDescription/counsellor.png",
            role: "CEO",
            reference: "Amazon",
            workExperience: "5+ Years",
            teachingExperience: "4+ Years",
            socialMedia: {
                in: "https://www.linkedin.com/in/#",
                fb: "https://www.linkedin.com/in/#",
                ig: "https://www.instagram.com/#"
            },
            about: " Tech Wallah CEO | 5yrs teaching | 100K+ mentored | Bridging academia & industry for tech."
        },
        {
            name: "Aman Jain",
            image: "https://pwskills.com/images/courseDescription/counsellor.png",
            role: "CEO",
            reference: "Amazon",
            workExperience: "5+ Years",
            teachingExperience: "4+ Years",
            socialMedia: {
                in: "https://www.linkedin.com/in/#",
                fb: "https://www.linkedin.com/in/#",
                ig: "https://www.instagram.com/#"
            },
            about: " Tech Wallah CEO | 5yrs teaching | 100K+ mentored | Bridging academia & industry for tech."
        },
    ]);

    const mentorCards = document.getElementById("mentorCards");
    function arrowLeft() {
        mentorCards.scrollLeft -= 400;
    }

    function arrowRight() {
        mentorCards.scrollLeft += 400;
    }
    return (
        <div className="w-full">
            <h1 className="text-3xl text-white font-semibold mb-6">Meet your Mentors</h1>
            <div className="flex gap-10 w-auto overflow-x-auto scroll-smooth no-scrollbar" id="mentorCards">
                {
                    mentorsData?.map((mentor) => {
                        return (
                            <div className=" min-w-[350px] bg-white flex flex-col rounded-md cursor-pointer">
                                <div className="flex items-center justify-center rounded-tl-md rounded-tr-md">
                                    <img className=" h-[200px] rounded-tl-md rounded-tr-md	" src={mentor.image} alt="" />
                                </div>
                                <div className="p-5 flex flex-col gap-2">
                                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                                    <p className=" text-xs font-bold">{mentor.role}</p>
                                    <div className="flex gap-3">
                                        <NavLink className="bg-[#0a66c2] text-white p-1 rounded-full"><FiLinkedin /></NavLink>
                                        <NavLink className="bg-[#1877f2] text-white p-1 rounded-full"><FiFacebook /></NavLink>
                                        <NavLink className="bg-[#f7356c] text-white p-1 rounded-full"><FiInstagram /></NavLink>
                                    </div>
                                    <p>{mentor.reference}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <FiUsers className="text-xl" />
                                            <div>
                                                <p className="text-sm font-bold">{mentor.workExperience}</p>
                                                <p className="text-xs">Work Experience</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiUsers className="text-xl" />
                                            <div>
                                                <p className="text-sm font-bold">{mentor.teachingExperience}</p>
                                                <p className="text-xs">Teaching Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm">{mentor.about}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="m-auto mt-10 flex items-center justify-center gap-5">
                <div onClick={arrowLeft} className="bg-[#0074e9] text-white text-2xl cursor-pointer w-[50px] h-[50px]  rounded-full flex items-center justify-center">
                    <AiOutlineArrowLeft className="text-center" id="arrowLeft" />
                </div>
                <div onClick={arrowRight} className="bg-[#0074e9] text-white text-2xl cursor-pointer w-[50px] h-[50px]  rounded-full flex items-center justify-center">
                    <AiOutlineArrowRight className="text-center" id="arrowRight" />
                </div>
            </div>
        </div>
    )
}

export default Mentors