import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import axios from "axios";
import axiosInstance from "../config/axiosInstance";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
import { FiPhone, FiVoicemail } from "react-icons/fi";

function Contact() {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handelInputChange(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("All fields are mandatory");
            return;
        }
        if (!isEmail(userInput.email)) {
            toast.error("Invalid email provided")
        }
        try {

            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submitting your query",
                success: "Form submitted successfully",
                error: "Failed to submit the form"
            });

            const responseData = await response;
            if (responseData?.payload?.data) {
                setUserInput({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        } catch (error) {
            toast.error("operation failed...")
        }
    }
    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh] w-4/5 m-auto">
                <div className="w-1/2 m-auto">
                    <h1 className="text-white text-4xl font-semibold">Contact Us</h1>
                    <p className=" mt-4 text-yellow-50">For any queries, Please reach out to us. Our Support team <br /> will get back to you within 24 hours.</p>
                    <a href="mailto:contact@gmail.com" className="flex items-center text-white mt-4 gap-2">
                        <FiVoicemail />
                        <p>contact@gmail.com</p>
                    </a>
                    <a href="tel:+919988221100" className="flex items-center text-white mt-2 gap-2">
                        <FiPhone />
                        <p>+91-9988221100</p>
                    </a>
                    <img src="https://pwskills.com/images/contactUs/employeesHelpingCustomers.svg" alt="" />
                </div>
                <div className="w-1/2 m-auto">
                    <form onSubmit={onFormSubmit} noValidate className="flex w-full flex-col item-center justify-center gap-2 p-8 border rounded-md text-white ">
                        <h1 className="text-3xl font-semibold">Contact Form</h1>
                        <div className="flex flex-col font-semibold">
                            <label htmlFor="name" className="font-xl font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="bg-transparent border px-2 py-2 rounded-sm"
                                placeholder="enter your name"
                                name="name"
                                onChange={handelInputChange}
                                value={userInput.name}
                            />
                        </div>
                        <div className="flex flex-col font-semibold">
                            <label htmlFor="email" className="font-xl font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-transparent border px-2 py-2 rounded-sm"
                                placeholder="enter your email"
                                name="email"
                                onChange={handelInputChange}
                                value={userInput.email}
                            />
                        </div>
                        <div className="flex flex-col font-semibold">
                            <label htmlFor="message" className="font-xl font-semibold">
                                Message
                            </label>
                            <textarea
                                type="message"
                                id="message"
                                className="bg-transparent border px-2 py-2 rounded-sm resize-none h-40"
                                placeholder="enter your message"
                                name="message"
                                onChange={handelInputChange}
                                value={userInput.message}
                            />
                        </div>
                        <button type="submit" className="w-full px-2 py-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer rounded-sm mt-2">
                            Submint
                        </button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}
export default Contact;