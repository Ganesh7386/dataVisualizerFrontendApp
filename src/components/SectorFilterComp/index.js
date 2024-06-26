import {act, useEffect, useState} from 'react';
import { ResponsiveContainer, BarChart,Bar,LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import PopupFilterComp from '../popupFilterComp';
import './index.css';

const listOfSectors = ['Aerospace & defence','Automotive',
'Construction','Energy', 'Environment',
'Financial services',     'Food & agriculture',
'Government',             'Healthcare',
'Information Technology', 'Manufacturing',
'Media & entertainment',  'Retail',  'Support services',
'Tourism & hospitality',  'Transport',
'Water'
  ]

const data =   [
    {
        "country": "burkina faso",
        "avgWeightedLikelihood": 2
    },
    {
        "country": "china",
        "avgWeightedLikelihood": 3
    },
    {
        "country": "germany",
        "avgWeightedLikelihood": 4
    },
    {
        "country": "iran",
        "avgWeightedLikelihood": 2.4
    },
    {
        "country": "japan",
        "avgWeightedLikelihood": 2
    },
    {
        "country": "lebanon",
        "avgWeightedLikelihood": 3
    },
    {
        "country": "russia",
        "avgWeightedLikelihood": 4
    },
    {
        "country": "south africa",
        "avgWeightedLikelihood": 4
    }
]

const data1 = [
    {
        "country": "japan",
        "averageRelevance": 2,
        "averageIntensity": 4
    },
    {
        "country": "china",
        "averageRelevance": 2,
        "averageIntensity": 6
    },
    {
        "country": "south africa",
        "averageRelevance": 5,
        "averageIntensity": 20
    },
    {
        "country": "germany",
        "averageRelevance": 2,
        "averageIntensity": 8
    },
    {
        "country": "lebanon",
        "averageRelevance": 2,
        "averageIntensity": 6
    },
    {
        "country": "burkina faso",
        "averageRelevance": 2,
        "averageIntensity": 4
    },
    {
        "country": "russia",
        "averageRelevance": 4,
        "averageIntensity": 16
    },
    {
        "country": "iran",
        "averageRelevance": 2.5,
        "averageIntensity": 6
    }
]

const SectorFilterComp = ()=> {
    const [likelihoodRelatedData,setLikelihoodRelatedData] = useState([]);
    const [avgRelIntensityData , setAvgRelIntensityData] = useState([]);
    const [sector , setSector] = useState(listOfSectors[0]);

    const getStats = async ()=> {
        const promiseObj = await fetch(`https://coffsblackbackend.vercel.app/avgWeightedLikelihood-in-each-country-for-given-sector/${sector}`);
        const requiredData = await promiseObj.json();
        const actualData = requiredData.data;

        const weightedLikelihoodRelatedData = actualData[0].weightedLikeLihoodRelatedData;
        console.log(weightedLikelihoodRelatedData);

        const avgRelevanceIntensityRelatedData =actualData[0].avgRelevanceIntensityRelatedData;
        console.log(avgRelevanceIntensityRelatedData);

        setLikelihoodRelatedData(weightedLikelihoodRelatedData);
        setAvgRelIntensityData(avgRelevanceIntensityRelatedData);
    }
    // getStats();

    useEffect(()=> {
        getStats();
    },[sector]);

    const handleFltering = (choosenSector)=> {
        setSector(choosenSector);
    }

    return (
    <div className = "wholePage">
    <PopupFilterComp filterOptionsList = {listOfSectors} handleFilterOptions = {handleFltering} sentSelectedOption = {sector} />
    <div className = "sectorRelatedPageContainer">
    <div className = "lineChartContainer">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={likelihoodRelatedData} margin = {{top : 10 , left : 10 , right : 30 , bottom : 10}}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="avgWeightedLikelihood" strokeWidth={4} stroke="green" dot={{ stroke: 'blue', strokeWidth: 3, fill: 'red' }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
    <div className = "lineChartContainer">
        <ResponsiveContainer width = "100%" height = {300} >
        <BarChart data={avgRelIntensityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="averageRelevance" fill="#8884d8" />
                <Bar dataKey="averageIntensity" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    </div>
        </div>
    </div>)

}

export default SectorFilterComp;