import Navigation from "./componenets/Navigation";
import About from "./sections/About";
import Welcome from "./sections/Welcome";

export default function App() {
  return (
    <div className="w-full h-[100vh] bg-slate-900">
        <Navigation/>
        <Welcome/>
        <About/>
    </div>
  );
}
