import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

function HiringPartner() {
    const [companyData, setCompanyData] = useState([
        {
            id: 1,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 2,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 3,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 4,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 5,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 6,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 7,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 8,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 9,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 10,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 11,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 12,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 13,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 14,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
        {
            id: 15,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9e07b6ce-e419-4066-9614-39d13607de66.png"
        },
    ])


    const cards = document.getElementById("cards");
    function arrowLeft() {
        cards.scrollLeft -= 400
    }

    function arrowRight() {
        cards.scrollLeft += 400
    }

    return (
        <div className="w-[100%]">
            <div className="flex gap-5 w-auto overflow-x-auto scroll-smooth ::-webkit-scrollbar:none" id="cards">
                {
                    companyData?.map((data) => {
                        return (
                            <div key={data.id} className=" flex items-center justify-center min-w-[250px] h-[90px] bg-[#f9f6f5] rounded-md shadow-md">
                                <img src={data.img} alt="" className="w-[150px] max-h-[80px]" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="m-auto flex items-center justify-center gap-5">
                <div className="bg-red-500 w-[50px] h-[50px]  rounded-full flex items-center justify-center">
                    <AiOutlineArrowLeft className="text-center" id="arrowLeft" onClick={arrowLeft} />
                </div>
                <div className="bg-red-500 w-[50px] h-[50px]  rounded-full flex items-center justify-center">
                    <AiOutlineArrowRight className="text-center" id="arrowRight" onClick={arrowRight} />
                </div>
            </div>
        </div>
    )
}

export default HiringPartner