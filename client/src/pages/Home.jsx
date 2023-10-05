import { Link } from 'react-router-dom';
import HomeLayout from "../layouts/HomeLayout";
import homePageMainImage from '../assets/Images/homePageMainImage.png'
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
function Home() {

    return (
        <HomeLayout>
            <div className="pt-10 text-black flex flex-row items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-black text-5xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">Find out best <span className="text-yellow-500 font-bold">Online courses</span></h1>
                    <p className="text-black text-xl text-grey-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                        We have a large library of courses taugh by highly skilled and quilified at a very affordable cost.
                    </p>
                    <div className='space-x-6'>
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg text-black cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className=" border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg text-blck cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={homePageMainImage} alt="" />
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
            <Ecosystem />
            <Swiper
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
            </Swiper>
        </HomeLayout>
    )
}

export default Home