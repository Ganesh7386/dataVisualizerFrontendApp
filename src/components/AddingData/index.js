import {useState , useEffect , useContext} from 'react';
// import {io} from 'socket.io-client';
import { SocketContext } from '../Contexts/SocketContext';

const AddingData = ()=> {
    // const [end_year , setEndYear] = useState('');
    // const [likelihood , setLikelihood] = useState('');
    const {socket} = useContext(SocketContext);
    const [msg , setMsg] = useState('');
    // const [text , setText] = useState("")
    // const [title , setTitle] = useState('');
    // const [source , setSource] = useState('')
    // const [pestle , setPestle] = useState('')
    // const [relevance , setRelevance] = useState('')
    // const [published , setPublisher] = useState('')
    // const [country] = useState('')
    // const [added] = useState('')
    // const [impact] = useState('');
    // const [start_year] = useState('')
    // const [region] = useState('')
    // const [url] = useState('')
    // const [insight] = useState('')
    // const [topic] = useState('')
    // const [sector] = useState('')
    // const [intensity] = useState('')
    const [info , setInfo] = useState({end_year : 0 ,likelihood : 0 , text : '' ,intensity : '',sector : '' , topic : '' , insight : '', url : '',region : '' , start_year : 0 , impact : '' , added : '' , country:'',published: '' , relevance: '', pestle : '' , source : '' , title : ''  });

    // const handleJoiningRoom = () => {
    //     const email = "puttaganesh";
    //     const name = "ganesh";
    //     socket.emit('join-room', {email, name}) // Emit 'join-room' event with data
    //   }

    useEffect(() => {
        try {
            socket.on("receiveMsgAfterJoin" , (msg)=> {
                console.log(msg);
                setMsg(msg);
            })
        }
        catch(e) {
            console.log(e.message);
        }
    }, [socket]);

    const handleSendingData = ()=> {
        console.log(info);
        socket.emit("sendData" , info);
    }

    return (
        <div style = {{color : 'white'}}><h1>This is data adding page</h1>
            <div><label>end_year</label></div>
            <input type = "text" onChange = {(e)=>{info.end_year = e.target.value;setInfo(info)}}  />
            <div><label>likelihood</label></div>
            <input type = "text" onChange = {(e)=>{info.likelihood = e.target.value;setInfo(info)}}  />
            <div><label>text</label></div>
            <input type = "text" onChange = {(e)=>{info.text = e.target.value;setInfo(info)}}  />
            <div><label>intensity</label></div>
            <input type = "text" onChange = {(e)=>{info.intensity = e.target.value;setInfo(info)}}  />
            <div><label>sector</label></div>
            <input type = "text" onChange = {(e)=>{info.sector = e.target.value;setInfo(info)}}  />
            <div><label>topic</label></div>
            <input type = "text" onChange = {(e)=>{info.topic = e.target.value;setInfo(info)}}  />
            <div><label>insight</label></div>
            <input type = "text" onChange = {(e)=>{info.insight = e.target.value;setInfo(info)}}  />
            <div><label>url</label></div>
            <input type = "text" onChange = {(e)=>{info.url = e.target.value;setInfo(info)}}  />
            <div><label>region</label></div>
            <input type = "text" onChange = {(e)=>{info.region = e.target.value;setInfo(info)}}  />
            <div><label>start_year</label></div>
            <input type = "text" onChange = {(e)=>{info.start_year = e.target.value;setInfo(info)}}  />
            <div><label>impact</label></div>
            <input type = "text" onChange = {(e)=>{info.impact = e.target.value;setInfo(info)}}  />
            <div><label>added</label></div>
            <input type = "text" onChange = {(e)=>{info.added = e.target.value;setInfo(info)}}  />
            <div><label>country</label></div>
            <input type = "text" onChange = {(e)=>{info.country = e.target.value;setInfo(info)}}  />
            <div><label>published</label></div>
            <input type = "text" onChange = {(e)=>{info.published = e.target.value;setInfo(info)}}  />
            <div><label>relevance</label></div>
            <input type = "text" onChange = {(e)=>{info.relevance = e.target.value;setInfo(info)}}  />
            <div><label>pestle</label></div>
            <input type = "text" onChange = {(e)=>{info.pestle = e.target.value;setInfo(info)}}  />
            <div><label>source</label></div>
            <input type = "text" onChange = {(e)=>{info.source = e.target.value;setInfo(info)}}  />
            <div><label>title</label></div>
            <input type = "text" onChange = {(e)=>{info.title = e.target.value;setInfo(info)}}  />
            <div></div>
            <button type = "button" onClick = {handleSendingData} >sendData</button>
            <p>{msg}</p>
        </div>
    )
}

export default AddingData;