import './Search.css'
import React from 'react'
import Button from './Button'

function Search(){
    return(
        <div>
            <div className="search-container">
                <label htmlFor="">PICK UP LOCATION</label>
                <select name="" id="">
                    <option value="">Select Location</option>
                </select>
                <label htmlFor="">PICK UP DATE</label>
                <select name="" id="">
                    <option value="">Select Date</option>
                </select>
                <label htmlFor="">RETURN DATE</label>
                <select name="" id="">
                    <option value="">Select Date</option>
                </select>
            </div>
            <Button Text={"Search For Cars"}/>
        </div>
    )
}

export default Search