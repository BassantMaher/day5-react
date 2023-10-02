import React from "react";
import './header.css';
// extends da inheritance ben inherit component leel class f yeb2a component mesh class
class Header extends React.Component{
    render(){
        return <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    }
}

export default Header;