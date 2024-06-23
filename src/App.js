import {BrowserRouter , Routes , Route , Link} from 'react-router-dom';

import YearBasedFilterComp from './components/YearWiseFilterComp';
import TopicWiseFilterComp from './components/TopicWiseFilterComp/index'
import Home from './components/Home/index'
import './App.css';


// const data = [
//   {
//       "pestle": "Social",
//       "averageRelevance": 3,
//       "averageIntensity": 9
//   },
//   {
//       "pestle": "Political",
//       "averageRelevance": 3,
//       "averageIntensity": 12
//   },
//   {
//       "pestle": "Economic",
//       "averageRelevance": 4,
//       "averageIntensity": 24.9
//   },
//   {
//       "pestle": "Technological",
//       "averageRelevance": 3.5,
//       "averageIntensity": 14
//   },
//   {
//       "pestle": "Industries",
//       "averageRelevance": 3.6,
//       "averageIntensity": 12.8
//   },
//   {
//       "pestle": "Environmental",
//       "averageRelevance": 3.2,
//       "averageIntensity": 11
//   }
// ];

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className = "sideBar">
    <ul>
      <li><Link className = "linksStyling" to = "/year">Years</Link></li>
      <li><Link className = "linksStyling" to = "/topic">Topic</Link></li>
    </ul>
    </div>
    <div className = "mainContentContainer">
    <Routes>
    <Route path = "/year" element = {<YearBasedFilterComp/>}  />
    <Route path = "/topic" element = {<TopicWiseFilterComp/>}  />
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
