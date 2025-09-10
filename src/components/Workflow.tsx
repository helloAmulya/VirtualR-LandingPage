
import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"
export const Workflow = () => {
    return (
        <div className="mt-20">
            {/* main text */}
            <h2 className="text-3xl tracking-wide sm:text-5xl lg:text-6xl text-center mt-6">
                {/* <span className="text-transparent bg-gradient-to-b  from-white via-white to-orange-700 bg-clip-text ">Accelerate your coding workflow</span> */}
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
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt="Code" />
                </div>
                <div className="p-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 bg-neutral-900 h-10 w-10 mx-6 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl ">
                                    {item.title}
                                </h5>
                                <p className="text-md text-neutral-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
