import './Navigation.css'
import React from 'react'
import Button from './Button'

function Nav(){
    return(
        <div>
            <nav>
                <a href="#" className='logo'>CarVenture</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cars</a></li>
                    <li><a href="#">Offers</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <Button Text={"Sign Up"}/>
            </nav>
        </div>
    )
}

export default Nav