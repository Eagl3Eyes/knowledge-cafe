import React from 'react';

const Header = () => {
    return (
        <div className='md:w-[70%] md:mx-auto mt-2'>
            <div className="navbar bg-gray-100 border-b-2 rounded-md">
                <div className="flex-1 mr-4">
                    <a className="font-bold text-sm md:text-xl" href="">Knowledge Cafe</a>
                </div>
                <div className="flex-none gap-1">
                    <div className="flex gap-2 md:gap-6 font-bold text-gray-500 text-xs md:text-base">
                        <button className="hover:text-gray-800" type="button">Home</button>
                        <button className="hover:text-gray-800" type="button">About</button>
                        <button className="hover:text-gray-800" type="button">Contact</button>
                        <button className="hover:text-gray-800" type="button">Login Out</button>
                    </div>
                    <div className="ml-2">
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;