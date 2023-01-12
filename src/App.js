import Navigation from "./componenets/Navigation";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Welcome from "./sections/Welcome";

export default function App() {
  return (
    <div className="w-full h-auto bg-slate-900">
        <Navigation/>
        <Welcome/>
        <About/>
        <Experience/>
    </div>
  );
}
