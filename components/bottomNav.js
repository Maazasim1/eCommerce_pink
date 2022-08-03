import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleDown,
  } from "@fortawesome/free-solid-svg-icons";


export default function BottomNav() {
  return (
    <div className="sticky top-0 z-20 sm:block hidden">

    <div className='w-full h-[40px] bg-white dark:bg-black dark:text-white flex flex-row space-x-40 align-middle items-center text-black pl-20 grow-0 shadow-md'>
        <a>
            Brand <FontAwesomeIcon icon={faArrowCircleDown} className="pl-4" />
        </a>
        <a>
            Price <FontAwesomeIcon icon={faArrowCircleDown} className="pl-4" />
        </a>
        <a>
            Rating <FontAwesomeIcon icon={faArrowCircleDown} className="pl-4" />
        </a>
        <a>
            Reviews <FontAwesomeIcon icon={faArrowCircleDown} className="pl-4" />
        </a>
        <a>
            Condition <FontAwesomeIcon icon={faArrowCircleDown} className="pl-4" />
        </a>
        <a>
            Location <FontAwesomeIcon icon={faArrowCircleDown} className="pl-4" />
        </a>
        <a>
            Color <FontAwesomeIcon icon={faArrowCircleDown} className="pl-4" />
        </a>
    


    </div>
    </div>
  )
}
