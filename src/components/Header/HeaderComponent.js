import React from "react"
import "./HeaderComponent.scss";

const HeaderComponent = () => <div
    className="ui fixed inverted menu homepage-header"
>
    <div className="ui container">
        <a href="#" className="header item">
            Conde Nast Assignment
        </a>
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

