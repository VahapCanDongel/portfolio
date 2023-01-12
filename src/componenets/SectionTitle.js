export default function SectionTitle({title}){
    return(
        <div className="mr-auto flex justify-center items-center w-full">
                <span className="text-slate-200 text-xl m-2 flex justify-center items-cente font-lexend">
                    <div className="w-[200px] h-[3px] bg-emerald-500 m-4 opacity-80"></div>
                    {title}
                </span>
            </div>
    )
}