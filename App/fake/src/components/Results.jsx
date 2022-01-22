import React from 'react';
import Overall from './Overall';
import Para from './Para';
import "../static/css/results.css"
import { useLocation, useNavigate } from "react-router-dom"
import back from '../static/images/back.png'

const Results = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {overall, probs} = location.state;
    const handleClick = () => {
        navigate("/")
    }
    return (
        <div className='results-container'>
            <div className="button" onClick={handleClick}><img src={back} style={{width: '60px'}}/></div>
            <div className='top-section'>
                <h1>Results</h1>
            </div>
            <Overall score={overall}></Overall>
            {probs.map((item) => (<Para {...item}></Para>))}
        </div>
    )
}
 
export default Results;