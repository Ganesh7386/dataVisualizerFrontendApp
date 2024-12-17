import {useState , useEffect} from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend , Line , LineChart} from 'recharts';
import PopupFilterComp from '../popupFilterComp';

import './index.css'

const regionsList = ['Africa',
    'Asia',            'Central Africa',
    'Central America', 'Central Asia',
    'Eastern Africa',  'Eastern Asia',
    'Eastern Europe',  'Europe',
    'Northern Africa', 'Northern America',
    'Northern Europe', 'Oceania',
    'South America',   'South-Eastern Asia',
    'Southern Africa', 'Southern Asia',
    'Southern Europe', 'Western Africa',
    'Western Asia',    'Western Europe',
    'World',           'world'
  ]

//   const data1 = [
//     {
//         "topic": "administration",
//         "averageIntensity": 6,
//         "averageRelevance": 2
//     },
//     {
//         "topic": "coal",
//         "averageIntensity": 16,
//         "averageRelevance": 4
//     },
//     {
//         "topic": "consumption",
//         "averageIntensity": 6,
//         "averageRelevance": 2
//     },
//     {
//         "topic": "economic growth",
//         "averageIntensity": 6,
//         "averageRelevance": 3
//     },
//     {
//         "topic": "economy",
//         "averageIntensity": 16,
//         "averageRelevance": 4
//     },
//     {
//         "topic": "election",
//         "averageIntensity": 9,
//         "averageRelevance": 3
//     },
//     {
//         "topic": "emission",
//         "averageIntensity": 16,
//         "averageRelevance": 4
//     },
//     {
//         "topic": "energy",
//         "averageIntensity": 9.8,
//         "averageRelevance": 3.1
//     },
//     {
//         "topic": "export",
//         "averageIntensity": 22.9,
//         "averageRelevance": 3.3
//     },
//     {
//         "topic": "gas",
//         "averageIntensity": 8.5,
//         "averageRelevance": 2.8
//     },
//     {
//         "topic": "gdp",
//         "averageIntensity": 16,
//         "averageRelevance": 4
//     },
//     {
//         "topic": "greenhouse gas",
//         "averageIntensity": 12,
//         "averageRelevance": 4
//     },
//     {
//         "topic": "growth",
//         "averageIntensity": 16,
//         "averageRelevance": 3.3
//     },
//     {
//         "topic": "interest rate",
//         "averageIntensity": 5,
//         "averageRelevance": 2
//     },
//     {
//         "topic": "investment",
//         "averageIntensity": 6,
//         "averageRelevance": 2
//     },
//     {
//         "topic": "market",
//         "averageIntensity": 9,
//         "averageRelevance": 3
//     },
//     {
//         "topic": "oil",
//         "averageIntensity": 11,
//         "averageRelevance": 3.2
//     },
//     {
//         "topic": "policy",
//         "averageIntensity": 7,
//         "averageRelevance": 3
//     },
//     {
//         "topic": "production",
//         "averageIntensity": 15.5,
//         "averageRelevance": 3
//     },
//     {
//         "topic": "shortage",
//         "averageIntensity": 6,
//         "averageRelevance": 2
//     },
//     {
//         "topic": "strategy",
//         "averageIntensity": 24,
//         "averageRelevance": 6
//     },
//     {
//         "topic": "technology",
//         "averageIntensity": 6,
//         "averageRelevance": 2
//     },
//     {
//         "topic": "trade",
//         "averageIntensity": 6,
//         "averageRelevance": 2
//     }
// ]




const RegionFilterComp = ()=> {
    const [region , setRegion] = useState(regionsList[0]);
    const [avgIntRelevanceForEachTopicData , setAvgIntRelevanceForEachTopicData] = useState([]);
    const [avgRelevanceIntensityForEachSectorRelatedData , setAvgRelevanceIntensityForEachSectorRelatedData] = useState([])
    const [noOfSourcesRelatedData , setNoOfSourcesRelatedData] = useState([])
    const [averageLikelihoodForEachTopiceRelatedData , setAverageLikelihoodForEachTopiceRelatedData] = useState([])


    const getStatsForSelectedRegion = async ()=> {
        try {
    const promiseData = await fetch(`https://coffsblackbackend.vercel.app/stats-according-to-given-region/${region}`);
            // console.log(promiseData);
            const jsonData = await promiseData.json();
            const actalData = jsonData.data;
            console.log(actalData)

            const avgIntRelevanceDataForTopic = actalData[0].avgRelevanceIntensityForEachTopicRelatedData;
            console.log(avgIntRelevanceDataForTopic);
            setAvgIntRelevanceForEachTopicData(actalData[0].avgRelevanceIntensityForEachTopicRelatedData);
            
            const avgIntRelevanceForEachSectorData = actalData[0].avgRelevanceIntensityForEachSectorRelatedData;
            console.log(avgIntRelevanceForEachSectorData);
            setAvgRelevanceIntensityForEachSectorRelatedData(actalData[0].avgRelevanceIntensityForEachSectorRelatedData);
            

            const noOfSourcesData = actalData[0].noOfSourcesRelatedData;
            console.log(noOfSourcesData);
            setNoOfSourcesRelatedData(actalData[0].noOfSourcesRelatedData);


            const avgLikelihoodForEachTopicData = actalData[0].averageLikelihoodForEachTopiceRelatedData;
            console.log(avgLikelihoodForEachTopicData);
            setAverageLikelihoodForEachTopiceRelatedData(actalData[0].noOfSourcesRelatedData);

        }
        catch(e) {
            console.log(e.message);
        }
        
    }

    useEffect(()=> {
        getStatsForSelectedRegion();
    } , [region])


    const handleSelectingRegion = (givenRegion)=> {
        setRegion(givenRegion);
    }

    return (
        <div className = "regionFilterWholePage">
        <PopupFilterComp  filterOptionsList = {regionsList} handleFilterOptions = {handleSelectingRegion} sentSelectedOption = {region}  />
            <div className = "EachGraphContainer">
            <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={avgIntRelevanceForEachTopicData} 
        margin={{ top: 10, right: 25, left: 25, bottom: 10 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="topic" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar  dataKey="averageIntensity" fill="#8884d8" />
        <Bar dataKey="averageRelevance" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
            </div>
            <div className = "EachGraphContainer">
            <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={avgRelevanceIntensityForEachSectorRelatedData} 
        margin={{ top: 10, right: 25, left: 25, bottom: 10 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar  dataKey="averageIntensity" fill="#8884d8" />
        <Bar dataKey="averageRelevance" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
            </div>
            <div className='EachGraphContainer'>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={noOfSourcesRelatedData} margin = {{top : 10 , left : 30 , right : 30 , bottom : 10}}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="source" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="countOfEachSource" strokeWidth={4} stroke="green" dot={{ stroke: '', strokeWidth: 3, fill: 'red' }} />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


export default RegionFilterComp;