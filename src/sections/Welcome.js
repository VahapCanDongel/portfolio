export default function Welcome(){
    return(
        <div className="w-full h-[95%] flex flex-col justify-center items-center">
            <div className="text-emerald-500 font-lexend mr-auto m-2 text-xl">
                Welcome...
            </div>
            <div className="text-slate-300 text-[40px] text-left font-martian m-2">
                Discover My Projects, Expertise and Passion.
            </div>

            <div>
                <div className="text-slate-400 font-lexend text-justify w-[80%] mr-auto m-2">
                    I am a freelancer web developer. I build websites for clients. I am currently a teacher at <span className="text-emerald-500">CONEL</span> teaching following subjects:
                </div>
                <ul className="text-sm text-slate-400 font-lexend ml-[40px]">
                        <li><span className="text-emerald-400 text-lg">-</span> Software Engineering</li>
                        <li><span className="text-emerald-400 text-lg">-</span> Programming</li>
                        <li><span className="text-emerald-400 text-lg">-</span> Internet of Things</li>
                        <li><span className="text-emerald-400 text-lg">-</span> Robotics</li>
                </ul>
            </div>
            

        </div>
    )
}