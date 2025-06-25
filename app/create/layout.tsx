import CreateSidebar from "../component/create/sidebar"

export default function CreateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex" style={{ height: '-webkit-fill-available' }}>
            {/* Optional: Add header, sidebar, etc. here */}
            <div className=" mt-6 rounded-tl-[40px]">
                <CreateSidebar />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}
