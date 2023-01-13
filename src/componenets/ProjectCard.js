import EposImage from '../componenets/images/epos.png'

export default function ProjectCard({name, description, technologies}){
    return(
        <div className="w-[300px] h-[440px] border-[1px] border-emerald-500 rounded-md m-4 flex flex-col items-center p-3">
        
            <div className="font-lexend text-3xl text-slate-400">
                {name}
            </div>

            <div className='font-lexend text-slate-300 text-[12px] mt-2'>
                {description}
            </div>


            <div className="text-slate-300 font-lexend text-sm mr-auto mt-4 mb-2">
                Used Technologies: 
                <ul>
                    {
                        technologies?.map((technology) => {
                            <li><span className="text-emerald-400 text-lg mr-1">-</span>{technology}</li>    
                        })
                    }
                </ul>
            </div>
        </div>
    )
}