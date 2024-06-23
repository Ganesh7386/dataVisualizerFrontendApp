import {Link} from 'react-router-dom'


const Home = ()=>(
    <div>
        <h1>Welcome to analyser</h1>
        <h1>Click below links for getting analysis</h1>
        <ul>
            <li><Link to = "/year">Year Wise Filter</Link></li>
            <li><Link to = "/topic">Topic wise Filter</Link></li>
        </ul>
    </div>
)

export default Home;