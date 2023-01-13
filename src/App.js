import Navigation from "./componenets/Navigation";
import Spacer from "./componenets/Spacer";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Freelance from "./sections/Freelance";
import Projects from "./sections/Projects";
import Welcome from "./sections/Welcome";

export default function App() {
  return (
    <div className="w-full h-auto bg-slate-900">
        <Navigation/>
        <Welcome/>
        <Spacer/>
        <About/>
        <Spacer/>
        <Experience/>
        <Spacer/>
        <Freelance/>
        <Spacer/>
        <Projects/>
        <Spacer/>
    </div>
  );
}
