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
    const buttons1 = [
        { img: '/image/launchevent/calendar.svg', title: 'My Calendar' },
        { img: '/image/launchevent/backstage.svg', title: 'Backstage' }
    ]
    return (
        <div className="flex flex-col gap-16 mt-[24px] pt-5 pb-6 pr-[90px] bg-[#15121B] rounded-tr-[40px] flex-1/2" style={{ height: '-webkit-fill-available' }}>
            <div className="flex flex-col gap-[26px] px-[10px] py-[5px]">
                <p className="text-[32px] text-white font-semibold">My Events</p>
                <div className="flex justify-between pr-[80px]">
                    <div className="flex gap-4 text-white mb-[10px]">
                        {buttons.map(button => (
                            <button className={`${selectedButton === button.title ? 'bg-[#2F2643]' : ''} flex gap-[10px] items-center border border-[#2F2643] rounded-full py-[5px] px-[18px]`} key={button.title} onClick={() => setSelectedButton(button.title)}>
                                <div className={`${selectedButton === button.title ? 'bg-gradient-to-r from-[#F80C67] to-[#ED1C24]' : 'bg-transparent'} w-[30px] h-[30px] rounded-full flex justify-center items-center`}>
                                    <img src={button.img} />
                                </div>
                                <p>{button.title}</p>
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-4 text-white">
                        {buttons1.map(button => (
                            <button className={`${selectedButton === button.title ? 'bg-[#2F2643]' : ''} flex gap-[10px] items-center border border-[#2F2643] rounded-full py-[10px] px-[30px]`} key={button.title} onClick={() => setSelectedButton(button.title)}>
                                <div className={`${selectedButton === button.title ? 'bg-gradient-to-r from-[#F80C67] to-[#ED1C24]' : 'bg-transparent'} w-[30px] h-[30px] rounded-full flex justify-center items-center`}>
                                    <img src={button.img} />
                                </div>
                                <p>{button.title}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="text-[24px] text-white font-semibold">Choose Event Type</p>
                    <div className="flex gap-3">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;