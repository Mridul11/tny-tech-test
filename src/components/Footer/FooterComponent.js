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
        position: 'absolute',
        maxWidth: "100%",
        minWidth: "100vw",
        left: 0,
        padding: '3%',
        marginTop: '100px',
     }}
    class="ui inverted vertical footer segment">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Sitemap</a>
            <a href="#" class="item">Contact Us</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Services</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Banana Pre-Order</a>
            <a href="#" class="item">DNA FAQ</a>
            <a href="#" class="item">How To Access</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">Footer Header</h4>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </div>
      </div>
  </div>
export default FooterComponent;