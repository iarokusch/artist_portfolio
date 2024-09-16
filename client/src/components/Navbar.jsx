import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (<>
        <div className='iconname'><Link to='/'>KUSCH</Link></div>
        <div className='navbar'>

            <div className='navigator'>
                <ul>
                    <li><Link to="/works">WORKS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    {/* <li><Link to="/other">OTHER</Link></li> */}
                    <li><Link to="/projects">PROJECTS</Link></li>

                </ul>
            </div>
        </div>
    </>
    )
}

export default Navbar