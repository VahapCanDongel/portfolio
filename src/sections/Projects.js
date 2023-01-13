import ProjectCard from "../componenets/ProjectCard";
import SectionTitle from "../componenets/SectionTitle";

export default function Projects(){  
    return(
        <div className="w-full h-fit">
            <SectionTitle title='Personal Projects'/>
            <div className="flex flex-col justify-center items-center">
                <ProjectCard name='Electronic Point of Sale System' description='Basic ordering system used by a takeaway business.' technologies={['Java FX', 'Java', 'SQLite', 'Google Distance Matrix API', 'Google Maps API', 'RXTX Serial Port Programming']}/>
                <ProjectCard name='Feedback Soup'/>
                <ProjectCard name='FiveM'/>
            </div>
            
           
        </div>
    )
}