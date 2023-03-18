import React from 'react'
import './Home.scss'
import Image from '../../assets/googledevss.png'

export const Home = () => {
    return (
        <div className='container' id='home'>
            <section className="content">
                <div className="header">
                    <h3>Developer Student Clubs</h3>
                    <span>Coast Institute Of Technology</span>
                    <div className="text">
                        <p class="lead">Developer Student Clubs is a
                            <first-letter> G</first-letter><third-letter>o</third-letter><second-letter>o</second-letter><first-letter>g</first-letter><forth-letter>l</forth-letter><third-letter>e</third-letter>
                             Developers program for university students to learn
                            <second-letter> mobile </second-letter>
                             and
                            <first-letter> web development skills</first-letter>
                            ,
                            <third-letter> design thinking skills </third-letter>
                            and
                            <forth-letter> leadership skills.</forth-letter>
                        </p>
                        <button className="member">
                            <a href="#">Join Us</a>
                        </button>
                    </div>
                </div>
                <div className="home-image">
                    <img src={Image} alt="" />
                </div>
            </section>
        </div>
    )
}

