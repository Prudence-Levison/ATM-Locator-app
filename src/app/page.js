import MapView from "./Components/MapView";
import SearchBar from "./Components/SearchBar";
import UseMyLocationButton from "./Components/UseMyLocationButton";

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen">
      <MapView />

    
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-6 bg-white/20 backdrop-blur-md z-10">
        <h1 className="text-xl text-white tracking-wide font-bold" style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}>ATM Locator</h1>
         <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md z-20 px-4">
        <SearchBar />
      </div>
       <div className="absolute bottom-2 right-8 z-0">
        <UseMyLocationButton />
      </div>
      </div>

      
      {/* <p className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-white/80 px-6 py-2 rounded-full shadow text-gray-700 text-sm">
        Find nearby ATMs easily
      </p> */}
    </div>
  );
}

