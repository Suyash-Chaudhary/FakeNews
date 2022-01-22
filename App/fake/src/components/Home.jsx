import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import "../static/css/home.css";
import bg from'../static/images/bg.png';
import axios from "axios";
import { useNavigate  } from "react-router-dom"

const url = "http://localhost:5000/api/analyze";
const title_style = {
    alignSelf: 'center',
    fontSize: '40px',
    margin: '10px',
    padding: '10px'
};

const input_style = {
    width: '100%',
    borderRadius: '9px',
    textAlign: 'center',
    border: 'none'
}

const Home = () => {
    const navigate = useNavigate();
    const [form, handleChange] = useForm({type: "url", url: "", text: ""})

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, form).then(res => { console.log(res.data); navigate("/results", {state: res.data}) });
    }

    return ( 
    <div className='home-container' styles={{ backgroundImage:`url(${bg})` }}>
        <div className='heading'>News Article Analysis</div>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                {form["type"] == "url" && <div style={title_style}>Enter the URL</div>}
                {form["type"] == "text" && <div style={title_style}>Enter the Text</div>}
                {form["type"] == "url" && <input style={input_style} placeholder="http://example.com" type="text" name="url" value={form["url"]} onChange={handleChange}></input>}
                {form["type"] == "text" && <textarea cols="100" rows="10" style={input_style} placeholder="Enter the text" type="text" name="text" value={form["text"]} onChange={handleChange}></textarea>}
                <select style={{ ...input_style, marginTop: '15px', alignSelf: 'center', width: '7vw'}} name="type" onChange={handleChange}>
                    <option value="url">URL</option>
                    <option value="text">Text</option>
                </select>
                <button style={{margin: '15px', width: '12vw', alignSelf: 'center'}} type="submit" className="btn btn-warning">Check</button>
            </form>
        </div>
    </div>
    );
}
 
export default Home;