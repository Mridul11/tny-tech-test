import React from "react";
import styled from "styled-components";
import "./FooterComponent.scss";

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

const FooterComponent = () => <div
    style={{
        marginTop:20,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    }}
    className="ui inverted vertical footer segment">
    
        <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
                <h4 className="ui inverted header">About</h4>
                <div className="ui inverted link list">
                    <a href="#" className="item">Sitemap</a>
                    <a href="#" className="item">Contact Us</a>
                </div>
            </div>
            <div className="three wide column">
                <h4 className="ui inverted header">Services</h4>
                <div className="ui inverted link list">
                    <a href="#" className="item">How To Access</a>
                    <a href="#" className="item">Favorite X-Men</a>
                </div>
            </div>
            <div className="seven wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
        </div>
</div>
export default FooterComponent;