import React from 'react';
import { Link } from 'react-router-dom';

const ShowArticleComponent = ({ location: { obj } }) => {
    return <div className="ui link cards" style={{ marginTop: 100 }}>
        <div className="card" style={{ maxWidth: "100%", minWidth: "70%", minHeight: "30%", maxHeight: "70%" }}>
            <div className="extra content">
                <Link to="/">
                    Go Back
                </Link>
            </div>
            <div className="image">
                <img src={obj.urlToImage} />
            </div>
            <div className="content">
                <div className="header">{obj.title}</div>
                <div className="meta">
                    <span className="date">Coworker</span>
                </div>
                <div className="description">
                    Molly is a personal assistant living in Paris.
                    {obj.description}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    Joined in 2011
                </span>
                <span>
                    <i className="user icon"></i>
                    35 Friends
                </span>
            </div>
        </div>
    </div>
}

export default ShowArticleComponent;