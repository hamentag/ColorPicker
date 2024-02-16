import { useState } from 'react'

const Color = ({color,selectedColor, setSelectedColor}) => {
  return (
    <div className={color === selectedColor? color + ' selected' : color} 
  onClick={()=>setSelectedColor(color)}  
  >
  </div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("gray");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
