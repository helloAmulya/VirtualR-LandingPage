import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"

export const Workflow = () => {
    return (
        <div className="mt-20">
            {/* main text */}
            <h2 className="text-3xl tracking-wide sm:text-5xl lg:text-6xl text-center mt-6">
                <span
                    className="text-transparent bg-gradient-to-b from-orange-700 via-white to-white bg-clip-text"
                    style={{
                        backgroundSize: "100% 200%",
                        backgroundPosition: "center top",
                        animation: "gradient-fill-down 4s linear infinite"
                    }}
                >
                    Accelerate your coding workflow
                </span>
            </h2>

            <div className="flex flex-col-reverse lg:flex-row flex-wrap justify-center">
                {/* checklist section */}
                <div className="p-6 sm:p-8 lg:p-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 bg-neutral-900 h-8 w-8 sm:h-10 sm:w-10 mx-4 sm:mx-6 p-2 flex justify-center items-center rounded-full">
                                <CheckCircle2 className="w-full h-full" />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-lg sm:text-xl">
                                    {item.title}
                                </h5>
                                <p className="text-sm sm:text-md text-neutral-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* image section */}
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt="Code" className="rounded-xl" />
                </div>
            </div>
        </div>
    )
}
