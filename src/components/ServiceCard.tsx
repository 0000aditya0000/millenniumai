import React from 'react';

export default function ServiceCard({ item }) {

    const isFour = item.id % 4 === 0;
    return (
        <div className='relative' >
            {isFour ?
                (
                    <div className='w-[300px] h-[300px]  absolute left-60 top-48 bg-[#1B1640] bg-gradient-to-r from-[#1B1640] to-transparent blur-3xl'>

                    </div>
                ) : ""
            }
            <div style={{ borderRadius: 30 }} className={`bg-[#0E0D16]  overflow-hidden p-6 shadow-lg shadow-gray-900 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 z-10 relative group max-w-[25rem] `}>
                <img
                    src={item.backgroundUrl}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 z-10 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"
                />
                <div className="relative z-10">
                    <h1 className="text-2xl text-center font-semibold text-white mb-2">{item.title}</h1>
                    <p className="text-gray-400 mt-10 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between mt-10">
                        <item.icon className="h-8 w-8 text-indigo-600" />
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                            Explore More
                        </button>   
                    </div>
                </div>

            </div>
        </div>
    );
}

