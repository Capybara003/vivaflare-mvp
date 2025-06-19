'use client'
import { usePathname, useRouter } from "next/navigation";
import SidebarButton from "./button";
import { useState } from "react";
const SidebarComponent = () => {
    const [isShow, setIsShow] = useState(true);
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const eventButtons = [
        { title: 'Create', route: '/create' },
        { title: 'Upload', route: '/upload' },
    ]
    const SocialFeatures = [
        'For You', 'Following', 'Explore'
    ]
    const Settings = [
        { title: 'My Profile', route: '/my-profile' },
        { title: 'Settings', route: '/settings' }
    ]
    return (
        <div className="w-[150px] h-full bg-[#121212] py-[72px] px-5 flex flex-col items-center gap-12 relative">
            <div className="w-16">
                <SidebarButton isSelected={pathname === '/'} onclick={() => router.push('/')}>
                    <img src="/image/sidebar/home.svg" alt="home" />
                </SidebarButton>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    {eventButtons.map((button) => (
                        <SidebarButton isSelected={pathname === button.route} onclick={() => router.push(button.route)} key={button.title}>
                            {button.title}
                        </SidebarButton>
                    ))}
                </div>
                <div className="flex flex-col gap-2 pb-12">
                    <div className="pb-12 flex justify-center">
                        <select
                            value={isShow ? 'show' : 'hiden'}
                            onChange={() => setIsShow(!isShow)}
                            className="px-3 py-2 rounded-md bg-transparent text-sm flex flex-col gap-4 outline-0 cursor-pointer"
                        >
                            <option className="bg-[#121212] text-white rounded-xl" value="show">
                                Showing
                            </option>
                            <option className="bg-[#121212] text-white rounded-xl" value="hiden">
                                Hiding
                            </option>
                        </select>
                    </div>
                    {isShow ? SocialFeatures.map((feature) => (
                        <SidebarButton
                            key={feature}
                            isSelected={selectedFeature === feature}
                            onclick={() => setSelectedFeature(feature)}
                        >
                            {feature}
                        </SidebarButton>
                    )) : null}
                </div>
                <div className="flex flex-col gap-2">
                    {Settings.map((setting) => (
                        <SidebarButton isSelected={pathname === setting.route} onclick={() => router.push(setting.route)} key={setting.title}>
                            {setting.title}
                        </SidebarButton>
                    ))}
                </div>
            </div>
            <button className=" absolute size-10 bg-[#452193] rounded-full bottom-17 flex justify-center items-center text-2xl" onClick={() => router.push("/help")}>
                ?
            </button>
        </div >
    )
}
export default SidebarComponent;