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
        'For You', 'Following', 'Community', 'Backstage'
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
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    {eventButtons.map((button) => (
                        <SidebarButton isSelected={pathname === button.route} onclick={() => router.push(button.route)} key={button.title}>
                            {button.title}
                        </SidebarButton>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {SocialFeatures.map((feature) => (
                        <SidebarButton
                            key={feature}
                            isSelected={selectedFeature === feature}
                            onclick={() => setSelectedFeature(feature)}
                        >
                            {feature}
                        </SidebarButton>
                    ))}
                </div>
            </div>
            <div className="relative rounded-full w-[53px] aspect-square bg-gradient-to-b from-[#00BDF1] to-[#7538F9] flex justify-center items-center mt-[27px]">
                <img src={"/image/header/profile.png"} className="flex justify-center items-center w-[50px] rounded-full h-[50px] object-cover" />
                <div className="absolute size-4 bg-[#452193] rounded-full bottom-[2px] -right-[4px] flex justify-center items-center">
                    +
                </div>
            </div>
            <button className="size-10 bg-[#16171E] rounded-full bottom-17 flex justify-center items-center text-center text-2xl border-[0.5px]" onClick={() => router.push("/help")}>
                ?
            </button>
        </div >
    )
}
export default SidebarComponent;