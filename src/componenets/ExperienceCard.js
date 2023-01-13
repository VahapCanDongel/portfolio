export default function ExperienceCard({company, role, duration, responsibilities}){    
    return(
        <div className="w-[300px] h-[460px] bg-gray-800 rounded-md m-4">
            <div className="text-slate-300 font-lexend text-sm p-2 w-full flex flex-col justify-center items-center text-center">
                {company}
                <div className="w-[200px] h-[2px] bg-emerald-500 mt-1"></div>
            </div>
            <div className="font-lexend text-slate-400 text-sm m-2">
                {role}
            </div>
            <div className="font-lexend text-slate-400 text-xs m-2">
                {duration}
            </div>
            <div className="font-lexend text-slate-400 text-xs m-2">
            <ul className="text-slate-400 ml-5">
                    {
                        responsibilities?.map((item) => {
                            <li><span className="text-emerald-400 text-lg mr-1">-</span>{item}</li>    
                        })
                    }
                </ul>
            </div>

        </div>
    )
}