import React from 'react'

export default function TopNav() {
  return (
    <div className="w-full h-10 bg-darkPink flex flex-row">
        <div className='flex flex-row space-x-10 justify-center align-middle pl-20'>
            <p className="text-center pt-2 text-white ">
                slogan here
            </p>
            <select className='rounded-sm text- m-2 pr-20'>
                <option>
                    All Cities
                </option>
            </select>
        </div>

        <div>

        </div>

    </div>
  )
}
