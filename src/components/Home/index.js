import YearBasedFilterComp from '../YearWiseFilterComp';
import TopicWiseFilterComp from '../TopicWiseFilterComp';
import SectorFilterComp from '../SectorFilterComp';
import RegionFilterComp from '../RegionFilterComp';
import LandingHomePageComp from '../LandingHomePageComp';
import {Routes , Route} from 'react-router-dom'
import NavBar from '../NavBar';
import './index.css'
import AddingData from '../AddingData';
// import { SocketContextProvider , SocketContext} from '../Contexts/SocketContext';
import { SocketContextProvider } from '../Contexts/SocketContext';

const Home = ()=>(
    <SocketContextProvider>
    <div className = "overAllAppContainer">
        <NavBar/>
        <div className = "mainAllPagesStatsContainer">
        <Routes>
        <Route path = "/" element = {<LandingHomePageComp/>} />
        <Route path = "/year" element = {<YearBasedFilterComp/>}  />
        <Route path = "/topic" element = {<TopicWiseFilterComp/>}  />
        <Route path = "/sector" element = {<SectorFilterComp/>} />
        <Route path = "/region" element = {<RegionFilterComp/>} />
        <Route path = "/adding" element = {<AddingData/>} />
        </Routes>
        </div>
    </div>
    </SocketContextProvider>
)

export default Home;