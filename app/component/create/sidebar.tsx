'use client'

import { useState } from "react";

const CreateSidebar = () => {
    const [isShow, setIsShow] = useState(true);
    const events = [
        { title: 'Events', img: 'image/launchevent/event.svg' },
        { title: 'Music', img: 'image/launchevent/music.svg' }
    ];
    return (
        <div className={`${isShow? 'w-[295px] p-5': 'w-[50px] py-5'} bg-transparent flex flex-col gap-10`}>
            <div className="flex justify-end px-8">
                <div className="bg-[#401E89] rounded-[4px] w-6 h-6 aspect-square flex justify-center items-center cursor-pointer" onClick={() => setIsShow(!isShow)}>
                    {isShow? "<" : ">"}
                </div>
            </div>
            {isShow && <div className="flex flex-col gap-[10px]">
                {
                    events.map((event) => {
                        return (
                            <div className="flex gap-[10px] px-10 py-2 items-center" key={event.title}>
                                <img className="size-[30px] bg-[#9100CC] rounded-full p-1" src={event.img}/>
                                <p>{event.title}</p>
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}
export default CreateSidebar