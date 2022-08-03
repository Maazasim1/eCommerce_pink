import React from 'react'

export default function ProductCard(props) {
    return (
        <div className="wrapper antialiased text-gray-900">

                <div className='px-6'>

                <img src={props.image} alt="random image" className="w-full  h-[300px] object-cover object-bottom rounded-lg shadow-lg items-center" />
                </div>
           

                <div className="block  py-10  -mt-16  ">
                    <div className="bg-white dark:text-white dark:bg-black py-20 p-6 rounded-lg shadow-lg border-2 border-darkPink">


                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ferrari</h4>

                        <div className="mt-1">
                            10000000 USD
                            <span className="text-gray-600 dark:text-white text-sm">   </span>
                        </div>
                        <div className="mt-4">
                            <span className="text-teal-600 text-md font-semibold">4/5 </span>
                            <span className="text-sm text-gray-600 dark:text-white">(based on 234 ratings)</span>
                        </div>
                    </div>
                </div>

            
        </div>



    )
}
