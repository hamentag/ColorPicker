import { useState } from 'react'

const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

/* or using object deconstruction */
// const Color = ({color}) => {
//   return <div className={color}></div>
// }

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="violet" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
