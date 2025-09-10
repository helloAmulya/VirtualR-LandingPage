import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

export const Price = () => {
    return (
        <div className='mt-20 '>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>
                Pricing
            </h2>
            <div className='flex flex-wrap'>
                {pricingOptions.map((option, index) => (
                    <div className='w-full lg:w-1/3 p-2' key={index}>
                        <div className="p-2 border border-neutral-700 rounded-xl">
                            <p className='text-4xl mb-8'>{option.title}
                                {option.title === "Pro" && <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                    (Most Popular)
                                </span>}
                            </p>

                            <p className='mb-8'>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>

                                <span className='text-neutral-400 tracking-tight'>/Month</span>
                            </p>
                            <ul>{option.features.map((feature, index) => (
                                <li key={index} className='mt-8 flex gap-2 items-center'>
                                    <CheckCircle2 />
                                    {feature}
                                </li>
                            ))}</ul>
                            <button
                                className="inline-flex justify-center items-center text-center p-5 w-full h-12 mt-20 tracking-tight text-xl hover:bg-orange-600 border border-orange-900 rounded-lg transition duration-200"
                            >
                                Subscribe
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
