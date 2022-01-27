import Card from './components/Card';
import Navbar from './components/Navbar'
import data from './data'
import './App.css';

function App() {
  const cardData = data.map(item => {
    return (
      <div>
      <Card
        key={item.title}
        item={item}
      />
      <hr></hr>
      </div>
    )
  })
  return (
    <div className="App">
      <Navbar />
      {cardData}
    </div>
  );
}

export default App;
