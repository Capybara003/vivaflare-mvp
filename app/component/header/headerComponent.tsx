'use client'
import { useState } from "react";
import HeaderButton from "./headerButton";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isAlarm, setIsAlarm] = useState(false);
    const [isCalendar, setIsCalendar] = useState(false);
    return (
        <div className="w-full pl-12 pr-[62px] py-5 flex justify-between items-center bg-black">
            <img src={"/image/header/headerlogo.svg"} />
            <div className="flex items-center gap-[26px]">
                <div className="w-full flex gap-5 items-center">
                    <HeaderButton>
                        Explore
                    </HeaderButton>
                    <HeaderButton>
                        <div className="flex gap-1 text-white">
                            <img src={"/image/header/launchbutton.svg"} />
                            <p>Launch Experience</p>
                        </div>
                    </HeaderButton>
                </div>
                {!isLogin ?
                    <button className="text-white rounded-full bg-gradient-to-r from-[#F80C67] to-[#ED1C24] px-[25px] py-[11px] whitespace-nowrap">
                        Log In
                    </button>
                    :
                    <div className="w-full flex items-center gap-10">
                        <div className="flex gap-7">
                            {
                                isAlarm ?
                                    <img src={"/image/header/alarm-notification.svg"} />
                                    :
                                    <img src={"/image/header/alarm.svg"} />
                            }
                            {
                                isCalendar ?
                                    <img src={"/image/header/calendar-notification.svg"} />
                                    :
                                    <img src={"/image/header/calendar.svg"} />
                            }
                        </div>
                        <div className="relative rounded-full size-[53px] bg-gradient-to-b from-[#00BDF1] to-[#7538F9]">
                            <img src={"/image/header/profile.png"} className="size-[50px] rounded-full" />
                            <div className=" absolute size-4 bg-[#452193] rounded-full bottom-[2px] -right-[6px]">
                                <img src={"/image/header/seeting.svg"} className="size-[10px]" />
                            </div>
                        </div>
                    </div>
                }
                <div className="whitespace-nowrap">
                    Display Mode
                </div>
            </div>
        </div>
    )
}
export default Header;