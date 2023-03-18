import React from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.webp'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt="" />
                </div>
                <div className="logo-text">
                    <span>Coast Institute of Technology</span>
                </div>
            </div>
            <div className="items">
                <span>Overview</span>
                <span>Technologies</span>
                <span>Learn</span>
                <span>Projects</span>
                <span>Workshops</span>
                <span>Teams</span>
                <span>Blog</span>
            </div>
            <div className="event-btn">
                <button className="events">Events</button>
            </div>
        </div>
    )
}

export default Navbar
