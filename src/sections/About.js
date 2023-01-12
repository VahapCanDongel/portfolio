export default function About(){
    return(
        <div className="w-full h-[85vh] bg-slate-900 flex flex-col justify-center items-center">
            <div className="mr-auto flex justify-center items-center w-full">
                <span className="text-slate-200 text-xl m-2 flex justify-center items-cente font-lexend">
                    <div className="w-[200px] h-[3px] bg-emerald-500 m-4 opacity-80"></div>
                    About Me
                </span>
            </div>

            <div className="text-slate-400 font-lexend w-[350px] flex flex-col">
            Hey there! My name is Vahap and I am a passionate programmer. I love nothing more than writing code and bringing my ideas to life. As a lecturer in computing, I am able to share my knowledge and experience with students, helping them to become the next generation of tech enthusiasts.
                <span className="m-4"></span>
            But my love for programming doesn't stop there. I also love building websites and working on projects that push the boundaries of what is possible. I am always thinking outside the box and coming up with new and creative solutions to problems. Whether it's a new website design or a creative approach to a programming challenge, I am always excited to tackle new projects and see what I can achieve.
                <span className="m-4"></span>
            So if you're looking for a dedicated and innovative programmer, look no further! I am always excited to take on new challenges and see what I can achieve.
            </div>
            

        </div>
    )
}