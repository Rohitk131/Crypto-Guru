import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  const [openMenu , setMenuState] = useState(false);
  const [url , setUrl] = useState(window.location.pathname);
   
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-b-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" onClick={()=>{setUrl("/")}} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CryptoGuru
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <Search/>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={()=>{setMenuState(!openMenu)}}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between max-md:h ${openMenu ? "flex-row animate-swipe-down" : "hidden"} w-full md:flex md:w-auto md:order-1" id="navbar-search`}>
          <ul className="flex flex-col space-x-6 max-md:space-y-2 md:flex-row max-md:mt-10 max-md:mx-5 max-md:space-x-0 max-md:text-xl">
            <li className='flex justify-center'>
              <Link to="/" onClick={()=>{setUrl("/")}} className= {` ${url === "/" ? "text-blue-700" : "text-gray-900"} hover:text-blue-700 dark:text-white dark:hover:text-blue-50`}>
                Home
              </Link>
            </li>
            <li className='flex justify-center'>
              <Link
                to="/exchanges"
                onClick={()=>{setUrl("/exchanges")}}
                className={`${url === "/exchanges" ? "text-blue-700" : "text-gray-900 "} hover:text-blue-700 dark:text-white dark:hover:text-blue-500`}
              >
                Exchanges
              </Link>
            </li>
            <li className='flex justify-center'>
              <Link to="/coins" onClick={()=>{setUrl("/coins")}} className={` ${url === "/coins" ? "text-blue-700" : "text-gray-900"} hover:text-blue-700 dark:text-white dark:hover:text-blue-500`}>
                Coins
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
