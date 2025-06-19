const HeaderButton = ({children} : {children: React.ReactNode}) => {
    return (
        <button className="rounded-full border-[1px] border-[#2F2643] text-white text-sm bg-transparent py-[11px] px-[25px]">
            {children}
        </button>
    )
}
export default HeaderButton;