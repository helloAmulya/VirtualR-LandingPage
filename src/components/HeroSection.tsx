import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

export const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Virtual Build Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800">For Developers</span>
                {/*  the below also looks good */}
                {/* Virtual Build Tools <span className=" bg-gradient-to-r from-orange-500 to-oragne-800">For Developers</span> */}
            </h1>
            <p className="hidden md:flex text-neutral-400 max-w-3xl text-center lg:mt-8">
                Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality.
            </p>
            <p className="flex md:hidden text-neutral-400 max-w-3xl text-center mt-5">
                Empower your creativity and build VR apps.
            </p>


            <div className="flex justify-center my-10">
                <a href="#" className='py-2 px-3 mx-3 border-[0.5px] rounded-md bg-gradient-to-r from-orange-500 to-orange-800  border-orange-700'>Start For Free</a>
                <a href="#" className='py-2 px-3 mx-3 border border-neutral-400 rounded-md'>Documentation</a>
            </div>


            <div className="flex mt-10 justify-center">
                {/* use video directly video-tag if only one format and use the source-tag if want multiple formats */}
                <video autoPlay muted loop className="rounded-lg w-1/2 md:w-2/5 border border-orange-700 shadow-orange-400 mx-2 my-4" >
                    <source src={video1} type="video/mp4" />
                    Your shit browser does not support the video clip.
                </video>
                <video autoPlay muted loop className="rounded-lg w-1/2 md:w-2/5  border border-orange-700 shadow-orange-400 mx-2 my-4" src={video2}>
                    Your shit browser does not support the video clip.
                </video>
            </div>


        </div>
    )
}
