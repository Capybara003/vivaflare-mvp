const SearchEventPage = () => {
    return (
        <div className="mt-6 bg-[#15121B] rounded-t-[40px] flex flex-col gap-16 justify-center items-center" style={{ height: '-webkit-fill-available' }}>
            <div className="flex flex-col items-center">
                <img src={"/image/launchevent/creativity.svg"}/>
                <p className="text-white text-5xl font-extrabold">Lives Here!</p>
            </div>
            <div className="flex rounded-full bg-[#2F2643] text-white p-2 w-1/2">
                <input placeholder="Find the experience you wish to create" className="border-r-[1px] border-[#A6A6A6] w-full outline-0 text-[16px] px-12 h-[33px]"/>
                <button className="pl-7"><img src={"/image/launchevent/search.svg"}/></button>
            </div>
        </div>
    )
}
export default SearchEventPage;