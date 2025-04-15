import { IconSearch } from "@tabler/icons-react";

export function SearchInput() {
    return (
        <div className="w-full sm:w-[500px] flex items-center justify-between bg-white rounded-lg p-[1px]">
            <input
                className="w-full pl-4 outline-none placeholder:text-base placeholder:sm:text-lg placeholder:text-black placeholder:font-semibold"
                type="text"
                name="name"
                placeholder="Digite um usuário do Github" />

            <div className="text-white p-4 bg-[#005CFF] rounded-lg">
                <IconSearch stroke={1} />
            </div>
        </div>
    )
}