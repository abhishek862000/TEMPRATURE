"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [temp, settemp] = useState({ temp: "" });
  const [convertedTemp, setConvertedTemp] = useState("");
  const [unit, setUnit] = useState("celsius");
  const [color, setColor] = useState("#078788"); 

  function tempChange(event: any) {
    settemp((t) => ({ ...t, temp: event.target.value }));
  }
  function handleUnitChange(event: any) {
    setUnit(event.target.id);
  }

  function handleSubmit() {
    // Convert temperature based on the selected unit
    if (unit === "celsius") {
      setConvertedTemp(((temp.temp * 9) / 5 + 32).toString());
    } else {
      setConvertedTemp((((temp.temp - 32) * 5) / 9).toString());
    }
    const randomColor = "#" + Math.floor(Math.random() * 
    5).toString(16);
    setColor(randomColor);
  }

  return (
    <div>
      <div className=" flex flex-col justify-center items-center border border-neutral-800 mt-12 mx-auto rounded-lg w-80">
        <h1 className="text-2xl">Temperature Converter</h1>
        <input
          className="block items-center mt-4 rounded-lg 
      border border-neutral-800 w-72 text-center"
          type="number"
          placeholder="enter the value"
          value={temp.temp}
          onChange={tempChange}
        ></input>
        <div className="mt-4  flex gap-6">
          <input
            type="radio"
            id="fahrenheit"
            name="unit"
            checked={unit === "fahrenheit"}
            onChange={handleUnitChange}
          />
          <label htmlFor="fahrenheit">Fahrenheit</label>

          <input
            type="radio"
            id="celsius"
            name="unit"
            checked={unit === "celsius"}
            onChange={handleUnitChange}
          />
          <label htmlFor="celsius">Celsius</label>
        </div>
        <button
          className="mb-6 mt-3 bg-slate-700 text-gray-50
         hover:bg-gray-50 hover:text-slate-900 p-2 rounded"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
      <div className="bg-gray-100 mx-auto rounded-lg w-80">
      <h1 className="text-2xl text-center mt-3 "style={{ color: color }}>{convertedTemp}</h1>

      </div>

    </div>
  );
}
