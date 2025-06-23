'use client'

import { useState } from "react"

const Create = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const buttons = [
        { img: '/image/launchevent/create.svg', title: 'Create Event' },
        { img: '/image/launchevent/trend.svg', title: 'Trending' },
        { img: '/image/launchevent/progress.svg', title: 'Fun in Progress' },
        { img: '/image/launchevent/publish.svg', title: 'Published' },
    ]
    return (
        <div className="flex flex-col gap-16 mt-[24px] pt-5 pb-6 pr-[90px] bg-[#15121B] rounded-tr-[40px] flex-1/2" style={{ height: '-webkit-fill-available' }}>
            <div className="flex flex-col gap-[26px] px-[10px] py-[5px]">
                <p className="text-[32px] text-white font-semibold">My Events</p>
                <div className="flex gap-4 text-white">
                    {buttons.map(button => (
                        <button className={`${selectedButton === button.title?'bg-[#2F2643]': ''} flex gap-[10px] items-center border border-[#2F2643] rounded-full py-[5px] px-[18px]`} key={button.title} onClick={() => setSelectedButton(button.title)}>
                            <div className={`${selectedButton === button.title? 'bg-gradient-to-r from-[#F80C67] to-[#ED1C24]': 'bg-transparent'} w-[30px] h-[30px] rounded-full flex justify-center items-center`}>
                                <img src={button.img} />
                            </div>
                            <p>{button.title}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Create;