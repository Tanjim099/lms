import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from "../../redux/slices/RazorpaySlice";
import { useEffect } from "react";
import HomeLayout from "../../layouts/HomeLayout";

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    const isPaymentVerified = useSelector((state) => state?.razorpay?.isPaymentVerified);
    const userData = useSelector((state) => state?.auth?.data);

    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscriptoin_id: "",
        razorpay_signature: ""
    }
    console.log(paymentDetails)
    console.log(useSelector((state) => state?.razorpay))

    console.log(razorpayKey)
    console.log(subscription_id)

    async function handleSubscription(e) {
        e.preventDefault();
        if (!razorpayKey || !subscription_id) {
            toast.error("Something went wrong");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "Coursify Pvt. Ltd.",
            description: "Subscription",
            theme: {
                color: "#F37254"
            },
            profile: {
                email: userData.email,
                name: userData.fullName
            },
            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscriptoin_id = response.razorpay_subscriptoin_id;

                toast.success("Payment successfull")

                const res = await dispatch(verifyUserPayment(paymentDetails))
                res?.payload?.success ? navigate("/checkout/suceess") : navigate("/checkout/fail")
            }
        }

        const paymentObject = new window.Razorpay(options);
        paymentObject.open()
    }


    async function load() {
        await dispatch(getRazorPayId())
        await dispatch(purchaseCourseBundle())
    }
    useEffect(() => {
        load()
    }, [])
    return (
        <HomeLayout>
            <form
                onSubmit={handleSubscription}
                className="min-h-[90vh] flex items-center justify-center text-white"
            >
                <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
                        Subscription Bundle
                    </h1>
                    <div className="px-4 space-y-5 text-center">
                        <p className="text-[17px]">
                            This purchase will allow you to access all available course of our plateform of <span className=" text-yellow-500 font-bold">1 year duration</span>
                            {" "} All the existing and new lunched courses will be also available
                        </p>
                        <p className="flex item-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                            <BiRupee /> <span>499</span> only
                        </p>
                        <div>
                            <p className="text-gray-200">100 refuand on cancellation</p>
                            <p>* Terms and conditions applied *</p>
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 left-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </form>
        </HomeLayout>
    )
}

export default Checkout