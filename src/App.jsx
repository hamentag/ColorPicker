import { useState } from 'react'

const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={`${color}`}
      onClick={(event) => {
        setSelectedColor(color);
        document.querySelectorAll('#colors-list div').forEach(el => {
          if(el.className.includes(' selected'))
            el.className = el.className.replace(' selected', '');
          else if(el == event.target)
            el.className += ' selected';
        });
      }}    
     ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [isSelected, setSelected] = useState(false);

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
