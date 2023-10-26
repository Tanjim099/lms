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
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/47b7c21f-e5f0-413b-aaa9-4789e07fd878.png"
        },
        {
            id: 3,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/dad8fba5-8d38-4d07-99b5-949b8e6e40d0.png"
        },
        {
            id: 4,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/07d65b45-6623-4ce5-a963-a53b5c90d4c9.png"
        },
        {
            id: 5,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/b2d5c985-3e04-4a32-aab2-c0deb87dfb5f.png"
        },
        {
            id: 6,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/39789ae1-8619-4bf3-ad48-f4f6ddde6623.png"
        },
        {
            id: 7,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/7d4de755-d775-4705-b765-dc2fbca2918a.png"
        },
        {
            id: 8,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/837c4fe5-7619-44d9-a54a-c2a1bcb81786.png"
        },
        {
            id: 9,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/8ee223de-0021-4c71-89dc-aa2c122d5bae.png"
        },
        {
            id: 10,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/ae83409e-4e9b-42c0-b277-997f9d9b0b8b.png"
        },
        {
            id: 11,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/9a411be9-cc7d-40df-9c39-5599518220f9.png"
        },
        {
            id: 12,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/8f4e15a4-bd2c-4386-97cd-9863c4c557be.png"
        },
        {
            id: 13,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/f56ce398-f284-494a-9b75-3c18391071f4.png"
        },
        {
            id: 14,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/be07f8d6-bbd5-4367-99fe-ad54a227757a.png"
        },
        {
            id: 15,
            img: "https://cdn.pwskills.com/assets/uploads/company_logos/37241dc1-c595-4c9e-b30d-1f79f79b7092.png"
        },
    ])




    const cards = document.getElementById("cards");

    // const card1 = document.getElementById("card1")
    // card1.addEventListener("click", () => {
    //     console.log("yes")
    // })
    function arrowLeft() {
        console.log("left")
        cards.scrollLeft -= 400
        console.log("left")
    }

    function arrowRight() {
        console.log("right")
        cards.scrollLeft += 400
        console.log("right")
    }

    return (
        <div className="w-[100%] m-auto">
            <h1 className="text-white text-3xl font-semibold mb-6">Our Achievers Work With</h1>
            <div className="flex gap-10 w-auto overflow-x-auto scroll-smooth no-scrollbar" id="cards">
                {
                    companyData?.map((data) => {
                        return (
                            <div key={data.id} className=" flex items-center justify-center min-w-[250px] h-[90px] p-4 bg-white rounded-md shadow-md" id="card1">
                                <img src={data.img} alt="" className="w-[150px] max-h-[80px]" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="m-auto mt-10 flex items-center justify-center gap-5">
                <div className="bg-[#0074e9] text-white text-2xl cursor-pointer w-[50px] h-[50px]  rounded-full flex items-center justify-center">
                    <AiOutlineArrowLeft className="text-center" id="arrowLeft" onClick={arrowLeft} />
                </div>
                <div className="bg-[#0074e9] text-white text-2xl cursor-pointer w-[50px] h-[50px]  rounded-full flex items-center justify-center">
                    <AiOutlineArrowRight className="text-center" id="arrowRight" onClick={arrowRight} />
                </div>
            </div>
        </div>
    )
}

export default HiringPartner