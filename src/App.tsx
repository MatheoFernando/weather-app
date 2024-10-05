import weatherVideo from "./assets/weather.mp4";
import MainBody from "./components/main";
function App() {
  return (
    <div className="flex flex-col h-screen ">
      <div className="w-screen h-screen bg-black/70 absolute top-0 left-0"></div>
      <video
        src={weatherVideo}
        autoPlay
        loop
        muted
        className="h-screen w-screen object-cover"
      />
      <main className="absolute top-0  left-0 w-screen h-screen text-slate-200 flex  ">
        <article className="w-full flex flex-col md:flex-row ">
          <main className="flex-1 ">
<MainBody/>
          </main>
          <aside className="w-1/3 bg-slate-400/30 border-l border-slate-500">

          </aside>
        </article>
      </main>
      <footer className="bg-slate-500 h-16 flex items-center ">
     
      </footer>
    </div>
  );
}

export default App;

