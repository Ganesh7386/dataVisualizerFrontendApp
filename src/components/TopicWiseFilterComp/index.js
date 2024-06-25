import {useState , useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , PieChart, Pie, Cell } from 'recharts';
import PopupFilterComp from '../popupFilterComp';
import './index.css';

const topicsList = [
    'bank',
    'biofuel',
    'car',
    'change',
    'city',
    'climate',
    'coal',
    'economic growth',
    'economy',
    'election',
    'electricity',
    'emission',
    'energy',
    'export',
    'finance',
    'food',
    'gas',
    'gasoline',
    'gdp',
    'growth',
    'ice',
    'infrastructure',
    'market',
    'oil',
    'population',
    'power',
    'production',
    'security',
    'shale gas',
    'strategy',
    'trade',
    'unemployment',
    'workforce'
  ]


const TopicWiseFilterComp = ()=>{
    const [topic , setTopic] = useState("gas");
    const [data1 , setData1] = useState([]);
    const [data2 , setData2] = useState([]);

    useEffect(()=> {

        const getYearWiseStatsByTopic = async ()=> {
            const dataPromise =  await fetch(`http://localhost:5001/avgIntensity-avgRelevance-forGivenTopic/${topic}/`);
            const jsonData = await dataPromise.json();
            const reqData1 = jsonData.data[0].averageByEndYear;
            setData1(reqData1);
            const reqData2 = jsonData.data[0].countByCountry;
            setData2(reqData2);
            console.log(reqData1);
            console.log(reqData2);
        }

        getYearWiseStatsByTopic();

    },[topic])

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

    const handleFilteringOption = (filterOption)=> {
      setTopic(filterOption);
    }

    return (
        <div className = "topicWiseFilterWholePage">
        <PopupFilterComp filterOptionsList = {topicsList} handleFilterOptions = {handleFilteringOption} sentSelectedOption = {topic}  />
            {/* <div className = "buttonsContainer">
                <ul className = "ulButtons">
                    {
                        topicsList.map((eachTopic , index)=>(<li key = {`eachTopic_${index}`}><button type = "button" className = "btnStyling" onClick = {()=>{setTopic(eachTopic)}} >{eachTopic}</button></li>))
                    }
                </ul>
            </div> */}
              <div className = "allStatsCont">
            <div className = "graphParent">
    <ResponsiveContainer className = "allChartsstyling"  width = "100%" height = {300}>
      <BarChart width = "100%" height={300} data={data1} margin={{top: 5, right: 2, left: 0, bottom: 0,}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="endYear" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="averageRelevance" fill="#8884d8" />
      <Bar dataKey="averageIntensity" fill = "pink" />
      </BarChart>
    </ResponsiveContainer>
    <p>The above data is avg of both relevance and intensity of each year in a selected topic</p>
    </div>
    <ResponsiveContainer className = "allChartsstyling" width = "100%" height = {600}>
    <PieChart width = {500}  height={600}>
    <Pie
      data={data2}
      cx={200}
      cy={300}
      innerRadius={100}
      outerRadius={150}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="count"
      nameKey="country"
    >
      {
        data2.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={generateRandomColor()} />
        ))
      }
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
  </ResponsiveContainer>
        </div>
        </div>
    )

}

export default TopicWiseFilterComp;