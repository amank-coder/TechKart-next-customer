import { useState, useEffect } from "react";

export default function Search({setS}) {


    return (
        <div className="bg-white h-full w-full z-20 fixed">
            
                <div className="max-w-[800px] mx-auto">
                <input
                    type="text"
                    placeholder="search for products..."
                    className="p-4 px-8 w-full overflow-hidden text-gray-500 mt-4 border border-sky-700 rounded-lg"
                />
                </div>
                <div className="absolute right-2 top-2 cursor-pointer" onClick={()=>setS(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
                

                
                
        </div>
    );
}



