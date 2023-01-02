import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex items-center h-24 mx-auto px-4 max-w-6xl justify-between text-white">
            <h1 className="w-full text-3xl font-bold text-cyan-400">
                RUXNE
            </h1>
            <ul className=" hidden md:flex gap-4 p-4">
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="text-3xl block md:hidden" onClick={handleSidebar}>
                {
                    isSidebarOpen ? (
                        <AiOutlineClose/>
                    ) : (
                        <AiOutlineMenu/>
                    )
                }
            </div>
            <div
                className={isSidebarOpen ?
                    "fixed left-0 top-0 w-7/12 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" :
                    "fixed left-[-100%]"   
                }
            >
                <h1 className="w-full text-3xl font-bold text-cyan-400 m-4">
                    RUXNE
                </h1>
                <ul className="flex flex-col gap-4 uppercase p-4">
                    <li className='border-b border-gray-600'>Home</li>
                    <li className='border-b border-gray-600'>Company</li>
                    <li className='border-b border-gray-600'>Resources</li>
                    <li className='border-b border-gray-600'>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}
