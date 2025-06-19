const SidebarButton = ({ children, isSelected, onclick }: { children: React.ReactNode, isSelected: boolean, onclick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button className={`${isSelected ? "bg-[#452193]" : "bg-[#16171E]"} text-white rounded-xl p-4 flex w-full justify-center items-center cursor-pointer`} onClick={onclick}>
            {children}
        </button>
    )
}
export default SidebarButton;