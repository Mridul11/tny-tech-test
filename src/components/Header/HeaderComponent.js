import React from "react"
import "./HeaderComponent.scss";
import { Link } from "react-router-dom";

const HeaderComponent = () => <div
    className="ui fixed inverted menu homepage-header">
    <div className="ui container">
        <Link to="/" className="header item">
            THE NEWYORKER
        </Link>
        <div className="item right">
            <a href="#" className="item">FEED</a>
            <a href="#" className="item">AUTHORS</a>
            <a href="#" className="item">EXPLORE</a>
            <a href="#" className="item">BLOG</a>
            <a href="#" className="item">CONTACT</a>
        </div>
    </div>
</div>

export default HeaderComponent;

