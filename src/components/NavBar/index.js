import './index.css';
import {Link} from 'react-router-dom'
import {useState} from 'react'

const NavBar = ()=> {

    const [showOptions , setShowOptions] = useState(false)
    return (
    <>
    <div className  = "NavbarContainer">
            <button type = "button" className = "navBarSmallDevicesCategoryBtn" onClick = {()=> {setShowOptions(!showOptions)}} >category</button>
    </div>
    <div className = {`dropdownContainer ${showOptions? 'dropping' : 'closing'} `}>
        <ul>
        <li><button type = "button" onClick = {()=>{setShowOptions(!showOptions)}}><Link to = "/">Home</Link></button></li>
        <li><button type = "button" onClick = {()=>{setShowOptions(!showOptions)}}><Link to = "/year">Year</Link></button></li>
        <li><button type = "button" onClick = {()=>{setShowOptions(!showOptions)}}><Link to = "/topic">Topic</Link></button></li>
        <li><button type = "button" onClick = {()=>{setShowOptions(!showOptions)}}><Link to = "/sector">Sector</Link></button></li>
        <li><button type = "button" onClick = {()=>{setShowOptions(!showOptions)}}><Link to = "/region">Region</Link></button></li>
        </ul>
    </div>
        <div className  = "largeDevicesSideBar">
            <ul>
                <li><Link to = "/"><button className = "largeDeviceLeftTabsBtn" type = "button">Home</button></Link></li>
                <li><Link to = "/year"><button  className = "largeDeviceLeftTabsBtn" type = "button">Year</button></Link></li>
                <li><Link to = "/topic"><button className = "largeDeviceLeftTabsBtn" type = "button">Topic</button></Link></li>
                <li><Link to = "/sector"><button className = "largeDeviceLeftTabsBtn" type = "button">Sector</button></Link></li>
                <li><Link to = "/region"><button className = "largeDeviceLeftTabsBtn" type = "button">Region</button></Link></li>
            </ul>
        </div>
    </>
)
}
export default NavBar;