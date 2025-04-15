export function UserProfiler() {
    return (
        <div className="
            max-w-[800px] flex flex-col items-center gap-8 bg-[#D9D9D9] rounded-3xl px-7 py-6
            sm:flex-row md:pr-10 lg:pr-16
        ">
            <div className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-[#005CFF]">
            </div>

            <div className="text-center sm:text-start sm:flex-1">
                <h2 className="text-xl font-bold text-[#005CFF] mb-5">Nome</h2>
                <p className="text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in obcaecati animi et nihil magnam quisquam dignissimos odit, repudiandae laboriosam
                    possimus enim temporibus? Officia corrupti voluptates assumenda perferendis laborum natus?
                </p>
            </div>
        </div>
    )
}