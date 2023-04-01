import './App.css';

let name = 'sohaib';
let currentYear = new Date().getFullYear();

function App() {
  return (
    <div>
      
      <p>Created by {name}</p>
      <p>Copyright © {currentYear}</p>

      <h3>below i have inserted 3 div's of the same sizes</h3>
      <div className="firstDiv" style={{ height: 200, width: 200, backgroundColor: 'red' }}></div>
      <div className="secondDiv" style={{ height: 200, width: 200, backgroundColor: 'green' }}></div>
      <div className="thirdDiv" style={{ height: 200, width: 200, backgroundColor: 'blue' }}></div>
    </div>
  );
}

export default App;
