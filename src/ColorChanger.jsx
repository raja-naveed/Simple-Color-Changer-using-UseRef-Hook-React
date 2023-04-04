import React, { useRef } from "react";

function ColorChanger() {
  const colorRef = useRef(null);

  const changeColor = () => {
    colorRef.current.style.backgroundColor = getRandomColor();
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <div className="mx-auto w-96">
        <div ref={colorRef} className="w-full h-96 bg-red-500"></div>
        <button
          onClick={changeColor}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ColorChanger;
