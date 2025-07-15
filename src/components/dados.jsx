function Date({ num, text }) {
    return (
        <div className="flex flex-col gap-[3px_0px]">
            <span className="text-white uppercase font-semibold text-2xl max-[1073px]:text-[22px] max-[600px]:text-[18px]">
                {num}
            </span>

            <span className="text-[#ffffff99] uppercase text-[12px] tracking-widest max-[1073px]:text-[10px] max-[600px]:text-[7px]">
                {text}
            </span>
        </div>
    )
}

export default Date