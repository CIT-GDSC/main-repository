import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <span>Coast Institute of Technology</span>
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
