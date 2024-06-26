import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PopupFilterComp from '../popupFilterComp';
import {useState} from 'react';
import './index.css'

const yearsArr = [2026,2024,2036,2016,2041,2017,2030,2019,2040,2035,2046,2022,2027 ,2025,2021,2126,2018,2050,2055];

const YearBasedFilterComp = (props) => {
  const [data1 , setData1] = useState([]);
  const [data2 , setData2] = useState([])
  const [selectedYear , setSelectedYear] = useState(2026);

  useEffect(()=> {
    console.log("use effect called");
    const makeCall = async ()=> {
      const url = `https://coffsblackbackend.vercel.app/pestle-vs-avgrelevance-in-given-end-year/${selectedYear}`;
    const gotPromise = await fetch(url);
    const jsonData = await gotPromise.json();
    const actualData = jsonData.data;
    const byPestleData = actualData[0].byPestle;
    const bySectorData = actualData[0].bySector;
    console.log(byPestleData);
    console.log(bySectorData);
    setData1(byPestleData);
    setData2(bySectorData);
    }

    makeCall();
    
  } , [selectedYear])

  const handleSettingFilter = (selectedFilterOption)=> {
    setSelectedYear(selectedFilterOption);
  }


  return (
    <div className = "graphContainer">
    <PopupFilterComp filterOptionsList = {yearsArr} handleFilterOptions = {handleSettingFilter} sentSelectedOption = {selectedYear}  />
    <div className = "InnerContainer">
    {/* <div className = "temp">
      <ul>
        {
          yearsArr.map((eachYear,index)=>(<button key = {`btn_${index}`} onClick = {()=>{setSelectedYear(eachYear)}} type = "button">{eachYear}</button>))
        }
      </ul>
    </div> */}
    <div className  = "entireGraphContainer">
    <div className = "graphParent">
    <ResponsiveContainer  width = "100%" height = {300}>
      <BarChart width = "100%" height={300} data={data1} margin={{top: 5, right: 2, left: 0, bottom: 0,}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="pestle" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="averageRelevance" fill="#8884d8" />
      <Bar dataKey="averageIntensity" fill = "pink" />
      </BarChart>
    </ResponsiveContainer>
    <p>The above data is avg of both relevance and intensity of each pestle in a selected year</p>
    </div>
    <div className = "graphParent">
    <ResponsiveContainer  width = "100%" height = {300}>
      <BarChart width = "100%" height={300} data={data2} margin={{top: 5, right: 2, left: 0, bottom: 0,}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sector" tick={{ fill: 'orange' }} />
      <YAxis tick={{ fill: 'orange' }} />
      <Tooltip cursor= {{fill : 'lightblue'}} contentStyle={{ backgroundColor: 'pink', borderColor: 'orange' }} />
      <Bar dataKey="averageRelevance" fill="#BB86FC" />
      <Bar dataKey="averageIntensity" fill = "#BF0000" />
      </BarChart>
    </ResponsiveContainer>
    <p>The above data is avg of both relevance and intensity of each pestle in a selected year</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default YearBasedFilterComp;
