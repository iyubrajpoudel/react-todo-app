import React from 'react'
import "./Home.css"
import Input from '../../components/input/Input'
import Tasks from './../../components/tasks/Tasks';
import icon from "./assets/images/icon.png"

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="row title">
                        <h1>To-Do List</h1>
                        {/* <img src="/icon.png" className='icon' alt="icon" /> */}
                        <img src={icon} className='icon' alt="icon" />
                    </div>
                    <div>
                        <Input />
                    </div>
                    <div>
                        <Tasks />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home