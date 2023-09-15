import { Link } from 'react-router-dom';
import HomeLayout from "../layouts/HomeLayout";
import homePageMainImage from '../assets/Images/homePageMainImage.png'

function Home() {
    return (
        <HomeLayout>
            <div className="pt-10 text-black flex flex-row items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-white text-5xl font-semibold ">Find out best <span className="text-yellow-500 font-bold">Online courses</span></h1>
                    <p className="text-white text-xl text-grey-200">
                        We have a large library of courses taugh by highly skilled and quilified at a very affordable cost.
                    </p>
                    <div className='space-x-6'>
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg text-white cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className=" border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg text-white cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={homePageMainImage} alt="" />
                </div>
            </div>
        </HomeLayout>
    )
}

export default Home