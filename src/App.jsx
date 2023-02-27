import { useState } from 'react'
import Card from './components/Card/Card'
import framewords from './assets/data.json'
import './App.css'


function App() {
  const [indexVisibleFramework, setFrameworkVisible] = useState(0);

  const changeFramework = () => {
    const newFramewordVisible = indexVisibleFramework + 1;
    
    if (newFramewordVisible > framewords.length - 1) setFrameworkVisible(0);
    else setFrameworkVisible(newFramewordVisible);
  }

  return (
    <div className="App">
      <h1>Frameworks de JavaScript</h1>
      <Card
      framework={framewords[indexVisibleFramework]}
      changeFramework={changeFramework}
      />
    </div>
  );
}

export default App
