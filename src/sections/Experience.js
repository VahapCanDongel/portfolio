import ExperienceCard from "../componenets/ExperienceCard";
import SectionTitle from "../componenets/SectionTitle";

export default function Experience(){
    return(
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <SectionTitle title='Experience'/>
            <ExperienceCard />
            <ExperienceCard />
        </div>
    )
}