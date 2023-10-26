function Accordion() {
    return (
        <div className="w-[100%]">
            <div className="flex sm:flex-row flex-col gap-10">
                <div className="sm:w-[50%] flex flex-col gap-5">
                    <h1 className="sm:text-4xl text-xl text-white font-semibold">Frequently Asked Questions</h1>
                    <div className="collapse collapse-plus bg-[#151f5b] text-white">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#151f5b] text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#151f5b] text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#151f5b] text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#151f5b] text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[50%]">
                    <h1 className="sm:text-4xl text-xl text-white font-semibold mb-5 uppercase">Certificate Of Completion</h1>
                    <div className="flex items-center justify-center">
                        <img

                            src="https://iimskills.com/wp-content/uploads/2021/12/New-IIM-SKILLS-Certificate-For-Technical-Writing-Master-Course--512x390.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion