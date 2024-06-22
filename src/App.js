import PieChartComponent from './components/WholeVisualPage';
import './App.css';


const data = [
  {
      "pestle": "Social",
      "averageRelevance": 3,
      "averageIntensity": 9
  },
  {
      "pestle": "Political",
      "averageRelevance": 3,
      "averageIntensity": 12
  },
  {
      "pestle": "Economic",
      "averageRelevance": 4,
      "averageIntensity": 24.9
  },
  {
      "pestle": "Technological",
      "averageRelevance": 3.5,
      "averageIntensity": 14
  },
  {
      "pestle": "Industries",
      "averageRelevance": 3.6,
      "averageIntensity": 12.8
  },
  {
      "pestle": "Environmental",
      "averageRelevance": 3.2,
      "averageIntensity": 11
  }
];

function App() {
  return (
    <div className="App">
      <PieChartComponent data = {data}/>
    </div>
  );
}

export default App;
