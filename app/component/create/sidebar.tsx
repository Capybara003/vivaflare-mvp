'use client'

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CreateSidebar = () => {
    const [isShow, setIsShow] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState('');
    const events = [
        { title: 'Events', img: 'image/launchevent/event.svg' },
        { title: 'Music', img: 'image/launchevent/music.svg' }
    ];
    return (
        <div className={`${isShow ? 'w-[295px] p-5' : 'w-[50px] py-5'} bg-transparent flex flex-col gap-10`}>
            <div className="flex justify-end px-8">
                <div className="bg-[#401E89] rounded-[4px] text-white w-6 h-6 aspect-square flex justify-center items-center cursor-pointer" onClick={() => setIsShow(!isShow)}>
                    {isShow ? <FaChevronLeft /> : <FaChevronRight />}
                </div>
            </div>
            <div className="flex justify-center w-full">
                <img src={'/image/launchevent/creativity.svg'} className="w-[140px]" />
            </div>
            {isShow && <div className="flex flex-col gap-[10px]">
                {
                    events.map((event) => {
                        return (
                            <div className={`${selectedEvent === event.title ? 'bg-[#3C2765]' : 'bg-transparent'} flex gap-[10px] items-center w-full py-2 px-5 rounded-[10px] cursor-pointer`} key={event.title} onClick={() => { setSelectedEvent(event.title); console.log(selectedEvent) }}>
                                <div className={`size-[30px] ${event.title === 'Events' ? 'bg-[#9100CC]' : 'bg-[#D50CC0]'} rounded-full flex justify-center items-center`}>
                                    <img className="" src={event.img} />
                                </div>
                                <p className="text-white">{event.title}</p>
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}
export default CreateSidebar