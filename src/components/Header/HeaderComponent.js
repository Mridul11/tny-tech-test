import React from "react"
import "./HeaderComponent.scss";
import { Link } from "react-router-dom";

const HeaderComponent = () => <div
    className="ui fixed inverted menu homepage-header" >
    <div className="ui container">
        <Link to="/" className="header item" data-testid="header-start">
            THE NEWYORKER
        </Link>
        <div className="item right">
            <Link to="/" className="item">FEED</Link>
            <Link to="/" className="item">AUTHORS</Link>
            <Link to="/" className="item">EXPLORE</Link>
            <Link to="/" className="item">BLOG</Link>
            <Link to="/" className="item">CONTACT</Link>
        </div>
    </div>
</div>

export default HeaderComponent;

