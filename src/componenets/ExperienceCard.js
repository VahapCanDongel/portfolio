export default function ExperienceCard(){
    return(
        <div className="w-[300px] h-[460px] bg-gray-800 rounded-md m-4">
            <div className="text-slate-300 font-lexend text-sm p-2 w-full flex flex-col justify-center items-center text-center">
                College of Haringey, Enfield and Northeast London
                <div className="w-[200px] h-[2px] bg-emerald-500 mt-1"></div>
            </div>
            <div className="font-lexend text-slate-400 text-sm m-2">
                Lecturer in Computing
            </div>
            <div className="font-lexend text-slate-400 text-xs m-2">
                August 2021 -  Current
            </div>
            <div className="font-lexend text-slate-400 text-xs m-2">
            <ul className="text-slate-400 ml-5">
                    <li><span className="text-emerald-400 text-lg mr-1">-</span>Maintaining accurate records and monitoring learner’s progress.</li>
                    <li><span className="text-emerald-400 text-lg mr-1">-</span>Supervise learner projects with clients and similar independent activities.</li>
                    <li><span className="text-emerald-400 text-lg mr-1">-</span>Researching and developing new topics, assignment briefs, lesson materials.</li>
                    <li><span className="text-emerald-400 text-lg mr-1">-</span>Contributing to course team meetings to monitor, review and evaluate relevant courses.</li>
                    <li><span className="text-emerald-400 text-lg mr-1">-</span>Setting and overseeing examinations and liaising with awarding bodies.</li>
                    <li><span className="text-emerald-400 text-lg mr-1">-</span>Maintaining knowledge of, and implementing, further education policies & undertaking a range of administrative tasks.</li>
                </ul>
            </div>

        </div>
    )
}