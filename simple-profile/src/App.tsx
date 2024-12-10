import { useState } from "react";
import Portfolio from "./components/portfolio.tsx";

export default function App() {
  const [bgColor, setBgColor] = useState("black");

  const colors = [
    "Black",
    "#181C14",
    "#272829",
    "#1A1A1A",
    "#0F0F0F",
    "#0B0C0C",
  ];

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="min-h-screen ">
        <div className="absolute inset-0 z-0 top-96 bg-inherit">
          <img
            src="./bg.png"
            alt="Background"
            className="w-full h-full object-cover filter blur-lg opacity-15  animate-bgfade"
          />
        </div>

        <div className="flex justify-center items-center py-4 space-x-2  z-50  relative ">
          {colors.map((color, index) => (
            <div
              key={index}
              onMouseMove={() => {
                setBgColor(color);
              }}
              className="w-5 h-5 rounded-md cursor-pointer hover:scale-150 animate-fadeIn border-[1px] border-white"
              style={{ backgroundColor: color }}
              title={`Set background to ${color}`}
            ></div>
          ))}
        </div>

        <div className="relative z-10">
          <Portfolio />
        </div>
      </div>
    </>
  );
}
