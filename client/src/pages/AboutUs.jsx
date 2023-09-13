import HomeLayout from "../layouts/HomeLayout";
import aboutMainImage from "../assets/Images/aboutMainImage.png";
import apj from "../assets/Images/apj.png";
import billGates from "../assets/Images/billGates.png";
import nelsonMandela from "../assets/Images/nelsonMandela.png";
import steveJobs from "../assets/Images/steveJobs.png";

function AboutUs() {
    return (
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 spa-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Afforadable and quality education
                        </h1>
                        <p className="text-xl text-gray-200 my-4">
                            Our goal is to provide the affordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                            alt="aboutMainImage" />
                    </div>
                </div>
                <div className="carousel w-1/2 mx-auto my-10">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <p className='text-xl text-gray-200'>Teaching is a very noble profession that shapes the character, caliber, and future of an individual.</p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                            <h3 className='text-2xl font-semibold'>Bill Gates</h3>
                            <p className='text-xl text-gray-200'>Success is a lousy teacher. It seduces smart people into thinking they can’t lose.</p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <p className='text-xl text-gray-200'>Education is the most powerful tool you can use to change the world.</p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                            <h3 className='text-2xl font-semibold'>Steve Jobs</h3>
                            <p className='text-xl text-gray-200'>We dont get a chance to do that many things, and every one should be really excellent.</p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs;