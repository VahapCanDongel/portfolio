import ExperienceCard from "../componenets/ExperienceCard";
import SectionTitle from "../componenets/SectionTitle";

const teaching_res = ["Hello", "Bye"]


export default function Experience(){
    return(
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <SectionTitle title='Experience'/>
            <ExperienceCard company='Capital City College Group' role='Lecturer in Computing' duration='August 2021 - Current' responsibilities={teaching_res}/>
            <ExperienceCard company='Freelance Web Developer' role='Frontend Developer' duration='November 2022 -  Current'/>
        </div>
    )
}