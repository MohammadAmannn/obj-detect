import Image from "next/image";
import ObjectDetection from "./components/Object";

export default function Home() {
  return (
    
    <div className="flex min-h-screen flex-col items-center p-8">
      <h1 className=" bg-gradient-to-b font-extrabold text-3xl md:text-7xl tracking-tighter">Object Detection</h1>
      <ObjectDetection/>
    </div>
  );
}
