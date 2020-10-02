import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className='navbar-brand'>To-Do-App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Tasks</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create-Task</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
