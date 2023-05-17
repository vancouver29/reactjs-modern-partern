import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";


function App() {
  const [colors, setColors] = useState(colorData);

  const removeColor = (id) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  }

  const rateColor = (id, rating) => {
    const newColors = colors.map(color => {
      if (color.id === id) {
        return {
          ...color,
          rating
        };
      }
      return color;
    });
    setColors(newColors);
  }

  return (
    <>
      <AddColorForm onNewColor={(title, color) => alert(`TODO: Create ${title} - ${color}`)} />
      <ColorList
        colors={colors}
        onRemoveColor={removeColor}
        onRateColor={rateColor}
      />;
    </>
  )



}


export default App;
