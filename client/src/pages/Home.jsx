import { Link } from 'react-router-dom';
import HomeLayout from "../layouts/HomeLayout";
import homePage from '../assets/Images/homePage.png'
import CourseCard from '../components/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import "../app.css"
import CourseImportant from '../components/CourseImportant';
import Ecosystem from '../components/Ecosystem';
import CourseCardSlider from '../components/CourseCardSlider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCourses } from '../redux/slices/courseSlice';
import UnlimitedLiveLearning from '../components/UnlimitedLiveLearning';
import CourseFilter from '../components/CourseFilter';
import HiringPartner from '../components/HiringPartner';
import Mentors from '../components/Mentors';
import Accordion from '../components/Accordion';
function Home() {

    return (
        <HomeLayout>
            <div className="pt-10 w-[100%] text-black flex sm:flex-row flex-col-reverse items-center justify-center gap-10 sm:mx-16 px-5 h-[90vh]">
                <div className="sm:w-1/2 w-[100%] space-y-6">
                    <h1 className="font-['Sorce Sans Pro'] font-semibold text-[32px] lg:text-[64px] text-[#FBFAFFE6]">Find out best <span className="text-[#0074e9] font-bold">Online courses</span></h1>
                    <p className="font-['Nunito'] font-regular text-[#FBFAFFE6] text-[14px] lg:text-[20px] mt-[8px]">
                        We have a large library of courses taugh by highly skilled and quilified at a very affordable cost.
                    </p>
                    <div className='space-x-6'>
                        <Link to="/courses">
                            <button className="bg-white px-5 py-3 rounded-md font-semibold text-lg text-black cursor-pointer hover:bg-[#0074e9] hover:text-white transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className=" border border-white px-5 py-3 rounded-md font-semibold text-lg text-white cursor-pointer hover:bg-[#0074e9] transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='sm:w-1/2 w-[100%] flex items-center justify-center' >
                    <img src={homePage} alt="" />
                </div>
            </div>
            <CourseImportant />
            <UnlimitedLiveLearning className="bg-red-400" />
            <CourseFilter className='bg-[#182238]' />
            {/* <div className="mb-10 flex flex-wrap gap-10">
                {
                    courseData?.map((element) => {
                        return <CourseCardSlider key={element._id} data={element} />
                    })
                }
            </div> */}
            {/* <Ecosystem /> */}
            <div className='w-[87%] m-auto mt-14'>
                <Mentors />
            </div>
            <div className='w-[87%] m-auto mt-14'>
                <HiringPartner />
            </div>
            {/* <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full h-full' src="https://cdn.pwskills.com/assets/uploads/thumbnails/642d617aaf09d6d7b2577870.png" alt="" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
            <div className='w-[87%] m-auto mt-14'>
                <Accordion />
            </div>
        </HomeLayout>
    )
}

export default Home