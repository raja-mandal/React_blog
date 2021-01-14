import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {   
 
    let localData = JSON.parse( localStorage.getItem('userData') )
    console.log(localData)
    
    console.log(JSON.stringify(localData), 'localstorage');

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <h4>Welcome, &nbsp;{localData.full_name}</h4>
                    {/* <a className="navbar-brand" href="#">
                        <Link to="/login">Log out</Link>
                    </a> */}
                </div>
            </nav>
        </>
    )
}




export default Header;