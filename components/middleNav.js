import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faCar,
    faBuilding,
    faMobileScreen,
    faChildReaching,
    faMagnifyingGlass,
    faKey,
} from "@fortawesome/free-solid-svg-icons";




export default function MiddleNav() {
    return (
       
            
            <div>


                <nav className=" block bg-pink border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-pink">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">

                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <div className='flex flex-row space-x-10 align-middle items-center text-white pl-20 grow-0'>
                                <a className='text-center'>
                                    LOGO HERE
                                </a>
                                <a>
                                    <FontAwesomeIcon icon={faHome} className='pr-3' />
                                    Home
                                </a>
                                <a>
                                    <FontAwesomeIcon icon={faCar} className='pr-3' />
                                    Vehicles
                                </a>
                                <a>
                                    <FontAwesomeIcon icon={faBuilding} className='pr-3' />
                                    Property
                                </a>
                                <a>
                                    <FontAwesomeIcon icon={faMobileScreen} className='pr-3' />
                                    Phones
                                </a>
                                <a>
                                    <FontAwesomeIcon icon={faChildReaching} className='pr-3' />
                                    Kids
                                </a>

                            </div>
                        </div>
                        <div className='flex flex-row space-x-10 align-middle items-center text-white sm:pr-20 grow-0'>
                <div className='h-7 w-7 rounded-full bg-darkPink flex items-center align-middle justify-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className='h-7 bg-darkPink flex items-center align-middle justify-center rounded-3xl p-4'>
                    <FontAwesomeIcon icon={faKey} className="pr-2" />
                    Login

                </div>
            </div>
                    </div>
                </nav>
            </div>


    )
}
