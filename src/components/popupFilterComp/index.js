import './index.css'
import {useState} from 'react';

const PopupFilterComp = (props)=> {
    const {handleFilterOptions , filterOptionsList , sentSelectedOption} = props;
    const [showPopup , setShowPopup] = useState(false);
    const handleFiltering = (selectedOption)=> {
        handleFilterOptions(selectedOption);
        setShowPopup(false);
    }

    return (
        <>
        <div className = "filterContainerWithBtn">
        <button type = "button" onClick = {()=>{setShowPopup(!showPopup)}} className = "filterCompButton">
            Filter
        </button>
        <p>{''?'' :  sentSelectedOption}</p>
        </div>
        <div className = {`popupContainer ${showPopup? 'showPopup' : 'hidePopup' } `}>
            <button onClick = {()=>{setShowPopup(false)}} className = "closingPopupBtn">Close</button>
            <ul>
                {
                    filterOptionsList.map((eachoption , index)=>(<li key = {`filter_${eachoption}`}><button onClick = {()=>{handleFiltering(eachoption)}} type = "button">{eachoption}</button></li>))
                }
            </ul>
        </div>
        </>
    )
}

export default PopupFilterComp;